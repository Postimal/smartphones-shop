import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmartphones } from 'data/actions/smartphones.actions';
import  { ColorFilterablePanel, ProductList, Modal, Cart, SorterPanel, PriceFilterablePanel } from 'components';
import { filterSmartphones } from 'utils/helpers';

import './App.scss';

function App({ fetchSmartphones, currentFiltered, isCartOpen }) {
  useEffect(() => {
    fetchSmartphones('smartphones');
  }, [fetchSmartphones]);


  return (
    <div>
      <main className="main-container">
        <section className="main-container__filters">
          <SorterPanel />
          <ColorFilterablePanel />
          <PriceFilterablePanel />
        </section>
        <ProductList className="main-container__products"  items={currentFiltered} />
      </main>
      {isCartOpen  &&
      <Modal>
        <Cart />
      </Modal>}
    </div>
  );
}


const filterSmartphonesByPriceSelector = (smartphonesToFilter, price) => {
  return smartphonesToFilter.filter(smartphone => smartphone.price <= price);
};

const mapStateToProps = state => ({
  currentFiltered: filterSmartphonesByPriceSelector(
    filterSmartphones(state.smartphonesReducer.currentFiltered, state.filterReducer), state.smartphonesReducer.price),
  isCartOpen: state.smartphonesReducer.isCartOpen,
});

const mapDispachToProps = {
  fetchSmartphones,
};


export default connect(mapStateToProps, mapDispachToProps )(App);
