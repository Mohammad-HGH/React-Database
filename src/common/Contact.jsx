import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Contact extends Component {

    submitForm(event) {

        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
        } else {
            this.validator.showMessages();

            this.forceUpdate();
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
        this.validator = new SimpleReactValidator(
            {
                messages:
                    {
                        required: "This field is empty"
                    },
                element: message => <div style={{color: "#00b5d1"}}>{message}</div>
            }
        );
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <section className=" my-5">
                    <div className=" text-center py-5 Contact-bg ">
                        <h3 className=" font-weight-bold white my-3">Do you wanna contact me?</h3>
                        {
                            this.props.showContact ?
                                <button onClick={this.props.handelShowContact} className=" btn btn-info btn-sm">
                                    Contact later
                                </button>
                                :
                                <button onClick={this.props.handelShowContact} className=" btn btn-info btn-sm">
                                    Contact
                                </button>
                        }
                    </div>
                </section>
                {this.props.showContact && <section className="container-contant">
                    <div className=" container">
                        <div className=" row">
                            <div className=" col-md-7">


                                <div className=" w-100">
                                    <div className=" mt-5 my-2 rounded content-contact p-5 d-flex">
                                        <span className=" contact-icon p-3 h-50 mr-4 rounded-circle"><i
                                            className=" fa fa-phone"></i></span>
                                        <div className=" align-self-center">
                                            <h3 className=" white">Address</h3>
                                            <h5 className=" white">Boroujerd,Shariati St</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-100 mt-2">
                                    <div className="  my-2 rounded content-contact p-5 d-flex">
                                        <span className=" contact-icon p-3 h-50 mr-4 rounded-circle"><i
                                            className=" fa fa-phone"></i></span>
                                        <div className=" align-self-center">
                                            <h3 className=" white">Address</h3>
                                            <h5 className=" white">Boroujerd,Shariati St</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-100 mt-2">
                                    <div className=" mb-5 my-2 rounded content-contact p-5 d-flex">
                                        <span className=" contact-icon p-3 h-50 mr-4 rounded-circle"><i
                                            className=" fa fa-phone"></i></span>
                                        <div className=" align-self-center">
                                            <h3 className=" white">Address</h3>
                                            <h5 className=" white">Boroujerd,Shariati St</h5>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className=" col-12 col-md-5 align-self-center">
                                <div className="mt-4 form-group">
                                    <div>
                                        <form action="http://localhost:8080/react/action_page.php"
                                              method="get"
                                              className="form-group"

                                             >
                                            <input type="text" id="fname"
                                                   className="txt form-control mb-3 white bg-contact"
                                                   onChange={e => {
                                                       this.setState({
                                                           firstName: e.target.value
                                                       });
                                                   }}
                                                   name="firstname"
                                                   placeholder="Your name.."/>{this.validator.message('firstName', this.state.firstName, 'required|min:5')}
                                            <input type="text" id="lname" name="lastname"
                                                   className="txt form-control mb-3 white bg-contact"
                                                   onChange={e => {
                                                       this.setState({lastName: e.target.value})
                                                   }}
                                                   placeholder="Your last name.."/>{this.validator.message('lastName', this.state.lastName, 'required|min:5')}
                                            <input type="email" id="email" name="email"
                                                   className="txt form-control mb-3 white bg-contact"
                                                   onChange={e => {
                                                       this.setState({email: e.target.value})
                                                   }}
                                                   placeholder="Your email"/>

                                            <input type="text" id="subject" name="subject" onChange={e => {
                                                this.setState({text: e.target.value})
                                            }} className="txt  form-control text-box mb-3 white bg-contact"
                                                   placeholder="Your Message"/>
                                            {this.validator.message('text', this.state.text, 'required')}

                                            <button type="submit" value="Submit"
                                                    className=" btn btn-contact w-100"  name="subscribe">Submit
                                            </button>
                                            <div>
                                                {this.state.mailSent &&
                                                <div>Thank you for contcting us.</div>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
            </div>
        );
    }
}

export default Contact;