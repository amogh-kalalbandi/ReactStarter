import React from 'react';
import { Link } from 'react-router-dom';

class IndividualProduct extends React.Component {
	render() {
		const product = this.props.product;
		return (
			<Link to={'/details/'} >
				<li className="individual-product"> 
					<div className="product-container"> 
						<img src={product.image} /><br />
						<div className="product-text">
							{ product.name } 
							<i className="fa fa-plus" />
						</div>
					</div> 
				</li>
			</Link> 
			);
	}
}

export default IndividualProduct;