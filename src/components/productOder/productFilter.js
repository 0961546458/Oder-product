import React from 'react';

function ProductFilter() {
  return (
  	<div>
  		<div className="choosePrice">
			<h5>Chọn mức giá:</h5>
	      	<form>
			  <input type="checkbox" id="vehicle1" />
			  <label>&nbsp; Dưới 15000đ </label><br/>
			  <input type="checkbox" id="vehicle2" />
			  <label>&nbsp; 15000đ - 30000đ</label><br/>
			  <input type="checkbox" id="vehicle3" />
			  <label>&nbsp; Trên 30000đ</label><br/>
			</form>
		</div>
		<div className="chooseStart">
			<h5>Chọn đánh giá:</h5>
	      	<form>
			  <input type="checkbox" id="vehicle1" />
			  <label>&nbsp; 1 Sao </label><br/>
			  <input type="checkbox" id="vehicle2" />
			  <label>&nbsp; 2 Sao</label><br/>
			  <input type="checkbox" id="vehicle3" />
			  <label>&nbsp; 3 Sao</label><br/>
			  <input type="checkbox" id="vehicle2" />
			  <label>&nbsp; 4 Sao</label><br/>
			  <input type="checkbox" id="vehicle3" />
			  <label>&nbsp; 5 Sao</label><br/>
			</form>
		</div>
  	</div>
  );
}

export default ProductFilter;
