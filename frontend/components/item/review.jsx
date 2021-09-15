import React from 'react';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            item_id: this.props.item.id,
            author: this.props.currentUser ? this.props.currentUser.name : '', 
            author_id: state.session.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
        .then(() => this.props.history.push(`/items/${this.props.item.id}`))
    }

    updateReview(prop) {

    }

    
}