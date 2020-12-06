import React, {useState} from 'react';
import './ProductOder.css';
import MenuorderOptions from './MenuorderOptions.js';
import MiniCardIteam from './MiniCartIteam.js';
import ProductFilter from './productFilter.js';
import ProductDetails from './productDetails/productDetails.js';
import { useSelector, useDispatch } from 'react-redux';
import {onSearchbox} from '../redux/actions.js';
import MyContext from '../../Mycontext.js';

function ProductOder() {

	const dispatch = useDispatch();

	const subtotal = useSelector(state => state.subtotal);
	const showDetails = useSelector(state => state.showDetails);

	let [searchbox, setSearchbox] = useState('');

	dispatch(onSearchbox(searchbox));

  return (
  	<MyContext.Provider value={
      {
        searchbox
      }
    }>

	    <div id="productOder" className="container">
		  <div className="row">
		    <div className="col-sm-8">

		    	<div className={showDetails ? "productDetails showDetails" : "productDetails hiddenDetails"}>
		    		<ProductDetails/>
		    	</div>

		    	<div className={showDetails ? "row productOder-left hiddenDetails" : "row productOder-left showDetails"}>
		    		<div className="row productOder-left">
			    		<div className="col-sm-4 devvn_menuorder_left">

			    			<div className="shadowBox">
			    				<ProductFilter/>
			    			</div>

					    </div>
					    <div className="col-sm-8 devvn_menuorder_mid">
					    	<div className="shadowBox">
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
		    <div className="col-sm-4 devvn_menuorder_right">
    			<div className="shadowBox">
    				<div className="minicart_title">
			    		GIỎ HÀNG CỦA TÔI
			    	</div>
		      	<div className="menuorder_minicart">
		      		
		      		<MiniCardIteam/>

		      	</div>

		      	<div className="cart-subtotal">
		      		<div>Tổng tiền thanh toán:</div>
		      		<div className="woocommerce-Price-amount">{subtotal}đ</div>
		      	</div>
		      	<div className="minicart_footer">
		      		<button type="button" className="btn btn-light menuorder-btn">XEM GIỎ HÀNG</button>
		      	</div>
    			</div>
		    	
		    </div>
		  </div>
		</div>
    </MyContext.Provider>
    
  );
}

export default ProductOder;
