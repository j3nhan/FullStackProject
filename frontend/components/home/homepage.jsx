import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from '../slider/slider'
import ItemIndexContainer from '../item/item_index_container';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ban1 = "images/banner1.jpg";
        const ban2 = "images/banner2.jpg";
        const ban3 = "images/banner3.jpg";
        const ban4 = "images/banner4.jpg";

        const bannerImages = [ban1, ban2, ban3, ban4]
        
        return (
            <div>
                <div className="home">
                    <div className="home-container">
                        <Slider images={bannerImages} />
                    </div>

                    <div>
                        <ItemIndexContainer/>
                    </div>
                </div>

                <footer className='footer'>
                    <div className='back-to-top' onClick={() => window.scrollTo(0, 0)}>
                        Back to top
                    </div>
                    <div className='bottom-footer'>
                        <div className='meet-me'>Get to Know Me
                            <li id='first'>
                                <a className='connectlinks' href='https://jennynhan.com'>Jenny Nhan</a>  |  
                                <a className='connectlinks' href='https://linkedin.com/in/jennynhan/'> LinkedIn</a>  |  
                                <a className='connectlinks' href='mailto:j3nnynhan@gmail.com'> Email</a>  |  
                                <a className='connectlinks' href='https://github.com/j3nhan'> GitHub</a>  
                            </li>
                        </div>
                    </div>
                </footer>  
            </div>
        )
    };
};

export default withRouter(Homepage);