import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import About from '../common/About';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Project from '../common/Project';
import Skils from '../common/Skils';
const MyResome = (props) => {

    const [getShowContact, setShowContact] = useState(false);
    const handelShowContact = () => {
        setShowContact(!getShowContact);
    }
    return (
        <Fragment>
        <Header />
        <Switch>
            <Route path="/About" component={About} />
            <Route path="/Skils" component={Skils} />
            <Route path="/Contact" render={() => (
                <Contact
                    handelShowContact={handelShowContact}
                    showContact={getShowContact} />)} />
        </Switch>
        <Project />
        <Footer />
    </Fragment>);
}

export default MyResome;