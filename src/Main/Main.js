import React from "react";
import "./Main.css";
import bigsursmall from "./bigsursmall.jpeg";
// import citysmall from "./citylarge.png";
import oceanbeachsmall from "./oceanbeachsmall.jpeg";
import Learn from "./Learn";
import Img from "react-image";
import MediaQuery from "react-responsive";

class Main extends React.Component {
  render() {
    return (
        // <MediaQuery minDeviceWidth={1250}>
        //   {matches =>
        //     matches ? (
        //       <section className="container">
        //         <section className="img-banner">
        //           <span className="photo-style1">
        //             <Img src={bigsursmall} alt="big sur" />
        //           </span>
        //           <span className="photo-style2">
        //             {" "}
        //             <Img src={citysmall} alt="sf-city-skyline" />
        //           </span>
        //           <span className="photo-style3">
        //             <Img src={oceanbeachsmall} alt="ocean beach" />
        //           </span>
        //         </section>
        //         {/* <Learn /> */}
        //       </section>
        //     ) : (
              <section className="container">
                <section className="img-banner-mobile">
                  {/* <span className="photo-style1">
                    <Img src={bigsursmall} alt="big sur" />
                  </span> */}
                  <span className="photo-style2">
                    {" "}
                    <Img src={citysmall} alt="sf-city-skyline" />
                  </span>
                  {/* <span className="photo-style3">
                    <Img src={oceanbeachsmall} alt="ocean beach" />
                  </span> */}
                </section>
                {/* <Learn /> */}
              </section>
        //     )
        //   }
        // </MediaQuery>
    );
  }
}
export default Main;
