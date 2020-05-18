import React from 'react';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
];

const createOptions = (options) => {
  return options.map((o) => (
    <option value={o.value} key={o.value}>
      {o.label}
    </option>
  ));
};

const Sort = ({ sort, updateSort }) => (
  <div className="sort">
    Order by &nbsp;
    <select
      value={sort}
      onChange={(e) => updateSort(e.target.value)}
    >
      {createOptions(sortBy)}
    </select>
  </div>
);

export default Sort;
