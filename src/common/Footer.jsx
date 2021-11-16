import React, { Component } from 'react';
class Footer extends Component {
    state = {}
    render() {
        return (<footer>
            <section className=" py-3">
                <div className="container">
                    <div className="row ">
                        <div className=" col-md-4 col-sm-6 col-mg-4 ">
                            <div className="bg-footer-icon mt-2 text-center mx-auto">
                                <a href="#"><i className="fab fa-linkedin footer-icon mt-3"></i></a>
                            </div>
                        </div>
                        <div className=" col-md-4 col-sm-6 col-mg-4">
                            <div className="bg-footer-icon mx-auto mt-2 text-center">
                                <a href="https://www.instagram.com/fateme.p/"><i className="fab fa-instagram footer-icon mt-3"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-mg-4">
                            <div className="bg-footer-icon  mx-auto mt-2 text-center ">
                                <a href="#"><i className="fab fa-telegram footer-icon mt-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        );
    }
}

export default Footer;