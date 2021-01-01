import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onDelivered } from '../redux/actions.js';

function OrderManagement() {

	const dispatch = useDispatch();
	
	const oderSuccess = useSelector(state => state.oderSuccess);

	
    var showList = oderSuccess.map((bought, index)=>{

    	function delivered(){
    		var indexIn = oderSuccess.findIndex(function(item, i){
		      	return item.id == bought.id;
		    });
			dispatch(onDelivered(oderSuccess[indexIn], bought.id, index));
		}

		let cart = bought.cart;
		let show = cart.map((item,inde)=>{
			return(
				<tr key={inde}>
			      <th scope="row">{inde+1}</th>
			      <td>{item.name}</td>
			      <td>{item.price.toLocaleString('en')} đ</td>
			      <td>{item.amount}</td>
			      <td>{item.size}</td>
			    </tr>
			)
		})

      	return (
      		<div key={index}>
      			<div>
		        	<div className="hr-describeDetails"></div>
		        	<div className="titelCart">
			            <h3>Thông tin đơn hàng thứ  {index+1}</h3>
			            <div className="dateOder">
				        	<div>Ngày đặt:</div> 
				        	<span>{bought.date}</span>
				        </div>
			        </div>
			        
			        <div className="wrapIfms">
			            <h5>Họ và tên: </h5><span>{bought.name}</span>
			        </div>
			        <div className="wrapIfms">
			            <h5>Số điện thoại: </h5><span>{bought.phone}</span>
			        </div>
			        <div className="wrapIfms">
			            <h5>Địa chỉ: </h5><span>{bought.address}</span>
			        </div>
			        <div className="wrapIfms">
			            <h5>Tổng số tiền thanh toán: </h5><span>{bought.subtotal.toLocaleString('en')} đ</span>
			        </div>
		        </div>
		        <table className="table">
				  <thead>
				    <tr>
				      <th scope="col">STT</th>
				      <th scope="col">Tên sản phẩm</th>
				      <th scope="col">Giá</th>
				      <th scope="col">Số lượng</th>
				      <th scope="col">Size</th>
				    </tr>
				  </thead>
				  <tbody>
				    {show}
				  </tbody>
				</table>
				<button type="button" className="btn btn-danger registration" onClick={delivered}>Đã giao hàng</button>
      		</div>
      	)
  	})

  return (
  	<div className="orderManagement">
        {showList}
  	</div>
  );
}

export default OrderManagement;
