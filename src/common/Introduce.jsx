import React, { Component } from 'react';
class Introduce extends Component {
    state = {}
    render() {
        return (
            <section className="introduce">
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-6">
                            <div className="text-center text-sm-right">
                                <img src="img/profile.png" className=" mb-5 h-50 w-50 mt-4 mt-sm-0 img-fluid rounded-circle introduce-img "
                                    alt="profie" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className=" text-left bordet-left mt-2">
                                <div className="pl-5">
                                    <span className="white badge  p-2">
                                        Hello I'm
                                </span>
                                    <h1 className=" mt-2 white">
                                        Fateme<br />
                                    pouryousefi
                                </h1>
                                    <h3 className="white">Web Developer | Programmer</h3>
                                    <p className="mt-4 light-white">
                                        <i className="white mr-2 	fas fa-envelope"></i>Pouryousefi77@gmail.com
                                </p>
                                    <p className=" light-white">
                                        <i className="white mr-2 fa fa-phone"></i> 09900191839
                                </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>);
    }
}

export default Introduce;