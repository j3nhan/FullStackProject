import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
    return (
        <li className='item-index-item'>
            <Link className='item-body' to={`/items/${item.id}`}>
                <div className='photo-cont'>
                    <img className='index-item-photo' src={item.photoUrl}></img>
                </div>
            </Link>
        </li>
    )
};

export default ItemCard;