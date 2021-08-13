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

                <div className="item-index">
                    
                   <h1 className="all-items-head">Recommended For You</h1> 
                   <ul className="item-listing">
                       {this.props.items.map((item, idx) => <ItemCard key={idx} item={item} />)}
                   </ul>
                    {/* <div c
                    lassName="item-home">
                        <div className="item-container">
                            <div className="items-row">
                                {this.props.items.slice(0, 2).map((item, idx) => (
                                    <img src={ item.photoUrl } className="item-img" key={idx}/>
                                ))}
                            </div>
                            <div className="items-row">
                                {this.props.items.slice(2, 5).map((item, idx) => (
                                    <img src={ item.photoUrl } className="item-img" key={idx}/>

                                ))}
                            </div>
                            <div className="items-row">
                                {this.props.items.slice(5, 6).map((item, idx) => (
                                    <img src={ item.photoUrl } className="item-img" key={idx}/>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            )
        }
    }
};

export default ItemIndex;