import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';
import Filter from './Filter';
import axios from 'axios';
import { productsAPI } from '../../utils';

function constructAPI(filters, sort) {
  const sortOrders = {
    lowestprice: 'lowestprice',
    highestprice: 'highestprice',
  };

  let api = productsAPI;

  const params = [];

  if (filters.length || sort) {
    api += '?';
  }

  if (filters.length) {
    filters.forEach((filter) => {
      params.push(`size=${filter}`);
    });
  }

  if (sort) {
    params.push('_sort=price');
    params.push('_order=' + (sort === sortOrders.lowestprice ? 'asc' : 'desc'));
  }

  return api + params.join('&');
}

class Shelf extends PureComponent {
  state = {
    products: [],
    filters: [],
    sort: '',
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <Row style={{ width: '100%' }}>
        <Col span={4}>
          <Filter updateFilters={this.handleFilters} />
        </Col>
        <Col span={20} className="shelf-container">
          <ShelfHeader
            productsLength={products.length}
            updateSort={this.handleSort}
          />
          <ProductList products={products} />
        </Col>
      </Row>
    );
  }

  handleFilters = (filters) => {
    this.setState({ filters }, this.fetchProducts);
  };

  handleSort = (sort) => {
    this.setState({ sort }, this.fetchProducts);
  };

  fetchProducts = () => {
    const filters = this.state.filters;
    const sort = this.state.sort;

    const fetchAPI = constructAPI(filters, sort);

    axios
      .get(fetchAPI)
      .then((res) => {
        let products = res.data;

        this.setState({ products });
      })
      .catch((err) => {
        console.error('Could not fetch products. Try again later.', err);
      });
  };
}

export default Shelf;
