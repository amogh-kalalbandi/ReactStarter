import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import ProductDetailing from '../components/ProductDetailing';

class ProductHomeContainer extends React.Component {
	render() {
		const products = [
		{name:'IphoneX',description:'A product of apple company released in 2017',image:'https://cdn.macrumors.com/article-new/2017/09/iphonexdesign-1-800x597.jpg'},
		{name:'Samsung S8',description:'product of samsung in 2017',image:'https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg'},
		{name:'MI note4',description:'best middle class phone released by MI',image:'https://static.digit.in/product/1d47956f98aa99c81550d61e6b0dbcdab334db28.jpeg'}
		];
		return (
			<div>
				<ProductHeader />
				<ProductDetailing product={products[0]} />
				<div>
					<ProductList products={products} />
				</div>
			</div>
			);
	}
}

export default ProductHomeContainer;