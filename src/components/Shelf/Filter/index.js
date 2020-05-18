import React, { Component } from 'react';
import Checkbox from './Checkbox';

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

class Filter extends Component {
  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = (label) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  render() {
    return (
      <div>
        <h4>Sizes:</h4>
        {availableSizes.map(this.createCheckbox)}
      </div>
    );
  }
}

export default Filter;
