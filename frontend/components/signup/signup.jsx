import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupInit } from '../../actions/session_actions';

const Signup = () => {
    const [name, setName] = useState;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector((state) => state.data);
    let dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user, dispatch]);

    const signingUp = (e) => {
        e.preventDefault();
        dispatch(signupInit(name, email, password));
        setName("");
        setEmail("");
        setPassword("");
    };
    
    return (
        <di className='register'>
            <Link to='/'>
                <img className="login-logo" 
                    src="images/valyou-logo.png"
                    alt="valyou-logo" 
                />
            </Link>

            <div className="register-container">
                <h1>Create account</h1>
                <form>
                    <h5>Your name</h5>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value='{password}'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button className="continue" type="submit" onClick={signingUp}>Create your ValYOU account</button>
                    <span className="private-conditons">By creating an account, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>

                    <div className="detail">
                        <p>Already have an account?</p>
                        <Link to="/signin" className="signin-link">
                            <p>Sign-In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Signup;
