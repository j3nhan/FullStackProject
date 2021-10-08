import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CompleteCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='entire-background-black'>
                <div className="pyro">
                    <div className="before"></div>
                        <div className='thankyou-cont'>
                            <h1 className='word'>THANK YOU</h1>
                            <div className='order'>FOR YOUR ORDER!</div>
                            <Link to="/" className='return-link'><button className='return-btn'>Continue Shopping</button></Link>
                            <div className='visit'>Your visit made my day. I appreciate your support</div>
                            <div className='visit'> for my software engineering aspirations.</div>
                            <div className='visit'> Please don't hesitate to contact me to learn more!</div>
                            <div className='connect-logos'>
                                <a href="https://www.jennynhan.com" target="_blank" rel="noopener noreferrer"><img className="logo" src={"images/portfolio-logo.png"} /></a>
                                <a href="https://www.linkedin.com/in/jennynhan/" target="_blank" rel="noopener noreferrer"><img className="logo" src={"images/linkedin-logo.png"} /></a>
                                <a href="mailto:j3nnynhan@gmail.com" target="_blank" rel="noopener noreferrer"><img className="logo" src={"images/email-logo.png"} /></a>
                                <a href="https://github.com/j3nhan" target="_blank" rel="noopener noreferrer"><img className="logo" src={"images/github-logo.png"} /></a>
                            </div>
                        </div>
                    <div className="after"></div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(CompleteCart);