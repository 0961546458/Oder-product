import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {onOderSuccess} from '../../redux/actions.js';
import MiniCardIteam from '../MiniCartIteam.js';
import ShowSuccess from './showSuccess.js';

function ViewCart(props) {

  var today = new Date()
  var date = today.getDate() + '-' + (today.getMonth()+1) + '-' +today.getFullYear() ;

  const idLogin = props.idLogin;

	const dispatch = useDispatch();

	const bought = useSelector(state => state.bought);

	const subtotal = useSelector(state => state.subtotal);

  const loginSuccess = useSelector(state => state.loginSuccess);
  
  const dataLogin = useSelector(state => state.dataLogin);

	let [address, setAddress] = useState('');
	let [name, setName] = useState('');
	let [phone, setPhone] = useState('');
	let [email, setEmail] = useState('');
	let [note, setNote] = useState('');

  let [showSuccess, setShowSuccess] = useState(false);

  var idLoginSuccess = props.idLogin;
  
	useEffect(()=>{
    if(loginSuccess){
      var index = dataLogin.findIndex(function(item, i){
        return item.id == idLoginSuccess;
      });
      if(index>=0){
        let nameLogin = dataLogin[index].name;
        setAddress(dataLogin[index].address);
        setName(dataLogin[index].name);
        setPhone(dataLogin[index].phone);
      }
    }
    if(loginSuccess === false){
      setAddress('');
      setName('');
      setPhone('');
    }
  },[loginSuccess])


	function handleSubmit(e){
		e.preventDefault();
		if(address !== "" && name !== "" && phone !== ""){
			if (loginSuccess) {
        let oderSuccess = {
          idLogin,
          address,
          name,
          phone,
          email,
          note,
          subtotal,
          date,
          cart : bought
        };
        dispatch(onOderSuccess(oderSuccess));
        console.log(oderSuccess);
        setShowSuccess(true);
      }else {
        alert("Bạn chưa đăng nhập")
      }
		}
	}

  return (
  	<div>
      <div className={showSuccess === false ? "row wrap-viewCart" : "hiddenDetails"}>
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
      <div className={showSuccess ? "showDetails" : "hiddenDetails"}>
        <ShowSuccess/>
      </div>
    </div>
  );
}

export default ViewCart;
