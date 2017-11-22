import React from 'react';
import ProductCartListing from './ProductCartListing'

class CartCategory extends React.Component {
	render() {
		var TOTAL_PRICE = 0
		const product_list_rows = [];
		const cart_items = this.props.cart_items.items;
		const products = [];
		if(cart_items == undefined)
		{
			return (
				<div>
					<h4> Cart is empty </h4>
				</div>
				)
		}
		//debugger;
		if(this.props.products.length == 0)
		{
			return (
				<div>
					Loading.....
				</div>
				);
		}
		for(var i=0;i<cart_items.length;i++)
		{
			if(this.props.products[i].auto_id == cart_items[i].productId)
			{
				const row_price = this.props.products[i].price*cart_items[i].quantity;
				TOTAL_PRICE += row_price
				products.push({product:this.props.products[i],quantity:cart_items[i].quantity,row_price:row_price})
			}
		} 
		//debugger;  
		products.forEach((product) => {
					product_list_rows.push(<ProductCartListing product={product} key={product.name}  />);
				});
		return (
				<div>
					<table border="1">
						<tr>
							<th> title </th><th> Price </th><th> Qty </th><th> rowPrice </th>
						</tr>
						<tbody>
						 {product_list_rows}
						 </tbody> 
					</table> 
					<div>TOTAL_PRICE={TOTAL_PRICE}</div>
				</div>
			);
	}
}

export default CartCategory;