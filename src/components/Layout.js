import React from 'react';
import { connect } from 'react-redux';
import { populateProducts } from '../actions/cart';
import axios from 'axios'; 

class Layout extends React.Component {
	
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
	}
	render() {
		return(
			this.props.children);
	}
}

const mapDispatchToProps = (dispatch) => ({
	populateProducts: (products) => dispatch(populateProducts(products))
})

export default connect(null,mapDispatchToProps)(Layout);