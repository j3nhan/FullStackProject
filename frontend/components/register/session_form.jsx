import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // make edits
        this.props.processForm(user);
    }

    handleUpdate(type) {
        return e => this.setState({ 
            [type]: e.currentTarget.value
        });
    }

    handleDemo(){
        this.setState({ 
            email: "testing@testing.com",
            password: "testing"
        })
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{ error }</li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'signup') {
            return(
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-container">
                            <h3>Create account</h3>
                            <br />
                            <div className="field-container">
                                <label className="input-label">Your name
                                    <input className="name-label"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleUpdate("name")} 
                                    />
                                </label>
                            </div>

                            <br />
                            <div className="field-container">
                                <label className="input-label">Email
                                    <input className="email-label"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleUpdate("email")}
                                    />
                                </label>
                            </div>

                            <br />
                            <div className="field-container">
                                <label className="input-label">Password
                                    <input className="password-label" 
                                        type="password" 
                                        value={this.state.password}
                                        onChange={this.handleUpdate("password")}
                                        // placeholder="At least 6 characters"
                                    />
                                </label>
                            </div>
                            
                            <br />
                            <div className="errors">
                                {this.renderErrors()}
                            </div>

                            <br />
                            <div className="field-button">
                                <button className="submit-button">Create your ValYOU account</button>
                            </div>

                            <br />
                            <span className="private-conditons">By creating an account, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>

                            <br />
                            {/* add signin form link after question */}
                            <div>Already have an account? 
                                <Link to='/signin'>Sign-In</Link>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (this.props.formType === 'signin') {
            return(
                <div className="signin-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signin-container">
                            <h3>Sign-In</h3>
                            <br />
                            <div className="field-container">
                                <label className="input-label">Email
                                    <input className="name-label"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleUpdate("email")} 
                                    />
                                </label>
                            </div>                                    
                            
                            <br />
                            <div className="field-container">
                                <label className="input-label">Password
                                    <input className="password-label" 
                                        type="password" 
                                        value={this.state.password}
                                        onChange={this.handleUpdate("password")}
                                        // placeholder="At least 6 characters"
                                    />
                                </label>
                            </div>

                            <br />
                            <div className="errors">
                                {this.renderErrors()}
                            </div>

                            <br />
                            <div className="field-button">
                                <button className="submit-button">Sign-In</button>
                            </div>

                            <br />
                            <span className="private-conditons">By continuing, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>

                            <br />
                            <div className="new-button-container">
                                <br />
                                <span>New to ValYou?</span>
                                <br />
                                <Link to="/signup">Create your ValYOU account</Link>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    };
};

export default SessionForm;