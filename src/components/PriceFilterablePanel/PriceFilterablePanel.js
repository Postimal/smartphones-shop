import React from 'react';
import { connect } from 'react-redux';
import { filterPrice } from 'data/actions/smartphones.actions';

import './PriceFilterablePanel.scss';

const PriceFilterablePanel = ({ minPrice, maxPrice, price, filterPrice }) => {
  const handleChange = event => {
    const value = event.target.value;
    filterPrice(value);
  };

  return (
    <div className="form-group">
      <label htmlFor="price">Price</label>
      <span className="form-group__price">${price}</span>
      <input
        type="range"
        name= {maxPrice}
        min={minPrice}
        max={maxPrice}
        id="price"
        value={price}
        onChange={handleChange}
        className="form-control"
      />
      <span className="form-group__price-min">${minPrice}</span>
      <span className="form-group__price-max">${maxPrice}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  maxPrice: state.smartphonesReducer.maxPrice,
  minPrice: state.smartphonesReducer.minPrice,
  price: state.smartphonesReducer.price,
});

const mapDispachToProps = {
  filterPrice: input => filterPrice(input),

};


export default connect(mapStateToProps, mapDispachToProps )(PriceFilterablePanel);
