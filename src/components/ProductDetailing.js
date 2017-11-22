import React from 'react';
import { connect } from 'react-redux'; 
import { addToCart,removeFromCart } from '../actions/cart'


class ProductDetailing extends React.Component {
	addToCart = () => {
		this.props.addToCart(this.props.product)
	}

	removeFromCart = () => {
		//debugger;
		this.props.removeFromCart(this.props.product);
	}
	render() {
		const product = this.props.product
		//debugger;
		return (
				<div>
					<img src={product.product_image} className="individual-product-image" />
					<div className="individual-product-detailing">
						<h3>Name: {product.name} </h3>
						<p> <b> desc: </b> {product.description} </p>
						<i className="fa fa-plus" onClick={this.addToCart} /><i className="fa fa-minus" onClick={this.removeFromCart}/>
					</div>
				</div>
			);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addToCart: (product) => dispatch(addToCart(product)),
	removeFromCart: (product) => dispatch(removeFromCart(product))
})

export default connect(null,mapDispatchToProps)(ProductDetailing);