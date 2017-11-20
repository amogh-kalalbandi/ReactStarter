import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import ProductDetailing from '../components/ProductDetailing';
import { products } from '../stub';
import { connect } from 'react-redux';
import {populateProducts} from '../actions/cart';

class ProductHomeContainer extends React.Component {
	componentWillMount() {
		this.props.populateProducts(products);
		//debugger;
	}
	render() {
		return (
			<div>
				<ProductHeader />
				<ProductList products={this.props.products} />
			</div>
			);
	}
}

ProductHomeContainer.defaultProps = {
	products:[],
};

const mapStateToProps = (state) => ({
	products: state.productReducer
});

const mapDispatchToProps = (dispatch) => ({	
		populateProducts: (products) => dispatch(populateProducts(products))
});


export default connect(mapStateToProps,mapDispatchToProps)(ProductHomeContainer);