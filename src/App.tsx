import { MainContainer } from 'components/Main/MainContainer';
import { SortContainer } from 'components/Sort/SortContainer';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SortContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
