import React, { Component } from 'react';
class Skils extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className=" mt-5 Specializied-Skills">
                    <div className=" container py-5">

                        <div className="my-5 Title-Shape white text-center ">
                            What I Do?
                        </div>
                        <div className=" row  my-5 justify-content-center">
                            <div className=" col-sm-5 patition-of-Specializied-Skills py-4 mr-sm-2  mt-2 ">

                                <i
                                    className="fas fa-layer-group  Specializied-hover white  Specializied-Skills-icon icon1-color"></i>
                                <h3 className=" Specializied-hover font-weight-bold white mt-3 change-color">SPA</h3>
                                <p className="Specializied-hover change-color white">
                                    Single Page Application<br />
                                </p>

                            </div>
                            <div className=" col-sm-5 patition-of-Specializied-Skills py-4  mt-2">
                                <i className="	fa fa-object-ungroup white  Specializied-Skills-icon icon2-color"></i>
                                <h3 className=" font-weight-bold white change-color mt-3">WPF</h3>
                                <p className="change-color white">
                                    Create Application for windows
                                </p>
                            </div>
                            <div className=" col-sm-5 patition-of-Specializied-Skills  py-4  mt-2 ">
                                <i className="	fas fa-user-graduate Specializied-Skills-icon white icon3-color"></i>
                                <h3 className=" font-weight-bold white change-color mt-3">Student</h3>
                                <p className="change-color white">I study Software engineer in abru univercity,I started programming
                                2 years ago
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="progress-container mb-5">
                    <div className="pb-5 container">

                        <div className="Title-Shape white text-center">
                            Technical Skills
                        </div>
                        <div className="row mt-5">
                            <div className=" col-sm-6">
                                <div className="my-3">
                                    <span className="white my-0 py-2">Html5</span> <span className=" white float-right">75%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-75  ">
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <span className="white my-0 py-2">CSS3</span> <span className=" white float-right">75%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-75 ">
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <span className="white my-0 py-2">C#</span> <span className=" white float-right">25%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-25 ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-sm-6">
                                <div className="my-3">
                                    <span className="white my-0 py-2">Sql Server</span> <span className=" white float-right">50%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-50">
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <span className="white my-0 py-2">WPF</span> <span className=" white float-right">50%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-50">
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <span className="white my-0 py-2">Bootstrap4</span> <span className=" white float-right">75%</span>
                                    <div className=" progress height-progress">
                                        <div className=" progress-bar bg-progress w-75 ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        );
    }
}

export default Skils;