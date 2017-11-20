import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { addToCart,removeFromCart } from '../actions/cart'

class IndividualProduct extends React.Component {
	addToCart = () => {
		this.props.addToCart(this.props.product)
	}

	removeFromCart = () => {
		//debugger;
		this.props.removeFromCart(this.props.product);
	}

	render() {
		const product = this.props.product;
		return (
				<li className="individual-product"> 
					<div className="product-container">
						<Link to={`/details/${product.id}`} > 
							<img src={product.image} /><br />
						</Link>
							<div className="product-text">
								{ product.name } 
								<i className="fa fa-plus" onClick={this.addToCart} />
								<i className="fa fa-minus" onClick={this.removeFromCart} />
							</div>
						</div> 
					</li> 
			);
	}
}

// const mapStateToProps = () => ({

// });

const mapDispatchToProps = (dispatch) => ({
	addToCart: (product) => dispatch(addToCart(product)),
	removeFromCart: (product) => dispatch(removeFromCart(product))
})

export default connect(null,mapDispatchToProps)(IndividualProduct);