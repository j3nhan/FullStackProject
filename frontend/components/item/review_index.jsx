import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.itemIdMat)
    }

    deleteReview(reviewId) {
        return (() => 
            this.props.deleteReview(reviewId)
            .then(() => this.props.history.push(`/items/${this.props.itemIdMat}`))
        )
    }

    render() {
        const { reviews} = this.props;

        const starIcon = (
            <img className="rating-star" src={'images/staricon.svg'} />
        )
        const noStar = (
            <img className="rating-star" src={'images/nostar.svg'} />
        )

        return (
            <div>
                <h2>Top Global Reviews</h2>
                <ul>
                    {reviews.map(review => {
                        const dateCreated = new Date(review.created_at).toDateString()

                        return (
                            <div key={review.id}>
                                <div>
                                    <img src={'images/profilepic.jpeg'} alt='profile'/>
                                    <div>{this.props.authors[0].name}</div>
                                </div>

                                <div>
                                    <div>
                                        <Rating 
                                            initialRating={ review.rating }
                                            emptySymbol={ noStar }
                                            fullSymbol={ starIcon }
                                            readonly={ true }
                                            className="rating-symbol"
                                        />
                                    </div>

                                    <div>{review.title}</div>
                                </div>

                                <div>Reviewed on {dateCreated}</div>
                                <div>Verified Purchase</div>
                                <div>{review.body}</div>

                                <div>
                                    <div>
                                        {this.props.currentUser === review.author_id ?
                                            <div>
                                                <button className="review-delete-btn" onClick={this.deleteReview(review.id)}>Delete</button>
                                            </div>
                                            : 
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
};

export default ReviewIndex;