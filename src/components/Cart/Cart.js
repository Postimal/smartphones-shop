import React from 'react';
import { connect } from 'react-redux';
import { PayPalButton, CartItem } from 'components';
import { toggleCart } from 'data/actions/smartphones.actions';

import './Cart.scss';

export const Cart = ({ inCart, toggleCart }) => { // dałem tu named export zeby mozna bylo testoac bez buga przez owrapowanie w connect
  const getTotal = () =>{
    return inCart.length ?
      inCart.map(item => item.total > 1 ? item.total * item.price : item.price).reduce((prev, curr) => prev + curr)
      :
      0;
  };

  // const clearCart = () =>{
  //   return inCart.length ?
  //     inCart.map(item => {
  //       item.total = 0;
  //       item.inCart = false;
  //       return []
  //     })
  //     :
  //     null;
  // };
  return (
    <div className="cart-container">
      <button className="cart__close-btn" onClick={toggleCart}>
        <span className="rotate">
          close
        </span>
      </button>
      <p className="cart__header">
        {inCart.length ? 'Your order' : 'Nothing in Cart'}
      </p>
      <ul className="cart__mini-product-list">
        {inCart && inCart.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      {inCart.length > 0 &&
        <>
          {/* <button onClick={clearCart}>Clear Cart</button> */}
          <div>Total:{getTotal()} $</div>
          {/* <PayPalButton total={getTotal()} /> */}
        </>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  inCart: state.smartphonesReducer.currentFiltered.filter(item => item.inCart),

});

const mapDispatchToProps = {
  toggleCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
