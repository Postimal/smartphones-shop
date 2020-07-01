import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increment, decrement } from  'data/actions/smartphones.actions';
import { ReactComponent as TrashBinSVG } from 'data/img/bin.svg';


import './CartItem.scss';

const CartItem = ({ item, removeFromCart, increment, decrement }) => {
  const handleRemove = id => {
    removeFromCart(id);
  };

  const incrementProduct = id => {
    increment(id);
  };

  const decrementProduct = id => {
    console.log(item);
    if(item.total === 1) {
      decrement(id);
      removeFromCart(id);
    } else {decrement(id);}
  };

  return (
    <li className="cart-item" key={item.id}>
      <img className="cart-item__col1 cart-item__img"
        src ={require(`../../${item.img}`)}
        alt={`cart ${item.title}`}
      />
      <div className="cart-item__col2">
        <p className="cart-item__title">{item.title}</p>
        <p className="cart-item__company">{item.company}</p>
        <div style={{ display: 'flex' }}>
          <button
            className="cart-item__btn btn--decrement"
            onClick={()=>decrementProduct(item.id)}
          >
            -
          </button>
          <p className="cart-item__amount">{item.total}</p>
          <button
            className="cart-item__btn btn--increment"
            onClick={()=>incrementProduct(item.id)}
          >
            +
          </button>
        </div>
        <button
          className="cart-item__btn btn--remove"
          onClick={()=>handleRemove(item.id)}
        >
          <TrashBinSVG />
        </button>
        <p className="cart-item__price">${item.price}</p>
      </div>
    </li>
  );
};

const mapDispatchToProps = {
  removeFromCart: id => removeFromCart(id),
  increment: id => increment(id),
  decrement: id => decrement(id),

};

export default connect(null, mapDispatchToProps)(CartItem);

