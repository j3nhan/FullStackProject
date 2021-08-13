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

    componentWillUnmount() {
        this.props.receiveSesErrors([])
    }

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
        const user = {email: "winning@winning.com", password: "winning"};
        this.props.signinUser(user)
        .then(() => this.props.history.go(-1))
        // .then(() => this.props.history.push('/Homepage'))
    };

    componentDidMount() {
        this.props.removeSesErrors();
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

                        <form onSubmit={this.handleSubmit}>
                            <h5 className="label-name">Email</h5>
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
                            <button type="submit" className="login-signIn" value={this.props.formType}>
                                Sign-In
                            </button>
                            
                            <p className='try-demo'>- Or -</p>
                            <button className='demo-button' onClick={this.handleDemo}>Demo Sign-In</button>

                            <div className='error-message'>
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
