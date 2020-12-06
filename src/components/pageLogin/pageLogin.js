import React from 'react';
import './pageLogin.css';
import { useSelector } from 'react-redux';

function PageLogin() {

	const subtotal = useSelector(state => state.subtotal);

  return (
    <div id="pageLogin" className="container">
    	<div className="wrapper fadeInDown">
		  <div id="formContent">
		    <div className="fadeIn first">
		      <img src="./imge/coffee-logo.png" id="icon" alt="User Icon" />
		    </div>
		    <form>
		      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
		      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
		      <input type="submit" className="fadeIn fourth" />
		    </form>
		  </div>
		</div>
    </div>
  );
}

export default PageLogin;
