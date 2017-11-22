import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import ProductDetailing from '../components/ProductDetailing';
import { find } from 'lodash';
import { connect } from 'react-redux';
import RelatedProductComponents from '../components/RelatedProductComponents';
//import { products } from '../stub'

class ProductDetailsContainer extends React.Component {
	render() {
		const id = find(this.props.products,{ auto_id: parseInt(this.props.match.params.id)});
		//debugger; 
		if(id == undefined)
		{
			return(
				<div>
					<h1>Loading</h1>
				</div>
				)
		}
		else
		{
			return (
				<div>
					<ProductHeader />
					<ProductDetailing product={id} />
					<div>
						<RelatedProductComponents product={id} products={this.props.products} />
					</div>
				</div>
				);
		}
	}
}

const mapStateToProps = (state) => ({
	products: state.productReducer
})

export default connect(mapStateToProps,null)(ProductDetailsContainer);