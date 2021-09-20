import React from 'react';
import Rating from 'react-rating';
import LoadingPage from '../loading_page';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.props.fetchItem(this.props.itemIdMat);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state, this.props.itemIdMat)
        .then(() => this.props.history.push(`/items/${this.props.itemIdMat}`))
    }

    updateReview(field) {
        return e => this.setState({ [field]: e })
    }

    updateState(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        const { item } = this.props;
        const starIcon = (
            <img className="rating-star-rev" src={'images/staricon.svg'} />
        )

        const noStar = (
            <img className="rating-star-rev" src={'images/nostar.svg'} />
        )

        if (!item) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }
        
        return (
            <div className='review-page-entire'>
                <form onSubmit={this.handleSubmit}>
                    <h3 className='create-review-title'>Create Review</h3>
                    <div className='photo-name-cont'>
                        <img className='photo-review' src={this.props.item.photoUrl} /> 
                        <div className='item-name-review'>{this.props.item.itemName}</div>
                    </div>

                    <div className='star-cont'>
                        <h3 className='overall-rating'>Overall Rating</h3>
                        <Rating
                            initialRating={ this.state.rating }
                            emptySymbol={ noStar }
                            fullSymbol={ starIcon }
                            onChange={ this.updateReview('rating') }
                            className="rating-cont-rev"
                        />
                    </div>

                    <div className='headline-cont'>
                        <h4 className="headline-title">Add a headline</h4>
                        <input className='headline-input' type="text" onChange={this.updateState('title')} value={this.state.title} placeholder="What's most important to know?"/>
                    </div>

                    <div>
                        <h4 className='headline-title'>Add a written review</h4>
                        <textarea className='rev-input' onChange={this.updateState('body')} value={this.state.body} placeholder="What did you like or dislike? What did you use this product for?" ></textarea>                    
                    </div>

                    <div className='submit-btn-cont'>
                        <button className='submit-rev-button'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Review;