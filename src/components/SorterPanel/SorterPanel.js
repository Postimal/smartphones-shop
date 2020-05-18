import React from 'react';
import { connect } from 'react-redux';
import { sortByAlphabet, sortByPrice } from 'data/actions/smartphones.actions';

import './SorterPanel.scss';

const SorterPanel = ({ sortByAlphabet, sortByPrice }) => {
  const handleSortByName = e => {
    const input = e.target.value;
    sortByAlphabet(input);
  };

  const handleSortByPrice = e => {
    const input = e.target.value;
    sortByPrice(input);
  };
  return (
    <div className="sorter-container">
      <form className="sorter__name-form">
        <label htmlFor="sortByName">Sort by name</label>
        <select onChange={e => handleSortByName(e)} id="sortByName">
          <option disabled defaultValue value="">Sort by Name</option>
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>
      </form>
      <form className="sorter__price-form">
        <label htmlFor="sortByPrice">Sort by price</label>
        <select onChange={e => handleSortByPrice(e)} id="sortByPrice">
          <option disabled defaultValue value="">Sort by Price</option>
          <option value="asc">Price - Ascending</option>
          <option value="desc">Price - Descending</option>
        </select>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  maxPrice: state.smartphonesReducer.maxPrice,
  minPrice: state.smartphonesReducer.minPrice,
  price: state.smartphonesReducer.price,
});

const mapDispachToProps = {
  sortByAlphabet: input => sortByAlphabet(input),
  sortByPrice: input => sortByPrice(input),

};


export default connect(mapStateToProps, mapDispachToProps )(SorterPanel);
