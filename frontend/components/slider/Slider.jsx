import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Slider = ({ images }) => {
    const [idx, setIdx] = useState(0); 

    useEffect(() => {
        const lastIdx = images.length - 1;
        if (idx < 0) {
            setIdx(lastIdx);
        }
        if (idx > lastIdx) {
            setIdx(0);
        }
    }, [idx, images])

    useEffect(() => {
        let slider = setInterval(() => {
            setIdx(idx + 1);
        }, 6000);

        return () => {
            clearInterval(slider);
        };
    }, [idx]);

    return (
        <div className="section">
            <div className="section-center">
                {images.map((image, idxImage) => {
                    let pos = 'nextSlide';
                    if (idxImage === idx) {
                        pos = 'activeSlide';
                    }
                    if ((idxImage === idx - 1) || 
                        (idx === 0 && idxImage === images.length - 1)) {
                            pos = 'lastSlide';
                        }
                        return(
                            <article className={pos} key={idxImage}>
                                <img src={image} alt='banner_img' className='banner-img' />
                            </article>
                        );
                })}

                <p className='prev' onClick={() => setIdx(idx - 1)} >
                    <ArrowBackIosIcon />               
                </p>

                <p className='next' onClick={() => setIdx(idx + 1)} >
                    <ArrowForwardIosIcon />
                </p>
            </div>
        </div>
    );   
};

export default Slider;