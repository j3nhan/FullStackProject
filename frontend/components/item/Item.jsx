import React from 'react';
import { Link } from 'react-router-dom';

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
                            <span role="img" aria-label="star">⭐</span>
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