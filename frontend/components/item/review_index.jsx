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

    deleteReview(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.reviewId)
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
            <div className="review-page-index">
                <h2 className="global-reviews">Top Global Reviews</h2>
                <ul>
                    {reviews.map(review => {
                        const dateCreated = new Date().toDateString()

                        return (
                            <div key={review.id}>
                                <div className="image-name">
                                    <img src={'images/profilepic.jpeg'} alt='profile' className='profile-pic'/>
                                    <div className='author-name'>{review.name}</div>                                    
                                </div>

                                <div className='rating-title'>
                                    <div>
                                        <Rating 
                                            initialRating={ review.rating }
                                            emptySymbol={ noStar }
                                            fullSymbol={ starIcon }
                                            readonly={ true }
                                            className="rating-symbol"
                                        />
                                    </div>

                                    <div className='rev-title'>{review.title}</div>
                                </div>

                                <div className="date-rev">Reviewed on {dateCreated}</div>
                                <div className='ver-pur'>Verified Purchase</div>
                                <div className='body-rev'>{review.body}</div>

                                <div>
                                    <div>
                                        {this.props.currentUser === review.authorId ?
                                            <div>
                                                <button className="review-delete-btn" onClick={() => this.props.deleteReview(review.id)}>
                                                    <div className='delete-text'>Delete</div>
                                                </button>
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