import React, {useState, useEffect} from 'react';
import './ProductOder.css';
import MenuorderOptions from './MenuorderOptions.js';
import MiniCardIteam from './MiniCartIteam.js';
import ProductFilter from './productFilter.js';
import ProductDetails from './productDetails/productDetails.js';
import ViewCart from './viewCart/viewCart.js';
import { useSelector, useDispatch } from 'react-redux';
import {onSearchbox} from '../redux/actions.js';
import MyContext from '../../Mycontext.js';

function ProductOder() {

	const dispatch = useDispatch();

	// const subtotal = useSelector(state => state.subtotal);
	const showDetails = useSelector(state => state.showDetails);

	let [searchbox, setSearchbox] = useState('');

	
	useEffect(() => {
	    dispatch(onSearchbox(searchbox));
	},[searchbox]);

	// function showViewCart(){
	// 	dispatch(onShowViewCart());
	// }

  return (
  	<MyContext.Provider value={
      {
        searchbox
      }
    }>

	    <div id="productOder" className="container">
	    	<div className={showDetails === 2 ? "showDetails" : "hiddenDetails"}>
	    		<ViewCart/>
	    	</div>
		  <div className="row">


		    <div className={showDetails === 2 ? "col-sm-7 hiddenDetails" : "col-sm-8 showDetails"}>

		    	<div className={showDetails === 1 ? "showDetails" : "hiddenDetails"}>
		    		<ProductDetails />
		    	</div>

		    	<div className={showDetails === 0 ? "showDetails" : "hiddenDetails"}>
		    		<div className="row productOder-left">
			    		<div className="col-sm-4 devvn_menuorder_left">

			    			<div className="shadowBox">
			    				<ProductFilter/>
			    			</div>

					    </div>
					    <div className="col-sm-8 devvn_menuorder_mid shadowBox">
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
		    <div className={showDetails === 2 ? "col-sm-4 devvn_menuorder_right hiddenDetails" : "col-sm-4 devvn_menuorder_right showDetails"}>
    				
			      		<MiniCardIteam/>

		    </div>
		  </div>
		</div>
    </MyContext.Provider>
    
  );
}

export default ProductOder;
