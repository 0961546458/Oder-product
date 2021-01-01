import React, { useEffect } from 'react';
import OrderManagement from './orderManagement.js';
import UserManagement from './userManagement.js';
import DeliveryHistory from './deliveryHistory.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { onfetchDelivered } from '../redux/actions.js';

function AdminOder() {

	const dispatch = useDispatch();

	useEffect(()=>{
        dispatch(onfetchDelivered());
    })

  return (
  	<Router>
  		<div className="sidenav">
  			<Link to="/ordermanagement">Đơn hàng</Link>
  			<Link to="/deliveryhistory">Lịch sử đơn hàng</Link>
  			<Link to="/usermanagement">Người dùng</Link>
		</div>
		<Switch>
			<div className="main-admin">
				<p>Xin Chào Admin</p>
				<Route path="/ordermanagement">
					<OrderManagement/>
				</Route>
				<Route path="/deliveryhistory">
					<DeliveryHistory/>
				</Route>
				<Route path="/usermanagement">
					<UserManagement/>
				</Route>
			</div>
		</Switch>
  	</Router>
  );
}

export default AdminOder;
