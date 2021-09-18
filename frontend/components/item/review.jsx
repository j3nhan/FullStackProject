import React from 'react';
import Rating from 'react-rating';
import Header from '../header/Header';
import LoadingPage from '../Loading_page';

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
            <img className="rating-star" src={'images/staricon.svg'} />
        )

        const noStar = (
            <img className="rating-star" src={'images/nostar.svg'} />
        )

        if (!item) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }
        
        return (
            <div>

                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <h3>Create Review</h3>
                    <div>
                        <img src={this.props.item.photoUrl} /> 
                        <div>{this.props.item.itemName}</div>
                    </div>

                    <div>
                        <h4>Overall Rating</h4>
                        <Rating
                            initialRating={ this.state.rating }
                            emptySymbol={ noStar }
                            fullSymbol={ starIcon }
                            onChange={ this.updateReview('rating') }
                        />
                    </div>

                    <div>
                        <h4>Add a headline</h4>
                        <input type="text" onChange={this.updateState('title')} value={this.state.title} placeholder="What's most important to know?"/>
                    </div>

                    <div>
                        <h4>Add a written review</h4>
                        <textarea onChange={this.updateState('body')} value={this.state.body} placeholder="What did you like or dislike? What did you use this product for?" ></textarea>                    
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Review;