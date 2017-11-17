import React from 'react';

class ProductDetailing extends React.Component {
	render() {
		const product = this.props.product
		return (
				<div>
					<img src={product.image} height="75" width="75" />
					<br /> <br />
					<h3>Name: {product.name} </h3>
					<p> <b> desc: </b> {product.description} </p>
				</div>
			);
	}
}

export default ProductDetailing;