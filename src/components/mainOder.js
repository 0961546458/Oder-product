import React, { useState, useEffect} from 'react';
import FrontMain from './frontMain/frontMain.js';
import ProductOder from './productOder/ProductOder.js';
import PageLogin from './pageLogin/pageLogin.js';
import PageRegistration from './pageRegistration/pageRegistration.js';
import SimpleSlider from './slider/slider.js';
import Footer from './footer/footer.js';
import ViewCart from './productOder/viewCart/viewCart.js';
import ProductDetails from './productOder/productDetails/productDetails.js';
import MiniCardIteam from './productOder/MiniCartIteam.js';
import UserInformation from './userInformation/userInformation.js';
// import ShowSuccess from './productOder/viewCart/showSuccess.js';
import { useSelector, useDispatch } from 'react-redux';
import {onResetShowDetails, 
	onShowViewCart, 
	onActiveHome, 
	onActiveMenuoder, 
	onActiveViewcart, 
	onfetchData, 
	onfetchLogin, 
	onfetchSuccess, 
	onShowLogin, 
	onShowRegistration, 
	onLogout, 
	onShowInformation,
	onFetchAdminLogin
} from './redux/actions.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MainOder() {
	// tên đăng nhập 
	const [userLogin, setUserLogin] = useState('');
	const [nameLogin, setNameLogin] = useState('');
	const [idLogin, setIdLogin] = useState('');

	// --------------fetchData-------------
	useEffect(()=>{
        dispatch(onfetchData());
        // dispatch(onfetchLogin());
        dispatch(onfetchSuccess());
    })
    useEffect(()=>{
        dispatch(onfetchLogin());
        dispatch(onFetchAdminLogin());
    },[])


	const dispatch = useDispatch();

	const showDetails = useSelector(state => state.showDetails);

	const menuActive = useSelector(state => state.menuActive);

	const numberOder = useSelector(state => state.numberOder);

	const loginSuccess = useSelector(state => state.loginSuccess);

	function resetShowDetails(){
		dispatch(onResetShowDetails());
	}
	// function resetShowDetails3(){
	// 	dispatch(onResetShowDetails3());
	// }
	// test git

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
	
	function showLogin(){
		dispatch(onShowLogin());
	}
	
	function showRegistration(){
		dispatch(onShowRegistration());
	}

	function logout(){
		dispatch(onLogout());
	}

	function handleHome(){
		dispatch(onResetShowDetails());
		dispatch(onActiveHome());
	}

	function onUpdateNameLogin(userLogin){
		setNameLogin(userLogin.useName);
		setIdLogin(userLogin.id);
		setUserLogin(userLogin);
	}

	function showInformation(){
		dispatch(onShowInformation());
	}

	// console.log(showDetails)

  return (
		<Router>
	  	<nav className="navbar navbar-expand-lg navbar-light bg-light nav-control nav-ct">
		  <Link className="nav-link navbar-brand navbarLogo" to="/" onClick={handleHome}>
	  		<img src="./imge/coffee-logo.png" className="logoCoffee" alt="logo"/>
		  </Link>
		  <button className="navbar-toggler toggler-ct" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
		  		<span className={loginSuccess ? "showDetails greeting" : "mainLogin hiddenDetails"} onClick={showInformation}>Xin chào: {nameLogin}</span>
		  		<button type="button" className={loginSuccess ? "showDetails btn btn-light mainLogin btn-logout" : "hiddenDetails"} onClick={logout}>Đăng xuất</button>
			  	<button type="button" className={loginSuccess ? "hiddenDetails" : "btn btn-light mainLogin"} onClick={showLogin}>Đăng nhập</button>
			  	<button type="button" className={loginSuccess ? "hiddenDetails" : "btn btn-light registration"} onClick={showRegistration}>Đăng ký</button>
			</div>
			<div className="amountCart" onClick={showViewCart}>
			  	<i className="fas fa-shopping-cart icomCart"></i>
			  	<div className={numberOder === 0 ? "hiddenDetails" : "amountOder showDetails"} >{numberOder}</div>
			</div>
		  </div>
		</nav>
		<Switch>
			<Route path="/producOder">
	            <div className={showDetails === 0 || showDetails === 1 || showDetails === 2 ? "showDetails" : "hiddenDetails"}>
					<ProductOder idLogin={idLogin}/>
				</div>
	        </Route>
	        <Route path="/viewCart">
		    	<div className={showDetails === 2 ? "showDetails" : "hiddenDetails"}>
		    		<ViewCart idLogin={idLogin}/>
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
					    		<ProductDetails/>
						</div>
						<div className="col-sm-4">
					    		<MiniCardIteam/>
						</div>
					</div>
				</div>
				<div className={showDetails === 3 ? "showDetails" : "hiddenDetails"}>
					<div>
						<ProductOder/>
					</div>
				</div>
				<div className={showDetails === 2 ? "showDetails" : "hiddenDetails"}>
					<ViewCart idLogin={idLogin}/>
				</div>
	        </Route>
		</Switch>

	  	<PageLogin onUpdateNameLogin={onUpdateNameLogin}/>

		<PageRegistration/>

	  	<div className={showDetails === 4 ? "showDetails" : "hiddenDetails"}>
	  		<UserInformation userLogin={userLogin}/>
	  	</div>

		<div>
	  		<Footer/>
	  	</div>
  	</Router>
  );
}

export default MainOder;
