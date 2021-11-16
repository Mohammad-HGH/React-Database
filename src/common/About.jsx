import React, { Component } from 'react';
class About extends Component {
    state = {}
    render() {
        return (<section className=" my-5 ">
            <div className=" container">
                <div className=" row ">
                    <div className=" col-md-4 offset-sm-2 text-center align-self-center skils-img-container">
                        <img src="img/skill-pic.png" className="mx-auto img-fluid  skills-img" alt="" />
                    </div>
                    <div className=" col-md-5 ">
                        <div className=" text-center text-sm-left mt-4 mt-sm-0">
                            <h3 className=" font-weight-bold">About Me</h3>
                            <p className=" font-weight-bold">Hello,I'm Fateme :)<br />
                I'm a Web-Developer...I studi software engineer in abru univercity.I'm pretty good at:</p>
                            <div className=" d-flex justify-content-center justify-content-sm-start flex-row flex-wrap">
                                <p className=" mr-2 white py-1 px-3 my-skills">CSS3</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">HTML5</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">Jva Script</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">C#</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">BOOTSTRAP4</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">REACT JS</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">Css Grid</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">WIN FORM</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">WPF</p>
                                <p className=" mr-2 white py-1 px-3 my-skills">SQL SERVER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
    }
}

export default About;