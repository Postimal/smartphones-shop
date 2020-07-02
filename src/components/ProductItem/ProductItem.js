import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from 'data/actions/smartphones.actions';
import { StarRating, ColorPicker } from 'components';
import { ReactComponent as CartSVG } from 'data/img/cart.svg';

import './ProductItem.scss';

const ProductItem = ({ item: { id, title, img, price, inCart, colors }, addToCart }) => {
  const addToCartHandler = id => {
    addToCart(id);
  };

  return (
    <li className="product-item" key={id}>
      <div  className="product-item-wrapper">
        <Link  to={`/details/${id}`} className="product-item__img">
          <img
            src={require(`../../${img}`)}
            alt={`product ${title}`}
          />
        </Link>
        <div className="product-item__title">
          {title}
        </div>
        <p className="product-item__price">${price}</p>
        <StarRating />
        <button className="product-item__cart-btn" disabled={inCart ? true : false} onClick={()=>{ addToCartHandler(id);}}>
          {inCart ? (
            <p disabled>in Cart</p>
          ) : (
            <CartSVG />
          )}
        </button>
        <ColorPicker colors={colors}/>
      </div>
    </li>
  );
};

const mapDispatchToProps = {
  addToCart: id => addToCart(id),


};

export default connect(null, mapDispatchToProps)(ProductItem);
