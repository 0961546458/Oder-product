import React from 'react';
import './footer.css';

function Footer() {
  return (
  	<div id="footer">
  		<div className="icon-footer">
  			<div className="social-icons"><i className="fab fa-facebook-f"></i></div>
  			<div className="social-icons"><i className="fab fa-instagram"></i></div>
  			<div className="social-icons"><i className="fab fa-twitter"></i></div>
  			<div className="social-icons"><i className="fab fa-youtube youtube-W"></i></div>
  		</div>
  		<div className="copyright">
  			Copyright 2020 © Menu order by nguenvancuong.btvt@gmail.com
  		</div>
  	</div>
  );
}

export default Footer;
