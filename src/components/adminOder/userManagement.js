import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onDeleteUser } from '../redux/actions.js';

function UserManagement() {

	const dispatch = useDispatch();
	
	const dataLogin = useSelector(state => state.dataLogin);

	var showList = dataLogin.map((bought, index)=>{

		function deleteUser(){
			dispatch(onDeleteUser(bought.id, index));
		}

		return(
			<tr key={index}>
		      <th scope="row">{index+1}</th>
		      <td>{bought.useName}</td>
		      <td>{bought.password}</td>
		      <td>{bought.name}</td>
		      <td>{bought.address}</td>
		      <td>{bought.email}</td>
		      <td>
		      	<button type="button" className="btn btn-danger btn-del-use" onClick={deleteUser}>
		      		Xóa
		      	</button>
		      </td>
		    </tr>
		)
	})

  return (
  	<div className="userManagement">
  		<div className="titelCart">
            <h3>Danh sách tài khoản khách hàng</h3>
        </div>
        <table className="table">
		  <thead>
		    <tr>
		      <th scope="col">STT</th>
		      <th scope="col">Tên đăng nhập</th>
		      <th scope="col">Tên</th>
		      <th scope="col">Số điện thoại</th>
		      <th scope="col">Địa chỉ</th>
		      <th scope="col">Email</th>
		      <th scope="col"></th>
		    </tr>
		  </thead>
		  <tbody>
		    {showList}
		  </tbody>
		</table>
  	</div>
  );
}

export default UserManagement;
