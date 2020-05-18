import React from 'react';
import { ProductItem } from 'components';

const ProductList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {items.map(item =>  <ProductItem item={item} key={item.id} />)}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};


export default ProductList;
