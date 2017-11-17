import React from 'react';
import ProductCartListing from './ProductCartListing'

class CartCategory extends React.Component {
	render() {
		const product_list_rows = []
		this.props.products.forEach((product) => {
					product_list_rows.push(<ProductCartListing product={product} key={product.name} />);
				});
		return (
			<table border="1">
				<tr>
					<th> title </th><th> Price </th><th> Qty </th><th> rowPrice </th>
				</tr>
				<tbody>
				 {product_list_rows}
				 </tbody> 
			</table> 
			)
	}
}

export default CartCategory;