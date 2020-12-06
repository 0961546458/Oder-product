import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onCloseDetails, onTopping} from '../../redux/actions.js';

function ProductDetails() {

	const dispatch = useDispatch();

	function closeDetails(){
		dispatch(onCloseDetails());
	}


	const productDetails = useSelector(state => state.productDetails);

	const priceTopping = useSelector(state => state.priceTopping);

	let [topping, setTopping] = useState('');

	dispatch(onTopping(topping));

  return (
  	<div className="productDetails">
  		<div className="row wrapControl">
  			<div className="col-sm-6 imageDetails">
	  			<img src={productDetails.image} alt="sda"/>
	  		</div>
	  		<div className="col-sm-6 controlDetails">
	  			<h3 className="nameDetails">{productDetails.name}</h3>
	  			<i className="fas fa-times iconClose" onClick={closeDetails}></i>
	  			<div className="menuorder-topping">
	  				<div className="topping-titel">Size:</div>
	  				<div className="row">
	  					<p className="topping-checkbox-list">
						    <input type="radio" id="test1" name="radio-group" onChange={(e)=>{setTopping(e.target.value)}} value={0} defaultChecked/>
						    <label htmlFor="test1">Nhỏ</label>
						  </p>
						  <p className="topping-checkbox-list">
						    <input type="radio" id="test2" name="radio-group" onChange={(e)=>{setTopping(e.target.value)}} value={6000}/>
						    <label htmlFor="test2">Vừa (+6000đ)</label>
						  </p>
						  <p className="topping-checkbox-list">
						    <input type="radio" id="test3" name="radio-group" onChange={(e)=>{setTopping(e.target.value)}} value={13000}/>
						    <label htmlFor="test3">Lớn (+13000)</label>
						  </p>
	  				</div>
	  			</div>
	  			<div className="amountDetails">Giá: {priceTopping}đ</div>
	  			<button className="oderDetails">Đặt ngay</button>
	  		</div>
  		</div>
  		<div className="describeDetails">
  			<h3>Mô tả</h3>
  			<div className="hr-describeDetails"></div>
  			<p>{productDetails.describe}</p>
  		</div>
  	</div>
  );
}

export default ProductDetails;