import React from 'react';
import './App.scss';
import DataList from "./components/DataList/DataList";


function App() {
  return (
      <div className={'app'}>
        <h1 className="app__heading">
          STAR WARS INFO
        </h1>
        <DataList />
      </div>
  )
}

export default App;
