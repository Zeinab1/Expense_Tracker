
import React  from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';

import {TransactionList} from './components/TransactionList';

import {GlobalProvider} from './context/State';




import './App.css';

const  App = () => {
  return (
    <GlobalProvider>

      <div className = "container">
        <Header/>
        <Balance/>
        <TransactionList/>
        
      </div>
    </GlobalProvider>
   
  );
}

export default App;
