import React from 'react';
import { useDispatch } from 'react-redux';
import {onResetShowDetails, onActiveHome} from '../../redux/actions.js';
import {
  Link
} from "react-router-dom";

function ShowSuccess() {
	const dispatch = useDispatch();
	function handleHome(){
		dispatch(onResetShowDetails());
		dispatch(onActiveHome());
	}
	
	
  return (
  	<div className="shadowBox showSuccess">
        <div className="titelCart">
          	<h3>Bạn đã đặt hàng thàng công</h3>
          	<div className="hr-describeDetails"></div>
          	<p>Xinh cảm ơn !</p>
        </div>
        {/*<div className="wrapInputCart">
          	<h5>Họ và tên</h5>
          	<p>adsdasda</p>
        </div>
        <div className="wrapInputCart">
          	<h5>Số điện thoại</h5>
          	<p>ádasd</p>
        </div>
        <div className="wrapInputCart">
          	<h5>Địa chỉ của bạn</h5>
          	<p>ákndasdlas</p>
        </div>
        <div className="wrapInputCart">
          	<h5>Địa chỉ Email (tùy chọn)</h5>
          	<p>đasadas</p>
        </div>
        <div className="wrapInputCart">
          	<h5>Ghi chú đơn hàng (tùy chọn)</h5>
          	<p>đasadas</p>
        </div>*/}
        <div className="oderNow">
            <Link to="/">
            	<button className="btn btn-light menuorder-btn oderNow-btn" onClick={handleHome}>Trở về trang chủ</button>
            </Link>
        </div>
  	</div>
  );
}

export default ShowSuccess;
