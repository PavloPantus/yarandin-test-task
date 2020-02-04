import React, { useState, useEffect } from 'react';

const MoviesList = () => {
  const [dataFromServer, setdataFromServer] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await fetch('https://swapi.co/api/films/');
      const data = await response.json();

      setdataFromServer(data.results);
    })();
  }, []);

  console.log(dataFromServer);

  const handleEntities = (links) => {
    const requests = links.map(link => fetch(link));
    Promise.all(requests)
        .then(responses => responses.map(
            response=>response.json()
        ))
        .then(dataPromises => Promise.all(dataPromises) )
        .then(data => {setdataFromServer(data)})
  };

  return (
    <main>
      <section className="data-list-section">
        <ul className="data__list">
          {
            dataFromServer
              .map(
                (dataItem) => {
                  const movieData = Object.entries(dataItem);
                  const movieDataWithLinks = movieData.map(
                    (data) => {
                      if (typeof data[1] === 'string') {
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
                          <p
                            onClick={() => {
                              handleEntities(data[1]);
                            }}

                            className="movie__entity"
                          >
                            See
                            {' '}
                            {data[0]}
                          </p>
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
};

export default MoviesList;
