import React from 'react';

class ProductDetailing extends React.Component {
	render() {
		const product = this.props.product
		return (
				<div>
					<img src={product.image} className="individual-product-image" />
					<div className="individual-product-detailing">
						<h3>Name: {product.name} </h3>
						<p> <b> desc: </b> {product.description} </p>
					</div>
				</div>
			);
	}
}

export default ProductDetailing;