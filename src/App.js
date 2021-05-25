
import React  from 'react';
import {Header} from './components/Header';
import {TransactionList} from './components/TransactionList';

import {GlobalProvider} from './context/State';




import './App.css';

const  App = () => {
  return (
    <GlobalProvider>

      <div className = "container">
        <Header/>
        <TransactionList/>
      </div>
    </GlobalProvider>
   
  );
}

export default App;
