import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
class Nav extends Component {
    state = {}
    actived=React.createRef();
    componentDidMount(){
        this.actived.current.click();
    }
    render() {
        return (<nav className="navbar navbar-dark navbar-expand-lg my-nav ">
            <section className=" container ">
                <div className=" navbar-brand">
                    <h4> Personal Resume</h4>
                </div>
                <button className=" navbar-toggler mr-3 " type="button" data-toggle="collapse" data-target="#myNav">
                    <i className="fa fa-align-justify"></i>
                </button>
                <div className=" collapse navbar-collapse justify-content-end " id="myNav">
                    <div className="  offset-lg-2 navbar-nav ">
                        <Route>  
                            <NavLink ref={this.actived} to="/Home" className="active nav-link nav-item nav-pills"
                            activeStyle={{ borderBottom: "3px solid white" }}>Home
                            </NavLink>
                            <NavLink to="/About" className=" nav-link nav-item nav-pills"
                            activeStyle={{ borderBottom: "3px solid white" }}>About
                            </NavLink>
                            <NavLink to="/Skils" className=" nav-link nav-item nav-pills"
                            activeStyle={{ borderBottom: "3px solid white" }}>Skills
                            </NavLink>
                            <NavLink to="/Contact" className=" nav-link nav-item nav-pills"
                            activeStyle={{ borderBottom: "3px solid white" }}>Contact
                            </NavLink>
                        </Route>
                    </div>
                </div>

            </section>
        </nav>);
    }
}

export default Nav;