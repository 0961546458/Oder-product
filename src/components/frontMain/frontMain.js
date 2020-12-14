import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onDetails} from '../redux/actions.js';

function FrontMain() {
	const dispatch = useDispatch();
	
	const dishs = useSelector(state => state.dishs);

	var showList = dishs.map((dish, index)=>{

	function details(){
        dispatch(onDetails(dish));
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
        	<div className="col-sm-4 iteam-frontmain" key={index}>
				<div className="card card-item cardIteamWap">
				  	<div className="wap-Image">
				  		<img className="card-img-top" src={dish.image} alt={dish.name}/>
					  	<div className="btn-oder">
					  		<h3>{dish.name}</h3>
					  	</div>
				  	</div>
				  	<div className="card-body">
					    <h5 className="card-title">{dish.name}</h5>
					    <p className="card-text">{dish.describe}</p>
					    <a className="cart-btn btn btn-warning btn-Oder" onClick={details}>Chi tiết</a>
					    <div className="startIteamm">
				            {startIcon()}
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
