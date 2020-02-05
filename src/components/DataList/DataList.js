import React, { useEffect, useState, useRef, useMemo } from 'react';
import './DataList.scss';
import { baseUrl } from '../../api';
import Loader from '../Loader/Loader';
import DataItem from '../DataItem/DataItem';

const DataList = () => {
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

  const handleEntities = (links, newSubHeading, currentEntity) => {
    setIsloading(true);

    const entityTitle = currentEntity.title || currentEntity.name;

    if (links === null) {
      setSubHeading(
        `we cant find
               ${newSubHeading.toUpperCase()}
               of ${entityTitle}`
      );

      subHeadingRef.current.scrollIntoView();

      return;
    }

    setSubHeading(`${newSubHeading.toUpperCase()}
     of ${entityTitle}`);

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
              `we cant find
               ${newSubHeading.toUpperCase()}
               of ${entityTitle}`
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

      for (let i = 0; i < valuesToCheck.length; i += 1) {
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
                  <Loader />
                )}

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
                dataItem => (
                  <DataItem
                    key={dataItem.title || dataItem.name}
                    handleEntities={handleEntities}
                    dataItem={dataItem}

                  />
                )
              )
          }
        </ul>

      </section>
    </main>
  );
};

export default DataList;
