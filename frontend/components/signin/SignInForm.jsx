import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
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
        this.props.signinUser(user)
        .then(() => this.props.history.push('/'))
    }

    handleUpdate(type) {
        return e => this.setState({ 
            [type]: e.currentTarget.value
        });
    }

    handleDemo(e){
        e.preventDefault();
        const user = {email: "testing@testing", password: "testing"};
        this.props.signinUser(user)
        .then(() => this.props.history.push('/Homepage')) // history push edit?
    };

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
        return(
            <div className="login">
                <Link to="/">
                    <img className="login-logo" 
                        src="images/valyou-logo.png"
                        alt="valyou-logo" 
                    />
                </Link>
                <div className="login-container">
                    <h1>Sign-In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <h5>Email</h5>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleUpdate("email")} 
                        />
                        
                        <h5>Password</h5>
                        <input type="password" 
                            value={this.state.password}
                            onChange={this.handleUpdate("password")}
                            placeholder="At least 6 characters"
                        />

                        <div>
                            {this.renderErrors()}
                        </div>

                        <button className="login-signIn">Sign-In</button>

                    </form>

                    {/* <div className="demo-container">
                        <span className="demo-signin"> Feel free to try out
                        {<span onClick={this.handleDemo}>Demo Sign-In</span>}!
                        </span>
                    </div> */}
                </div>
                
                <span>By continuing, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>
                <span>New to ValYou?</span>
                <Link to="/signup">
                    <button className="login-register">Create your ValYOU account</button>
                </Link>
            </div>
        );
    }
};

export default SignInForm;
