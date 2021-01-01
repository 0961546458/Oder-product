import React from 'react';
import './userInformation.css';
import { useSelector, useDispatch } from 'react-redux';

function UserInformation(props) {

	const userLogin = props.userLogin;
		
	const oderSuccess = useSelector(state => state.oderSuccess);

	var historyUse = oderSuccess.filter((task) => {
        return task.idLogin == userLogin.id;
    });

	// console.log(historyUse);

	var showList = historyUse.map((bought, index)=>{
		let cart = bought.cart;
		let show = cart.map((item,inde)=>{
			return(
				<tr key={inde}>
			      <th scope="row">{inde+1}</th>
			      <td>{item.name}</td>
			      <td>{item.price}</td>
			      <td>{item.amount}</td>
			      <td>{item.size}</td>
			    </tr>
			)
		})

      	return (
      		<div key={index}>
	        	<div className="dateOder">
		        	<div>Ngày đặt:</div> 
		        	<span>{bought.date}</span>
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
	<div id="userInformation" className="shadowBox">
        <div>
        	<div className="titelCart">
	            <h3>Thông tin của bạn: </h3>
	            <div className="hr-describeDetails"></div>
	        </div>
	        <div className="wrapIfms">
	            <h5>Họ và tên: </h5><span>{userLogin.useName}</span>
	        </div>
	        <div className="wrapIfms">
	            <h5>Số điện thoại: </h5><span>{userLogin.phone}</span>
	        </div>
	        <div className="wrapIfms">
	            <h5>Địa chỉ của bạn: </h5><span>{userLogin.address}</span>
	        </div>
	        <div className="wrapIfms">
	            <h5>Địa chỉ Email: </h5><span>{userLogin.email == '' ? "Chưa có Email" : userLogin.email}</span>
	        </div>
        </div>
        <div>
        	<div className="titelCart">
	            <h3>Lịch sử đặt hàng: </h3>
	            <div className="hr-describeDetails"></div>
	        </div>
	        
	        {showList.length === 0 ? "Bạn chưa có đơn hàng nào ?" : showList}

        </div>
	</div>
  );
}

export default UserInformation;
