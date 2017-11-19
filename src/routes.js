import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import ProductHomeContainer from './containers/ProductHomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ProductCartContainer from './containers/ProductCartContainer';
import NotFoundComponent from './NotFoundComponent'

const Routes = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={ProductHomeContainer} />
				<Route exact path="/details/" component={ProductDetailsContainer} />
				<Route exact path="*" component={NotFoundComponent} />
			</Switch>
		</div>
	</Router>);

export default Routes;