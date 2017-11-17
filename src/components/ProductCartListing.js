import React from 'react';

class ProductCartListing extends React.Component {
	render() {
		const product = this.props.product;
		return (
			<tr> <td> {product.name} </td> <td> {product.price} </td> <td> {product.quantity} </td> </tr>
			);
	}
}

export default ProductCartListing;