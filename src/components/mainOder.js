import React from 'react';
import ProductOder from './productOder/ProductOder.js';
import PageLogin from './pageLogin/pageLogin.js';
import PageRegistration from './pageRegistration/pageRegistration.js';
import SimpleSlider from './slider/slider.js';
import Footer from './footer/footer.js';

function MainOder() {
  return (
  	<div>
  		<nav className="navbar navbar-light bg-light">
		  <div className="container">
		  	<a className="navbar-brand navbarLogo" href="#">
		  		<img src="./imge/coffee-logo.png" className="logoCoffee" alt="logo"/>
			  </a>
			  <div className="LoginRegistration">
			  	<button type="button" className="btn btn-light mainLogin">Đăng nhập</button>
			  	<button type="button" className="btn btn-light registration">Đăng ký</button>
			  </div>
			  <div className="amountCart">
			  	<i className="fas fa-shopping-cart icomCart"></i>
			  	<div className="amountOder">1</div>
			  </div>
		  </div>
		</nav>

		<SimpleSlider/>

	  	<ProductOder/>

	  	<PageLogin/>

	  	<PageRegistration/>

	  	<div>
	  		<Footer/>
	  	</div>

  	</div>
  );
}

export default MainOder;
