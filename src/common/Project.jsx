import React, { Component } from 'react';
class Project extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="bg-My-Project my-5">
                    <div className=" container py-5">

                        <div className="Title-Shape white text-center mb-5 ">
                            My Project
                            </div>
                        <div className=" row">
                            <div className=" col-md-4">
                                <div className=" card mt-3 border-0">
                                    <img src="img/Untitled.png" className=" card-img-top img-fluid" alt="my-recent-project" />
                                    <div className=" card-body pb-0">
                                        <p className=" text-center white runded card-title">My Home Library</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className=" card mt-3 border-0">
                                    <img src="img/Screenshot (83).png" className=" card-img-top img-fluid" alt="my-recent-project" />
                                    <div className=" card-body pb-0">
                                        <p className=" text-center white runded card-title">
                                            Car exhibition</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className=" card mt-3 border-0">
                                    <img src="img/Screenshot (84).png" className=" card-img-top img-fluid" alt="my-recent-project" />
                                    <div className=" card-body pb-0">
                                        <p className=" text-center white runded card-title">My Home Library</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>);
    }
}

export default Project;