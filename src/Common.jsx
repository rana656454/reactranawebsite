import React from "react";
import img from "../src/img/image1.jpg";
const Common = (props) => {

    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_Bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.headText}<br/><strong className="headName">Amdadul hoque rana</strong></h1>
                            <h3 className="my-3">
                                we are the team of talented developer making websites
                            </h3>
                            <div className="mt-3">
                                <a href="" className="btn-get-started">{props.btnText}</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={img} className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );

}

export default Common;