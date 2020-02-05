import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__window">
      <img
        className="loader__logo"
        src="/images/star-ship.png"
        alt=""
      />
      Loading data ...
    </div>
  </div>
);

export default Loader;
