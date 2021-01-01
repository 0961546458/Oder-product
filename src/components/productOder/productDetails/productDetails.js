import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onCloseDetails, onTopping, onPlusOderDetails} from '../../redux/actions.js';

function ProductDetails() {
    
  const productDetails = useSelector(state => state.productDetails);

	const dispatch = useDispatch();

  let [small, setSmall] = useState(true);
  let [medium, setMedium] = useState(false);
  let [big, setBig] = useState(false);
  let [sumBox, setSumbox] = useState(0);
  // console.log(small, medium, big)
  useEffect(() => {
    dispatch(onTopping(sumBox, small, medium, big));
  },[sumBox, small, medium, big]);


  const priceTopping = useSelector(state => state.priceTopping);

	function closeDetails(){
		dispatch(onCloseDetails());
	}

	function plusOderDetails(){
		dispatch(onPlusOderDetails(productDetails, priceTopping[0]));
	}

	function startIcon(){
    if(productDetails.star===1){
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      )
    }if(productDetails.star===2){
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      )
    }
    if(productDetails.star===3){
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      )
    }
    if(productDetails.star===4){
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      )
    }
    if(productDetails.star===5){
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )
    }
  }

  const handleRadioBox = (e, name) =>{
    switch (name) {
      case 'small':
        setSmall(true);setBig(false);setMedium(false);
        setSumbox((productDetails && productDetails.price));

        break;
      case 'medium':
        setMedium(true);setSmall(false); setBig(false); 
        setSumbox((productDetails && productDetails.price) + 6000);

        break;
      case 'big':
        setBig(true);setSmall(false); setMedium(false);
        setSumbox((productDetails && productDetails.price) + 13000);
        break;
      default:
        // statements_def
        break;
    }
  }

  useEffect(() => {
       setSumbox(productDetails && productDetails.price);
  },[productDetails]);
  
  return (
  	<div className="productDetails shadowBox">
  		<div className="row wrapControl">
  			<div className="col-sm-6 col-6 imageDetails">
	  			<img className="img-in" src={productDetails.image} alt="sda"/>
          <div className="picture-titel">
            <h3>{productDetails.name}</h3>
          </div>
	  		</div>
	  		<div className="col-sm-6 col-6 controlDetails">
	  			<h3 className="nameDetails">{productDetails.name}</h3>
	  			<i className="fas fa-times iconClose" onClick={closeDetails}></i>
	  			<div className="menuorder-topping">
	  				<div className="topping-titel">Size:</div>
	  				<div className="row">
	  					<p className="topping-checkbox-list">
						    <input type="radio" id="test1" name="radio-group" onClick={(e)=>handleRadioBox(e,'small')} defaultChecked/>
						    <label htmlFor="test1">Nhỏ</label>
						  </p>
						  <p className="topping-checkbox-list">
						    <input type="radio" id="test2" name="radio-group" onClick={(e)=>handleRadioBox(e,'medium')} />
						    <label htmlFor="test2">Vừa (+6000đ)</label>
						  </p>
						  <p className="topping-checkbox-list">
						    <input type="radio" id="test3" name="radio-group" onClick={(e)=>handleRadioBox(e,'big')}  />
						    <label htmlFor="test3">Lớn (+13,000)</label>
						  </p>
	  				</div>
	  			</div>
	  			<div className="amountDetails">Giá: {sumBox && sumBox.toLocaleString('en')}đ</div>
	  			<div className="startDetails">
	  				{startIcon()}
	  			</div>
	  			<button className="oderDetails" onClick={plusOderDetails}>Đặt ngay</button>
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