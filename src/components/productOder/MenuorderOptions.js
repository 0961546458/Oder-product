import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onPlusItem, onDetails} from '../redux/actions.js';

function MenuorderOptions() {
	const dispatch = useDispatch();
	
	const dishs = useSelector(state => state.dishs);

  var showList = dishs.map((dish, index)=>{

  	function plusItem(){
  		dispatch(onPlusItem(dish));
  	}

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
      	<div className="menuorder-list-prod-box" key={index}>
    			<img className="menuorder-prod-img" src={dish.image} alt="americano"/>
      		<div className="menuorder-prod-infor">
      			<div className="prod-title">{dish.name}</div>
      			<div className="prod-desc">{dish.describe}</div>
      			<div className="prod-price">{dish.price}đ</div>
            <div className="starDish">
              {startIcon()}
            </div>
            <div className="btn-OderIteam">
              <button type="button" className="btn btn-warning btn-Oder btn-adms" onClick={details}>Chi tiết</button>
              <button type="button" className="btn btn-danger icomPlus btn-Oder" onClick={plusItem}>Thêm</button>
            </div>
      		</div>
    		</div>
      )
  })

  return (
    <div>
    	<div className="menuorder-options">
	      	<div className="menuorder-list-prod-title">CÀ PHÊ</div>

      		{showList}
      		
	      </div>
    </div>
  );
}

export default MenuorderOptions;
