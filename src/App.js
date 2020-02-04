import React, { useEffect, useState, useRef, useMemo } from 'react';
import './App.scss';
import { baseUrl } from './api';

function App() {
  const [dataFromServer, setdataFromServer] = useState([]);
  const [subHeading, setSubHeading] = useState('Films');
  const [isLoading, setIsloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const subHeadingRef = useRef();

  useEffect(() => {
    (async() => {
      setIsloading(true);

      const response = await fetch(baseUrl);
      const data = await response.json();

      setdataFromServer(data.results);
      setIsloading(false);
    })();
  }, []);

  const handleEntities = (links, newSubHeading) => {
    setIsloading(true);

    setSubHeading(newSubHeading.toUpperCase());

    const requests = links.map(link => fetch(link));

    Promise.all(requests)
      .then(responses => responses.map(
        response => response.json()
      ))
      .then(dataPromises => Promise.all(dataPromises))
      .then((data) => {
        if (Array.isArray(data)) {
          const sortedByNames = [...data];

          if (data.length === 0) {
            setSubHeading(
              `we cant find ${newSubHeading.toUpperCase()}`
            );

            return;
          }

          if (data[0].name !== undefined) {
            sortedByNames.sort(
              (a, b) => a.name.localeCompare(b.name)
            );
          }

          setdataFromServer(sortedByNames);

          return;
        }
        setdataFromServer(data);
      })
      .finally(() => {
        setIsloading(false);
        subHeadingRef.current.scrollIntoView();
      });
  };

  const handleSearchInput = ({ target }) => {
    setSearchQuery(target.value);
  };

  const visibleData = useMemo(() => dataFromServer.filter(
    (data) => {
      if (searchQuery === '') {
        return true;
      }

      const valuesToCheck = Object.values(data)
        .filter(item => (typeof item === 'string'));

      for (let i = 0; i < valuesToCheck.length; i++) {
        if (valuesToCheck[i].toLowerCase()
          .includes(searchQuery.toLowerCase())) {
          return true;
        }
      }

      return false;
    }
  ), [searchQuery, dataFromServer]);

  return (
    <main>
      <section className="data-list-section">
        {isLoading
        && (
          <div className="loader">
            <div className="loader__window">
              Loading data ...
            </div>
          </div>
        )}
        <h1 className="data-list-section__heading">
          STAR WARS INFO
        </h1>

        <h2
          ref={subHeadingRef}
          className="data-list-section__subHeading"
        >
          {subHeading}
        </h2>

        <div className="data-list-section__search-container">
          <input
            placeholder="Type for search"
            value={searchQuery}
            onChange={handleSearchInput}
            className="data-list-section__search-input"
            type="text"
          />
        </div>

        <ul className="data">
          {
            visibleData
              .map(
                (dataItem) => {
                  const movieData = Object.entries(dataItem);
                  const movieDataWithLinks = movieData.map(
                    (data) => {
                      if (typeof data[1] !== 'object') {
                        return (
                          <div className="data__container">
                            <p className="data__key">
                              {data[0]}
                            </p>
                            <p className="data__value">
                              {data[1]}
                            </p>

                          </div>
                        );
                      }

                      return (
                        <div className="data__container">
                          <button
                            type="button"
                            onClick={() => {
                              handleEntities(data[1], data[0]);
                            }}

                            className="data__entity"
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
                    <li className="data__item">
                      {
                        movieDataWithLinks.map(data => data)
                      }
                    </li>
                  );
                }
              )
          }
        </ul>

      </section>
    </main>
  );
}

export default App;
