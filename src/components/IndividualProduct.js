import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { addToCart } from '../actions/cart'

class IndividualProduct extends React.Component {
	addToCart = () => {
		this.props.addToCart(this.props.product)
	}

	render() {
		const product = this.props.product;
		return (
				<li className="individual-product"> 
					<div className="product-container">
						<Link to={'/details/'} > 
							<img src={product.image} /><br />
						</Link>
							<div className="product-text">
								{ product.name } 
								<i className="fa fa-plus" onClick={this.addToCart} />
							</div>
						</div> 
					</li> 
			);
	}
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
	addToCart: (product) => dispatch(addToCart(product)),
})

export default connect(mapStateToProps,mapDispatchToProps)(IndividualProduct);