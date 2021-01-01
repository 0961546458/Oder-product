import React, { useState } from 'react';
import './pageLogin.css';
import { useSelector, useDispatch } from 'react-redux';
import { onCloseModal, onLoginSuccess } from '../redux/actions.js';

function PageLogin(props) {

	const dispatch = useDispatch();

	const showModalLogin = useSelector(state => state.showModalLogin);

	const dataLogin = useSelector(state => state.dataLogin);

	function closeModal(){
		dispatch(onCloseModal());
	}

	let [useName, setUseName] = useState('');
	let [usePassword, setPassword] = useState('');

	var index = dataLogin.findIndex(function(item, i){
      	return item.useName.toUpperCase() === useName.toUpperCase() && item.password.toUpperCase() === usePassword.toUpperCase();
    });

	function handleSubmitLogin(e){
		e.preventDefault();
		let userLogin = dataLogin[index];

		if ( index >= 0 ) {
			dispatch(onLoginSuccess());
			dispatch(onCloseModal());
			props.onUpdateNameLogin(userLogin);
			setUseName('');
			setPassword('');
		}else {
			alert("Tên đăng nhập hoặc mật khâu không đúng...");
		}
	}

  return (
    <div>
		<div id="myModal" className={showModalLogin ? "showDetails modal" : "hiddenDetails"}>
		    <div id="pageLogin" className="container">
		    	<div className="wrapper fadeInDown">
					<div id="formContent">
					  	<span className="close" onClick={closeModal}>&times;</span>
					    <div className="fadeIn first">
							<img src="./imge/coffee-logo.png" id="icon" alt="User Icon" />
					    </div>
					    <form onSubmit={handleSubmitLogin}>
					 		<input type="text" id="login" value={useName}  onChange={(e)=>{setUseName(e.target.value)}} className="fadeIn second" name="login" placeholder="Tên đăng nhập"/>
							<input type="password" id="password" value={usePassword} onChange={(e)=>{setPassword(e.target.value)}} className="fadeIn third" name="login" placeholder="Mật khẩu"/>
					      	<input type="submit" className="fadeIn fourth" value="Đăng nhập"/>
					    </form>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default PageLogin;
