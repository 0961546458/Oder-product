import React from 'react';
import './pageRegistration.css';
import { useSelector } from 'react-redux';

function PageRegistration() {

	const subtotal = useSelector(state => state.subtotal);

  return (
    <div id="registration" className="container">
    	<div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Hãy điền thông tin của mình:</p>
                </div>

                <div className="form-content">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên đặng nhập *" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Số điện thoại *" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Mật khẩu *" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Xác nhận mật khẩu *" />
                    </div>
            		<div className="submitRegistration">
            			<button type="button" className="btnSubmit ">Đăng ký</button>
            		</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PageRegistration;
