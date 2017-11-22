import React from 'react';
import ProductHeader from '../components/ProductHeader';
import CartCategory from '../components/CartCategory';
import { connect } from 'react-redux';

class ProductCartContainer extends React.Component {
	render() {
		//debugger;
		return (
			<div>
				<ProductHeader />
				<CartCategory products={this.props.products} cart_items={this.props.cart_items} />
			</div>
			);
	}
}

const mapStateToProps = (state) => ({
	cart_items: state.cartReducer,
	products: state.productReducer

})

export default connect(mapStateToProps,null)(ProductCartContainer);