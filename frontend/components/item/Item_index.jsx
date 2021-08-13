import React from 'react';
import LoadingPage from '../Loading_page';
import ItemCard from './Item_card';

class ItemIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rendered: false
        }
    }

    componentDidMount() {
        this.props.fetchItems()
            .done(() => this.setState({ rendered: true }))
    }

    render() {
        if (!this.props.items) return null;

        if (!this.state.rendered) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="item-index">
                        <div className="row-container">

                        </div>
                    <h1 className="all-items-head">Recommended For You</h1> 
                    <div className="home">
                        <div className="home-row">
                                {this.props.items.slice(0, 5).map((item, idx) => <ItemCard key={idx} item={item} />)}
                        </div>
                        <div className="home-row">
                                {this.props.items.slice(5, 10).map((item, idx) => <ItemCard key={idx} item={item} />)}
                        </div>
                        <div className="home-row">
                                {this.props.items.slice(10, 20).map((item, idx) => <ItemCard key={idx} item={item} />)}
                        </div>
                        <div className="home-row">
                                {this.props.items.slice(20, 25).map((item, idx) => <ItemCard key={idx} item={item} />)}
                        </div>
                    </div>
                    </div>

                </div>
            )
        }
    }
};

export default ItemIndex;