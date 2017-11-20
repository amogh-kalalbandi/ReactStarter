import React from 'react'

class ProductHeader extends React.Component {
	render() {
		const num=0;
		return (
			<div className="product-header">
				<p> Product List <div className="cart-image-container"><img src='http://pngimages.net/sites/default/files/shopping-cart-logo-png-image-74546.png' className="cart-image" /> {num} </div>  </p>
			</div>
			);
	}
}

export default ProductHeader;