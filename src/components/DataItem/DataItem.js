import React from 'react';
import './DataItem.scss';

const DataItem = ({ dataItem, handleEntities }) => {
  const movieData = Object.entries(dataItem);

  const movieDataWithLinks = movieData.map(
    (data) => {
      if (typeof data[1] !== 'object') {
        return (
          <div
            key={data[0]}
            className="item__container"
          >
            <p className="item__key">
              {data[0]}
            </p>
            <p className="item__value">
              {data[1]}
            </p>

          </div>
        );
      }

      return (
        <div
          key={data[0]}
          className="item__container"
        >
          <button
            type="button"
            onClick={() => {
              handleEntities(data[1], data[0], dataItem);
            }}

            className="item__entity"
          >
            See
            {' '}
            {data[0]}
          </button>
        </div>
      );
    }
  );

  return (
    <li className="item">
      {
        movieDataWithLinks.map(data => data)
      }
    </li>
  );
};

export default DataItem;
