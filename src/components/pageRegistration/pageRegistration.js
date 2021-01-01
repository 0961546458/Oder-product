import React, { useState } from 'react';
import './pageRegistration.css';
import { useSelector, useDispatch  } from 'react-redux';
import { onCloseRegistration, onSendRegistration } from '../redux/actions.js';

function PageRegistration() {

    const dispatch = useDispatch();

	// const subtotal = useSelector(state => state.subtotal);

    const modelRegistration = useSelector(state => state.modelRegistration);

    const dataLogin = useSelector(state => state.dataLogin);

    let [useName, setUseName] = useState('');
    let [password, setPassword] = useState('');
    let [passRepeat, setPassRepeat] = useState('');
    let [phone, setPhone] = useState('');
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [email, setEmail] = useState('');

    function closeRegistration(){
        dispatch(onCloseRegistration());
    }

    var index = dataLogin.findIndex(function(item, i){
        return item.useName === useName
    });
    
    function handleSubmitRegistration(e){
        e.preventDefault();
        if (useName !== '' && password !== '' && passRepeat !== '' && phone !== '' && name !== '' && address !== '') {
            if (index < 0) {
                if (password === passRepeat) {
                    let account = {
                        useName,password,phone,name,address,email
                    }
                    dispatch(onSendRegistration(account));
                    dispatch(onCloseRegistration());
                    setUseName('');
                    setPassword('');
                    setPassRepeat('');
                    setPhone('');
                    setName('');
                    setAddress('');
                    setEmail('');
                }else {
                    alert("Mật khẩu phải trùng nhau!")
                }
            }else {
                alert("Tên đăng nhập đã tồn tại")
            }
        }else {
            alert("Bạn chưa điền đầy đủ thông tinh")
        }
    }

  return (

    <div>
        <div id="myModalregistration" className={modelRegistration ? "showDetails modal" : "hiddenDetails"}>
            <div id="registration">
                <div className="container register-form">
                    <form className="form"  onSubmit={handleSubmitRegistration}>
                        <span className="close" onClick={closeRegistration}>&times;</span>
                        <div className="note">
                            <p>Hãy điền thông tin của mình:</p>
                        </div>

                        <div className="form-content">
                            <div className="form-group">
                                <input type="text" value={useName} onChange={(e)=>{setUseName(e.target.value)}} className="form-control" placeholder="Tên đặng nhập *" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Mật khẩu *" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={passRepeat} onChange={(e)=>{setPassRepeat(e.target.value)}} className="form-control" placeholder="Xác nhận mật khẩu *" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Tên đầy đủ của bạn*" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} className="form-control" placeholder="Số điện thoại*" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control" placeholder="Địa chỉ của bạn*" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email của bạn" />
                            </div>
                            <div className="submitRegistration">
                                <button type="submit" className="btnSubmit">Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    
  );
}

export default PageRegistration;
