// import React from 'react';
// import { Link } from 'react-router-dom';

// class ItemShow extends React.Component {
//     componentDidMount() {
//         this.props.fetchItem(this.props.match.params.itemId)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.location !== this.props.location) this.props.fetchItem(this.props.match.params.itemId)
//     }

//     render() {
//         const { item } = this.props;
        
//         return (
//             <div className="item">
//                 <div className="info">
//                     <Link to={`/items/${id}`} className="item-name">
//                         <p>{ itemName }</p>
//                     </Link>

//                     <p>
//                         <strong>$</strong>
//                         <strong>{ price }</strong>
//                     </p>

//                     <div>
//                         {Array(rating).fill().map((_, idx) => (
//                             <p key={ idx }>
//                                 <span role="img" aria-label="star">⭐</span>
//                             </p>
//                         ))}
//                     </div>
//                 </div>

//             <img src={ item.photoUrl } />
//             <button>Add To Cart</button>

//         </div>

//         )
//     }
// }

// export default ItemShow;