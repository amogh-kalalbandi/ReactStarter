import React from 'react';

class ProductCartListing extends React.Component {
	render() {
		const {product,quantity,row_price} = this.props.product;
		return (
				<tr> <td> {product.name} </td> <td> {product.price} </td> <td> {quantity} </td><td> {row_price} </td></tr>
			);
	}
}

export default ProductCartListing;