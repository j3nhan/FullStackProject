import React from 'react';
import { Link } from 'react-router-dom'
import Rating from 'react-rating';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.itemId)
    }

    deleteReview(reviewId) {
        this.props.deleteReview(reviewId)
        this.props.history.push('/items/:itemId')
    }

    render() {
        const { reviews } = this.props;
        const starIcon = (
            <img className="rating-star" src={'images/staricon.svg'} />
        )
        const noStar = (
            <img className="rating-star" src={'images/nostar.svg'} />
        )

        return (
            <div>
                <h1>Customer reviews</h1>
                <ul>
                    {reviews.map(review => {
                        const dateCreated = new Date(review.created_at).toDateString()
                        return (
                            <div key={review.id}>
                                <div>
                                    <img src={'images/profilepic.jpeg'} alt='profile'/>
                                    <div>
                                        {review.author}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Rating 
                                            initialRating={review.rating}
                                            emptySymbol={empty}
                                            fullSymbol={full}
                                            readonly={true}
                                            className="rating-symbol"
                                        />
                                    </div>

                                    <div>{review.title}</div>
                                </div>

                                <div>Reviewed on {dateCreated}</div>

                                <div>Verified Purchase</div>

                                <div>{review.body}</div>

                                <div>
                                    <button>Helpful</button>
                                    <div>Report Abuse</div>
                                    <div>
                                        {this.props.authorId === review.user_id ?
                                            <div>
                                                <button className="review-delete-btn"
                                                    onClick={this.deleteReview(review.id)}>Delete
                                                </button>
                                            </div>
                                            : null
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