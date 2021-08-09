import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, itemName, description, price, rating, photo }) => {
    return (
        <div className="item">
            <div className="info">
                <Link to={`/items/${id}`} className="item-name">
                    <p>{ itemName }</p>
                </Link>

                <p>
                    <strong>$</strong>
                    <strong>{ price }</strong>
                </p>

                <div>
                    {Array(rating).fill().map((_, idx) => (
                        <p key={ idx }>
                            <span role="img" aria-label="star">⭐</span>
                        </p>
                    ))}
                </div>
            </div>
            {/* <img src={ item.photoUrl } /> */}
            <img src={photo} />
            <button>Add To Cart</button>
        </div>
    );
};

export default Item;