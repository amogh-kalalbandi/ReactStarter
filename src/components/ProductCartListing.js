import React from 'react';

class ProductCartListing extends React.Component {
	render() {
		const {product,quantity,row_price} = this.props.product;
		//const row_price = product.price*quantity;
		return (
				<tr> <td> {product.name} </td> <td> {product.price} </td> <td> {quantity} </td><td> {row_price} </td></tr>
			);
	}
}

export default ProductCartListing;