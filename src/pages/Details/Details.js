import React from 'react';
import { connect } from 'react-redux';
import  { Modal, Cart, ColorPicker } from 'components';
import { addToCart } from 'data/actions/smartphones.actions';

import './Details.scss';

const Details = ({ detailedItem, addToCart, isCartOpen }) => {
  const { id, title, img, price, company, info, inCart, colors } = detailedItem;

  return (
    <section className="details-section">
      <div className="detail-item">
        <div className="detail-item__img">
          <img
            src={require(`../../${img}`)}
            alt={`product ${title}`}
          />
        </div>
        <div className="detail-item__detail-box detail-box">
          <p className="detail-box__title">{title}</p>
          <p className="detail-box__price">${price}</p>
          <p className="detail-box__company">{company}</p>
          <p className="detail-box__info">{info}</p>
          <button className="detail-box__cart-btn" disabled={inCart ? true : false} onClick={()=>{ addToCart(id);}}>
            {inCart ? (
              'in Cart'
            ) : (
              'Add to cart'
            )}
          </button>
          <div className="detail-box__color-picker">
            <ColorPicker colors={colors}/>
          </div>
        </div>
      </div>
      {isCartOpen  &&
      <Modal>
        <Cart />
      </Modal>}
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  detailedItem: state.smartphonesReducer.currentFiltered[ownProps.match.params.id - 1],
  isCartOpen: state.smartphonesReducer.isCartOpen,

});

const mapDispatchToProps = {
  addToCart: id => addToCart(id),


};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
