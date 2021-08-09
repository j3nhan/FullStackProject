import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

const Item = ({id, itemName, price, rating, description, photo }) => {
    return (
        <div className="item">
            <div className="info">
                <Link to={`/items/${id}`} className="item-name">
                    <p>{ itemName }</p>
                </Link>

                <p className="price">
                    <strong>$</strong>
                    <strong>{ price }</strong>
                </p>

                <div className="rating">
                    {Array(rating).fill().map((_, idx) => (
                        <p key={ idx }>
                            <StarIcon style={{color: "#ffd600"}} />
                        </p>
                    ))}
                </div>
            </div>

                {/* <img src={ item.photoUrl } /> */}
                <img src={ photo } />
                <button>Add To Cart</button>
        </div>
    );
};

export default Item;