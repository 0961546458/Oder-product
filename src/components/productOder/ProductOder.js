import React, {useState, useEffect} from 'react';
import './ProductOder.css';
import MenuorderOptions from './MenuorderOptions.js';
import MiniCardIteam from './MiniCartIteam.js';
import ProductFilter from './productFilter.js';
import ProductDetails from './productDetails/productDetails.js';
import ViewCart from './viewCart/viewCart.js';
import { useSelector, useDispatch } from 'react-redux';
import {onSearchbox, onfetchData} from '../redux/actions.js';

function ProductOder(props) {
	
	const dispatch = useDispatch();

	// const subtotal = useSelector(state => state.subtotal);
	const showDetails = useSelector(state => state.showDetails);

	let [searchbox, setSearchbox] = useState('');

	
	useEffect(() => {
	    dispatch(onSearchbox(searchbox));
	},[searchbox]);

  return (
    <div id="productOder">
    	<div className={showDetails === 2 ? "showDetails" : "hiddenDetails"}>
    		<ViewCart idLogin={props.idLogin}/>
    	</div>
	  	<div className="row">
		    <div className={showDetails === 2 ? "col-lg-7 col-sm-7 hiddenDetails" : "col-lg-8 col-sm-7 showDetails"}>

		    	<div className={showDetails === 1 ? "showDetails" : "hiddenDetails"}>
		    		<ProductDetails />
		    	</div>

		    	<div className={showDetails === 0 || showDetails === 3 ? "showDetails" : "hiddenDetails"}>
		    		<div className="row productOder-left">
			    		<div className="col-lg-4 col-sm-12 devvn_menuorder_left">

			    			<div className="shadowBox">
			    				<ProductFilter/>
			    			</div>

					    </div>
					    <div className="col-lg-8 col-sm-12 devvn_menuorder_mid shadowBox">
					    	<div className="">
			    				<div className="menuorder-searchbox">
							      	<input type="text" onChange={(e)=>{setSearchbox(e.target.value)}} value={searchbox}/>
							      	<div className="search"><i className="fas fa-search"></i></div>
							    </div>

							    <MenuorderOptions/>

			    			</div>
					    </div>
			    	</div>
		    	</div>
		    	
		    </div>
		    <div className={showDetails === 2 ? "col-lg-4 col-sm-5 devvn_menuorder_right hiddenDetails" : "col-lg-4 col-sm-5 devvn_menuorder_right showDetails"}>	
			    <MiniCardIteam/>
		    </div>
	  	</div>
	</div>
  );
}

export default ProductOder;
