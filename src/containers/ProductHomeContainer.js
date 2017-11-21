import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import ProductDetailing from '../components/ProductDetailing';
// import { products } from '../stub';
import { connect } from 'react-redux';
import {populateProducts} from '../actions/cart';
import axios from 'axios';

class ProductHomeContainer extends React.Component {
	componentWillMount() {
		var products = ''
		axios.get('http://127.0.0.1:8000/Product/')
	  .then((response) => {
	    products = response.data;
	    this.props.populateProducts(products);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	  //debugger;
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