import React from 'react';
import ProductHeader from '../components/ProductHeader'

class ProductHomeContainer extends React.Component {
	render() {
		return (
			<div>
				<ProductHeader />
				<ProductList />
			</div>
			);
	}
}

export default ProductHomeContainer;