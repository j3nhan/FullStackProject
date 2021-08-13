import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
    return (
        <li className='item-card-index'>
            <Link className='item-body' to={`/items/${item.id}`}>
                <div className='photo-card-cont'>
                    <img className='photo-card-url' src={item.photoUrl}></img>
                </div>
            </Link>
        </li>
    )
};

export default ItemCard;