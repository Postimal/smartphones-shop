import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from 'data/actions/smartphones.actions';
import { ReactComponent as CartSVG } from 'data/img/cart.svg';

import './Navigation.scss';


const Navigation = ({ toggleCart, inCartProductsNumber }) => {
  const navi = [
    { content: 'Home', to: '/' },
    { content: 'Products', to: '/products' },
    { content: 'About Us', to: '/about-us' },
    { content: 'Contact', to: '/contact' },
  ];

  return (
    <header className="navigation-container">
      <nav className="navigation-panel">
        {navi.map(link =>
          <Link className="navigation-panel__nav-item" to={link.to} key={link.content}>{link.content}</Link>,
        )}
      </nav>
      <button className="navigation-container__cart" onClick ={toggleCart}>
        <CartSVG />
        {inCartProductsNumber > 0 && <span className="cart__items-number">{inCartProductsNumber}</span>}
      </button>
    </header>
  );
};
const mapStateToProps = state => ({
  inCartProductsNumber: state.smartphonesReducer.currentFiltered.filter(item => item.inCart).length,
});
const mapDispatchToProps = {
  toggleCart,
};

export default connect( mapStateToProps, mapDispatchToProps)(Navigation);
