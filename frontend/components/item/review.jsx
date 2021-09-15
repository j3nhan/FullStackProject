import React from 'react';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            rating: '',
            item_id: this.props.item.id,
            author: this.props.currentUser ? this.props.currentUser.name : '', 
            author_id: this.props.currentUser ? this.props.currentUser.id : ''
        }
        
    }

    
}