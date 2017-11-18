import React from 'react';

class IndividualProduct extends React.Component {
	render() {
		const product = this.props.product;
		return (
				<li className="individual-product"> 
					<div className="product-container"> 
						<img src={product.image} /><br />
						<div className="product-text">
							{ product.name } 
							<i className="fa fa-plus" />
						</div>
					</div> 
				</li> 
			);
	}
}

export default IndividualProduct;