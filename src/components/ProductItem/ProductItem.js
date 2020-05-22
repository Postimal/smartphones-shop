import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { colorHandler } from 'utils/helpers';
import { addToCart } from 'data/actions/smartphones.actions';
import { StarRating } from 'components';
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
        <p className="product-item__price">{price} $</p>
        <StarRating />
        <button className="product-item__cart-btn" disabled={inCart ? true : false} onClick={()=>{ addToCartHandler(id);}}>
          {inCart ? (
            <p disabled>in Cart</p>
          ) : (
            <CartSVG />
          )}
        </button>
        <div className="product-item__colors-wrapper">
          <ul className="color-list">
            {colors.map(color =>(
              <li className="color__item" key={color} >
                <span onClick={colors.length > 1 ? e=>colorHandler(color, e) : undefined} className="color__item-tab" style={{ backgroundColor: `${ color }` }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = {
  addToCart: id => addToCart(id),


};

export default connect(null, mapDispatchToProps)(ProductItem);
