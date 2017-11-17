import React from 'react'
import IndividualProduct from './IndividualProduct'

class ProductList extends React.Component {
	render() {
		const rows = [];
		this.props.products.forEach((product) => {
			return (
				rows.push(<IndividualProduct product={product} key={product.name} />)
				);
		}
		);
		return (
			<div> 
				<ul className="product-inlined">
				{rows}
				</ul>
			</div>
			);
	}
}

export default ProductList;