import React from 'react';
import { Card } from 'antd';

const Product = ({ product }) => {
  return (
    <Card
      data-sku={product.sku}
      bordered={false}
      cover={
        <img
          alt="product thumbnail"
          src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        />
      }
    >
      <Card.Meta
        title={product.title}
        description={'$ ' + product.price}
        style={{ textAlign: 'center' }}
      />
    </Card>
  );
};

export default Product;
