import React from 'react';
import { useSelector } from 'react-redux';
import {onPlusMini, onMinusMini, onDeleteMini} from '../redux/actions.js';
import { useDispatch } from 'react-redux';

function MiniCardIteam() {

  const dispatch = useDispatch();

  const bought = useSelector(state => state.bought);
  var showList = bought.map((bought, index)=>{

    function PlusMini(){
      dispatch(onPlusMini(bought,index));
    }
    function minusMini(){
      dispatch(onMinusMini(bought,index));
    }
    function deleteMini(){
      dispatch(onDeleteMini(bought,index));
    }
      return (
        <div className="cart-iteam" key={index}>
          <div className="amount-dish"><span>{index+1}</span></div>
          <div className="product-name">
            <span>{bought.name}</span>
            <div className="topping_cart_item">Nhỏ</div>
          </div>
          <div className="menuorder_price_action">
            <div className="Price-amount">{bought.price}đ<span> x {bought.amount}</span></div>
            <div className="menuorder_action">
            <button type="button" className="btn btn-light cart-minus" onClick={minusMini}>-</button>
            <div className="btn ">{bought.amount}</div>
            <button type="button" className="btn btn-light cart-plus" onClick={PlusMini}>+</button>
            <button type="button" className="btn btn-light cart-qty" onClick={deleteMini}><i className="far fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      )
  })

  return (
    <div className="menuorder_minicart">
  			{showList}
  	</div>
  );
}

export default MiniCardIteam;
