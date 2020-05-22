import React, { useEffect, useRef } from 'react';
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

  const cartRef = useRef();

  useEffect(() => {
    if(inCartProductsNumber) {
      cartRef.current.classList.add('animate');
      const id = setTimeout(()=>{cartRef.current.classList.remove('animate');}, 1500);
      return () => {
        window.clearTimeout(id);
      };
    }
  }, [inCartProductsNumber]);

  return (
    <header className="navigation-container">
      <nav className="navigation-panel">
        {navi.map(link =>
          <Link className="navigation-panel__nav-item" to={link.to} key={link.content}>{link.content}</Link>,
        )}
      </nav>
      <button
        className="navigation-container__cart"
        ref={cartRef}
        onClick ={toggleCart}
      >
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
