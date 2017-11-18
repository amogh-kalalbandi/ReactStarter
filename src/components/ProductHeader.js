import React from 'react'

class ProductHeader extends React.Component {
	render() {
		return (
			<div className="product-header">
				<p> Product List<img src='http://pngimages.net/sites/default/files/shopping-cart-logo-png-image-74546.png' className="cart-image" /></p>
			</div>
			);
	}
}

export default ProductHeader;