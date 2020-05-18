import React from 'react';

import './Banner.scss';

const Banner = ({ content }) => {
  return (
    <h1 className="shop-banner">{content}</h1>
  );
};

export default Banner;
