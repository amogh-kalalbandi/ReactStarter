import React from 'react';

class IndividualProduct extends React.Component {
	render() {
		const product = this.props.product;
		return (
				<li> { product.name } <img src={product.image} height="42" width="42" /> </li> 
			);
	}
}

export default IndividualProduct;