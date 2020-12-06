import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 1000
    };
    return (
      <div className="container simpleSlider">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
					  <h3><img src="./imge/slide1.jpg" alt="đád"/></h3>
					</div>
					<div key={2}>
					  <h3><img src="./imge/slide2.jpg" alt="đáds"/></h3>
					</div>
					<div key={3}>
					  <h3><img src="./imge/slide3.jpg" alt="đásda"/></h3>
					</div>
					<div key={4}>
					  <h3><img src="./imge/slide4.jpg" alt="đádấdd"/></h3>
					</div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <div className="button bt-previous" onClick={this.previous}>
            <i className="fas fa-caret-left"></i>
          </div>
          <div className="button bt-next" onClick={this.next}>
            <i className="fas fa-caret-right"></i>
          </div>
        </div>
      </div>
    );
  }
}
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SimpleSlider() {
// 	function next() {
//     this.slider.slickNext();
//   }
//   function previous() {
//     this.slider.slickPrev();
//   }

// 	const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
  
//   return (
// 		<div className="container">
//       <Slider ref={c => (this.slider = c)} {...settings}>
//         <div key={1}>
//           <h3><img src="./imge/slide1.jpg" alt="đá"/></h3>
//         </div>
//         <div key={2}>
//           <h3><img src="./imge/slide2.jpg" alt="đá"/></h3>
//         </div>
//         <div key={3}>
//           <h3><img src="./imge/slide3.jpg" alt="đá"/></h3>
//         </div>
//         <div key={4}>
//           <h3><img src="./imge/slide4.jpg" alt="đá"/></h3>
//         </div>
//       </Slider>
//       <div style={{ textAlign: "center" }}>
//           <button className="button" onClick={previous}>
//             Previous
//           </button>
//           <button className="button" onClick={next}>
//             Next
//           </button>
//         </div>
//     </div>
//   );
// }

// export default SimpleSlider;

