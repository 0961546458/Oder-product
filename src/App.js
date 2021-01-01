import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainOder from './components/mainOder.js';
import AdminOder from './components/adminOder/adminOder.js';
import PageLoginAdmin from './components/pageLoginAdmin.js';
import {Provider} from 'react-redux';
import store from './components/redux/stores';

function App() {

	const [statusAdmin, setStatusAdmin] = useState(false);
  const [showModalAdmin, setShowModalAdmin] = useState(false);

  function showLoginAdmin(){
    setShowModalAdmin(true);
  }
  function closeLoginAdmin(){
    setShowModalAdmin(false);
  }
  
  function submitLoginAdmin(nameAdmin,passwordAdmin,e,dataAdminLogin){
    e.preventDefault();
    var index = dataAdminLogin.findIndex(function(item, i){
      return item.useName.toUpperCase() === nameAdmin.toUpperCase() && item.password.toUpperCase() === passwordAdmin.toUpperCase();
    });
    if (index >= 0 ) {
      setStatusAdmin(true);
      setShowModalAdmin(false);
      // setUseNameAdmin('');
      // setPasswordAdmin('');
    }
  }

  function logoutAdmin(){
    setStatusAdmin(false);
  }

  return (
  	<Provider store={store}>
  		<div className={statusAdmin ? "showDetails" : "hiddenDetails"}>
    		<div className={statusAdmin ? "showDetails admin" : "hiddenDetails"} onClick={logoutAdmin}><a>Thoát</a></div>
  			<AdminOder/>
  		</div>

  		<div className="container">
  			<div className={statusAdmin ? "hiddenDetails" : "showDetails admin"} onClick={showLoginAdmin}><a>Admin</a></div>
  			<div className={statusAdmin ? "hiddenDetails" : "showDetails"}>
  				<MainOder/>
  			</div>
      </div>
      <div id="myModal" className={showModalAdmin ? "showDetails modal" : "hiddenDetails"}>
        <PageLoginAdmin submitLoginAdmin={submitLoginAdmin} closeLoginAdmin={closeLoginAdmin}/>
      </div>
  	</Provider>
  );
}

export default App;
