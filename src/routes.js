import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import ProductHomeContainer from './containers/ProductHomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ProductCartContainer from './containers/ProductCartContainer';
import NotFoundComponent from './NotFoundComponent';
import Layout from './components/Layout';

const Routes = () => (
	<Layout>
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={ProductHomeContainer} />
					<Route exact path="/details/:id" component={ProductDetailsContainer} />
					<Route exact path="/cartDetails" component={ProductCartContainer} />
					<Route exact path="*" component={NotFoundComponent} />
				</Switch>
			</div>
		</Router>
	</Layout>);

export default Routes;