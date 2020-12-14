import React from 'react';
import { useSelector } from 'react-redux';
import {onPlusMini, onMinusMini, onDeleteMini, onShowViewCart} from '../redux/actions.js';
import { useDispatch } from 'react-redux';

function MiniCardIteam() {

  const dispatch = useDispatch();

  const bought = useSelector(state => state.bought);
  const showDetails = useSelector(state => state.showDetails);
  const subtotal = useSelector(state => state.subtotal);

    function showViewCart(){
      dispatch(onShowViewCart());
    }
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
            <div className="topping_cart_item">{bought.size}</div>
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
    <div className={showDetails == 2 ? "" : "shadowBox"}>
      <div className="minicart_title">
        GIỎ HÀNG CỦA TÔI
      </div>
      <div className="menuorder_minicart">
        
            {showList}
         
      </div>

      <div className="cart-subtotal">
        <div>Tổng tiền thanh toán:</div>
        <div className="woocommerce-Price-amount">{subtotal}đ</div>
      </div>
      <div className="minicart_footer">
        <button type="button" className={showDetails == 2 ? "btn btn-light menuorder-btn hiddenDetails" : "btn btn-light menuorder-btn showDetails"} onClick={showViewCart}>XEM GIỎ HÀNG</button>
      </div>
    </div>
  );
}

export default MiniCardIteam;
