import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import ProductDetailing from '../components/ProductDetailing';
import { find } from 'lodash'
import { products } from '../stub'

class ProductHomeContainer extends React.Component {
	render() {
		// const products = [
		// {id:0,name:'IphoneX',description:'A product of apple company released in 2017',image:'https://cdn.macrumors.com/article-new/2017/09/iphonexdesign-1-800x597.jpg'},
		// {id:1,name:'Samsung S8',description:'product of samsung in 2017',image:'https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg'},
		// {id:2,name:'MI note4',description:'best middle class phone released by MI',image:'https://static.digit.in/product/1d47956f98aa99c81550d61e6b0dbcdab334db28.jpeg'}
		// ];
		const id = find(products,{ id: parseInt(this.props.match.params.id)});
		debugger; 
		return (
			<div>
				<ProductHeader />
				<ProductDetailing product={id} />
				<div>
					<ProductList products={products} />
				</div>
			</div>
			);
	}
}

export default ProductHomeContainer;