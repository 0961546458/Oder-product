import React from 'react';
import FrontMain from './frontMain/frontMain.js';
import ProductOder from './productOder/ProductOder.js';
import PageLogin from './pageLogin/pageLogin.js';
import PageRegistration from './pageRegistration/pageRegistration.js';
import SimpleSlider from './slider/slider.js';
import Footer from './footer/footer.js';
import ViewCart from './productOder/viewCart/viewCart.js';
import ProductDetails from './productOder/productDetails/productDetails.js';
import MiniCardIteam from './productOder/MiniCartIteam.js'
import { useSelector, useDispatch } from 'react-redux';
import {onResetShowDetails, onShowViewCart, onActiveHome, onActiveMenuoder, onActiveViewcart} from './redux/actions.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MainOder() {

	const dispatch = useDispatch();

	const showDetails = useSelector(state => state.showDetails);

	const menuActive = useSelector(state => state.menuActive);

	function resetShowDetails(){
		dispatch(onResetShowDetails());
	}

	function showViewCart(){
      dispatch(onShowViewCart());
    }
	
	function activeHome(){
		dispatch(onActiveHome());
	}

	function activeMenuoder(){
		dispatch(onActiveMenuoder());
	}

	function activeViewcart(){
		dispatch(onActiveViewcart());
	}

  return (
  	<div className="container">
  		<Router>
		  	<nav className="navbar navbar-expand-lg navbar-light bg-light nav-control">
			  <a className="navbar-brand navbarLogo" href="#">
		  		<img src="./imge/coffee-logo.png" className="logoCoffee" alt="logo"/>
			  </a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse iteam-Menu" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className={menuActive === 0 ? "nav-item active" : "nav-item"} onClick={activeHome}>
			        <Link className="nav-link" to="/" onClick={resetShowDetails}>Home</Link>
			      </li>
			      <li className={menuActive === 1 ? "nav-item active" : "nav-item"} onClick={activeMenuoder}>
			        <Link className="nav-link" to="/producOder" onClick={resetShowDetails}>Đặt hàng</Link>
			      </li>
			      <li className={menuActive === 2 ? "nav-item active" : "nav-item"} onClick={activeViewcart}>
			        <Link className="nav-link" to="/viewCart" onClick={showViewCart}>Giỏ hàng</Link>
			      </li>
			    </ul>
			  </div>
			  <div className="nav-LeftIn">
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

			<Switch>
				<Route path="/producOder">
		            <div>
						<ProductOder/>
					</div>
		        </Route>
		        <Route path="/viewCart">
		            <div>
			    		<ViewCart/>
			    	</div>
		        </Route>
		        <Route path="/">
		            
					<div className={showDetails === 0 ? "showDetails" : "hiddenDetails"}>
						<SimpleSlider/>
					</div>

					<div className={showDetails === 0 ? "showDetails" : "hiddenDetails"}>
						<FrontMain/>
					</div>

					<div className={showDetails === 1 ? "showDetails" : "hiddenDetails"}>
						<div className="row">
							<div className="col-sm-8">
						    		<ProductDetails />
							</div>
							<div className="col-sm-4">
						    		<MiniCardIteam />
							</div>
						</div>
					</div>
					
		        </Route>
			</Switch>

		  	<PageLogin/>

			<PageRegistration/>

			<div>
		  		<Footer/>
		  	</div>
	  	</Router>
  	</div>
  );
}

export default MainOder;
