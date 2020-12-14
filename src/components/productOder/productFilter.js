import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onFindPriceStart} from '../redux/actions.js';

function ProductFilter() {

	const dispatch = useDispatch();

	let [price1, setPrice1] = useState(false);
	let [price2, setPrice2] = useState(false);
	let [price3, setPrice3] = useState(false);

	let [start1, setStart1] = useState(false);
	let [start2, setStart2] = useState(false);
	let [start3, setStart3] = useState(false);
	let [start4, setStart4] = useState(false);
	let [start5, setStart5] = useState(false);


	useEffect(() => {
		dispatch(onFindPriceStart(price1,price2,price3,start1,start2,start3,start4,start5));
	});

  return (
  	<div>
  		<div className="choosePrice">
			<h5>Chọn mức giá:</h5>
	      	<form>
	      		<div className="form-check">
	      			<input type="checkbox" id="vehicle1" onChange={(e)=>{setPrice1(e.target.checked)}}/>
			  		<label htmlFor="vehicle1">&nbsp; Dưới 15000đ </label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="vehicle2" onChange={(e)=>{setPrice2(e.target.checked)}}/>
			  		<label htmlFor="vehicle2">&nbsp; 15000đ - 30000đ</label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="vehicle3" onChange={(e)=>{setPrice3(e.target.checked)}}/>
			  		<label htmlFor="vehicle3">&nbsp; Trên 30000đ</label><br/>
	      		</div>
			</form>
		</div>
		<div className="chooseStart">
			<h5>Chọn đánh giá:</h5>
	      	<form>
	      		<div className="form-check">
	      			<input type="checkbox" id="checkStart1" onChange={(e)=>{setStart1(e.target.checked)}}/>
			  		<label htmlFor="checkStart1">&nbsp; 1 Sao </label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="checkStart2" onChange={(e)=>{setStart2(e.target.checked)}}/>
			  		<label htmlFor="checkStart2">&nbsp; 2 Sao</label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="checkStart3" onChange={(e)=>{setStart3(e.target.checked)}}/>
			  		<label htmlFor="checkStart3">&nbsp; 3 Sao</label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="checkStart4" onChange={(e)=>{setStart4(e.target.checked)}}/>
			  		<label htmlFor="checkStart4">&nbsp; 4 Sao</label><br/>
	      		</div>
	      		<div className="form-check">
	      			<input type="checkbox" id="checkStart5" onChange={(e)=>{setStart5(e.target.checked)}}/>
			  		<label htmlFor="checkStart5">&nbsp; 5 Sao</label><br/>
	      		</div>
			</form>
		</div>
  	</div>
  );
}

export default ProductFilter;
