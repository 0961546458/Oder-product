import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onOderSuccess} from '../../redux/actions.js';
import MiniCardIteam from '../MiniCartIteam.js';

function ViewCart() {

	const dispatch = useDispatch();

	const bought = useSelector(state => state.bought);

	const subtotal = useSelector(state => state.subtotal);

	let [address, setAddress] = useState('');
	let [name, setName] = useState('');
	let [phone, setPhone] = useState('');
	let [email, setEmail] = useState('');
	let [note, setNote] = useState('');
	
	function handleSubmit(e){
		e.preventDefault();

		if(address !== "" && name !== "" && phone !== ""){
			let oderSuccess = {
				address,
				name,
				phone,
				email,
				note,
				subtotal,
				cart : bought
			};
			dispatch(onOderSuccess(oderSuccess));
			console.log(oderSuccess)
		}
	}

  return (
  	<div className="row">
        <form className="viewCart col-sm-7 shadowBox" onSubmit={handleSubmit}>
          <div className="titelCart">
            <h3>Thanh toán và giao hàng</h3>
            <div className="hr-describeDetails"></div>
          </div>
          <div className="wrapInputCart">
            <h5>Địa chỉ của bạn*</h5><span>{address==='' ? "Bạn phải nhập địa chỉ *" : "" }</span>
            <input type="text" value={address} onChange={(e)=>{
              setAddress(e.target.value); 
            }} placeholder="Địa chỉ"/>
          </div>
          <div className="wrapInputCart">
            <h5>Họ và tên</h5><span>{name==='' ? "Bạn phải nhập họ và tên *" : "" }</span>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Nhập họ và tên"/>
          </div>
          <div className="wrapInputCart">
            <h5>Số điện thoại</h5><span>{phone==='' ? "Bạn phải nhập số điện thoại *" : "" }</span>
            <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Nhập số điện thoại"/>
          </div>
          <div className="wrapInputCart">
            <h5>Địa chỉ Email (tùy chọn)</h5>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Nhập Email"/>
          </div>
          <div className="wrapInputCart">
            <h5>Ghi chú đơn hàng (tùy chọn)</h5>
            <textarea value={note} onChange={(e)=>{setNote(e.target.value)}} placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"/>
          </div>
          <div className="oderNow">
              <button type="submit" className="btn btn-light menuorder-btn oderNow-btn">ĐẶT HÀNG</button>
            </div>
        </form>

        <div className="col-sm-5">
          
                <MiniCardIteam/>

        </div>
    </div>  
  );
}

export default ViewCart;
