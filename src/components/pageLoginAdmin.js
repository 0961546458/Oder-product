import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function PageLoginAdmin(props) {

  const dataAdminLogin = useSelector(state => state.dataAdminLogin);

  const [nameAdmin, setUseNameAdmin] = useState('');
  const [passwordAdmin, setPasswordAdmin] = useState('');

  return (
  	<div id="pageLogin" className="container">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <span className="close" onClick={props.closeLoginAdmin}>&times;</span>
          <div className="fadeIn first">
          </div>
          <form onSubmit={(e)=>props.submitLoginAdmin(nameAdmin,passwordAdmin,e,dataAdminLogin)}>
            <h3>Đăng nhập admin</h3>
            <input 
              type="text" 
              id="login" 
              value={nameAdmin} 
              onChange={(e)=>{setUseNameAdmin(e.target.value)}} 
              className="fadeIn second" 
              name="login" 
              placeholder="Tên đăng nhập"
            />
            <input 
              type="password" 
              id="password" 
              value={passwordAdmin} 
              onChange={(e)=>{setPasswordAdmin(e.target.value)}} 
              className="fadeIn third" 
              name="login" 
              placeholder="Mật khẩu"
            />
            <input type="submit" className="fadeIn fourth" value="Đăng nhập"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageLoginAdmin;
