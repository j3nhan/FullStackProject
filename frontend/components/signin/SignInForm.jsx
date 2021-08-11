import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (this.props.formType === 'signin') {
            return (
                <div className="login">
                    <Link to="/">
                    <img className="login-logo" 
                        src="images/user_logo.png"
                        alt="valyou-logo" 
                    />
                    </Link>
                <div className="login-container">
                    <h1 className="signin-label">Sign-In</h1>
                    <form>
                    <h5 className="label-name">E-Mail</h5>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleUpdate("email")}
                    />
                    <h5 className="label-name">Password</h5>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleUpdate("password")}
                        placeholder="At least 6 characters"
                    />
                        {/* find a link to somewhere */}
                        {/* errors are not working */}
                    <button type="submit" className="login-signIn" value={this.props.formType}>
                        Sign-In
                    </button>

                    <div>
                        {this.renderErrors()}
                    </div>
                    </form>

                    <span className="policy">By continuing, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>

                </div>
                <p className="new-here">New to ValYou?</p>
                    <Link to="/signup">
                        <button className="login-register">Create your ValYOU account</button>
                    </Link>
                </div>
            );   
        }; 
    }
};

export default SignInForm;
