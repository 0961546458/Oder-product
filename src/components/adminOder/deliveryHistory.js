import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onDeleteDelivered, onDeleteAll } from '../redux/actions.js';

function DeliveryHistory() {
	const dispatch = useDispatch();

	const delivered = useSelector(state => state.delivered);

	function deleteAll(){
		dispatch(onDeleteAll());
	}

    var showList = delivered.map((bought, index)=>{

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

		function deleteDelivered(){
			dispatch(onDeleteDelivered(bought.id, index));
		}

      	return (
      		<div key={index}>
      			<div className="titelCart">
		            <div className="dateOder">
			        	<div>Ngày đặt: </div> 
			        	<span>{bought.date}</span>
			        </div>
			        <div className="dropdown">
			          <button className="btn btn-danger btn-delete" type="button" onClick={deleteDelivered}>
					    Xóa
					  </button>
					  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Thông tin khách hàng
					  </button>
					  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
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
      		</div>
      	)
  	})

  return (
  	<div className="orderManagement history">
  		<button className="btn btn-danger btn-delete-all" type="button" onClick={deleteAll}>
		    Xóa tất cả
		</button>
        {showList}
  	</div>
  );
}

export default DeliveryHistory;
