import React from 'react';
import { connect } from 'react-redux';
import { populateProducts } from '../actions/cart';
import axios from 'axios'; 
import { addToCart,initialCartAddition } from '../actions/cart'

class Layout extends React.Component {
	
	componentWillMount() {
		var products = '';
		var cart_items = '';
		axios.get('http://127.0.0.1:8000/Product/')
	  .then((response) => {
	    products = response.data;
	    this.props.populateProducts(products);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	  axios.get('http://127.0.0.1:8000/OrderCount/')
	  .then((response) => {
	  	//console.log(response.data);
	    cart_items = response.data;
	     //debugger;
	    this.props.initialCartAddition(cart_items);	
	    //debugger;    
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
	populateProducts: (products) => dispatch(populateProducts(products)),
	initialCartAddition: (cart_items) => dispatch(initialCartAddition(cart_items))
})

export default connect(null,mapDispatchToProps)(Layout);