import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signinInit } from "../../actions/session_actions";


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector((state) => state.data);
    let dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user, dispatch]);

    const signingIn = (e) => {
        e.preventDefault();
        dispatch(signinInit(email, password));
        setEmail("");
        setPassword("");
    };

    const signingInDemo = (e) => {
        e.preventDefault();
        dispatch(signinInit(email, password));
        setEmail("testing@mail.com");
        setPassword("testing");
    };

    return(
        <div className="login">
            <Link>
                <img className="login-logo" 
                    src="images/valyou-logo.png"
                    alt="valyou-logo" 
                />
            </Link>

            <div>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" 
                        value={ email } 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="text"
                        value={ password }
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 6 characters"
                    />
                    <button type="submit" onClick={ signingIn } className="login-signIn">
                        Sign-In
                    </button>
                </form>              
                <span>By creating an account, you agree to ValYOU's Conditions of Use and Privacy Notice.</span>
            </div>

            <p>New to ValYou?</p>
            <Link to="/signup">
                <button>Create your ValYou account</button>
            </Link>

            <div className="demo-container">
                <span className="demo-signin"> Feel free to try our
                    {<span onClick={signingInDemo}>Demo Sign-In</span>}!
                </span>
            </div>

        </div>
    )
};

export default Signin;