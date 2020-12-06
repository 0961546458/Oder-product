import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainOder from './components/mainOder.js';
import {Provider} from 'react-redux';
import store from './components/redux/stores';

function App() {
  return (
  	<Provider store={store}>
      <MainOder/>
  	</Provider>
  );
}

export default App;
