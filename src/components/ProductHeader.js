import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductHeader extends React.Component {
	render() {
		const num=this.props.quantity;
		return (
			<div className="product-header">
				<p>  Product List 
					<div className="cart-image-container">
						<Link to={'/cartDetails'} >
							<img src='http://pngimages.net/sites/default/files/shopping-cart-logo-png-image-74546.png' className="cart-image" /> 
						</Link>
						{num}
					</div>
				</p>
			</div>
			);
	}
}

// ProductHeader.defaultProps = {
// 	num:0
// }

const mapStateToProps = (state) => {
	//debugger;
	var quantity=0;
	if(state.cartReducer.items != undefined)
	{	for(var i=0;i<state.cartReducer.items.length;i++)
		{
			quantity += state.cartReducer.items[i].quantity
		}
		return {quantity: quantity};
		
	}
	else
		return {quantity:0};
}

export default connect(mapStateToProps,null)(ProductHeader);