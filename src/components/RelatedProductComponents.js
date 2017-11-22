import React from 'react';
import ProductList from '../components/ProductList';
import { filter,map } from 'lodash';

class RelatedProductComponents extends React.Component {
	render() {
		//debugger;
		const products_list = this.props.products;
		//debugger;
		const related_product_list = this.props.product.related_products;
		debugger;
		if(related_product_list.length == 0)
		{
			return (
				<div className="no-related-products"> no related products........ </div>
				);
		}
		const related_id_list = map(related_product_list,(product) => {
			return product.id;
		})
		// debugger;
		const filtered_product_list = filter(products_list,(product) => {
			return (related_id_list.includes(product.auto_id))
		})
		debugger;
		return (
			<ProductList products={filtered_product_list} />
			); 
	}
}

export default RelatedProductComponents;