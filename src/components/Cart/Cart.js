import React from 'react';
import { connect } from 'react-redux';
import { PayPalButton, CartItem } from 'components';
import { toggleCart, clearCart } from 'data/actions/smartphones.actions';
import { ReactComponent as EmptyCartIconSVG } from 'data/img/emptyCart.svg';
import { ReactComponent as TrashBinSVG } from 'data/img/bin.svg';


import './Cart.scss';

export const Cart = ({ inCart, toggleCart, clearCart }) => { // dałem tu named export zeby mozna bylo testoac bez buga przez owrapowanie w connect
  const getTotal = () =>{
    return inCart.length ?
      inCart.map(item => item.total > 1 ? item.total * item.price : item.price).reduce((prev, curr) => prev + curr)
      :
      0;
  };


  return (
    <div className="cart-container">
      <button
        className="cart__close-btn"
        onClick={toggleCart}
      >
        <span className="rotate">
          close
        </span>
      </button>
      <h3 className="cart__name">CART</h3>
      <p className="cart__header">
        {inCart.length > 0 && 'Your order'}
      </p>
      {inCart.length > 0 && <ul className="cart__mini-product-list">
        {inCart.map(item => (
          <CartItem
            item={item}
            key={item.id}
          />
        ))}
      </ul>}
      {inCart.length > 0 ?
        <div className="cart__final_purchase">
          <button
            className="cart__btn btn--clear"
            onClick={clearCart}
          >
            <TrashBinSVG />
            <span>Clear</span>
          </button>
          <div className="cart__total"><div>Total</div><div>${getTotal()}</div></div>
          <PayPalButton total={getTotal()} />
        </div>
        :
        <div className="cart__list-empty">
          <EmptyCartIconSVG />
          <h3>Nothing in cart</h3>
          <p>Make your first purchase</p>
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  inCart: state.smartphonesReducer.currentFiltered.filter(item => item.inCart),

});

const mapDispatchToProps = {
  toggleCart,
  clearCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
