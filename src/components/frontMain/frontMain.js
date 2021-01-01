import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onDetails, onShowOptions, onPlusItem} from '../redux/actions.js';

function FrontMain() {
	const dispatch = useDispatch();
	
	const dishs = useSelector(state => state.dishs);

	var showList = dishs.map((dish, index)=>{

	function details(){
        dispatch(onDetails(dish));
    }
    
    function showOptions(){
        dispatch(onShowOptions());
        dispatch(onPlusItem(dish));
    }

	function startIcon(){
	    if(dish.star===1){
	      return (
	        <div>
	          <i className="fas fa-star"></i>
	          <i className="far fa-star"></i>
	          <i className="far fa-star"></i>
	          <i className="far fa-star"></i>
	          <i className="far fa-star"></i>
	        </div>
	      )
	    }if(dish.star===2){
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
	    if(dish.star===3){
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
	    if(dish.star===4){
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
	    if(dish.star===5){
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

    return (
    	<div className="col-6 col-sm-6 col-md-4 iteam-frontmain" key={index}>
			<div className="card card-item cardIteamWap">
			  	<div className="wap-Image">
			  		<img className="card-img-top" src={dish.image} alt={dish.name}/>
				  	<div className="btn-oder">
				  		<h3>{dish.name}</h3>
				  	</div>
				  	<div className={dish.selling ? "selling showDetails" : "hiddenDetails"}>
				  		<img src="./imge/bestseller.png" alt="bán chạy"/>
				  		<span>BÁN CHẠY</span>
				  	</div>
			  	</div>
			  	<div className="card-body">
				    <h5 className="card-title">{dish.name}</h5>
				    <p className="card-text">{dish.describe}</p>
				    <div className="amountDetails">Giá: {dish.price.toLocaleString('en')}đ</div>
				    <div className="startIteamm">
			            {startIcon()}
		            </div>
				    <div className="btn-OderIteam">
			            <button type="button" className="btn btn-warning cart-btn btn-Oder btn-adms" onClick={details}>Chi tiết</button>
			            <button type="button" className="btn btn-danger icomPlus btn-Oder" onClick={showOptions}>Đặt hàng</button>
		            </div>
				    
			  	</div>
			</div>
  		</div>
    )
    })
  return (
  	<div id="frontMain" >
  		<div className="menu-title">MENU</div>
  		<div className="hr-menu-title"></div>
  		<div className="row">
  			
  			{showList}
	  		
  		</div>
  	</div>
  	);
}

export default FrontMain;
