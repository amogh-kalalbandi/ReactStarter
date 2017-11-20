import React from 'react';
import ReactDOM from 'react-dom';
import ProductHomeContainer from './containers/ProductHomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ProductCartContainer from './containers/ProductCartContainer';
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'

//create a component that output html
const App = () => {
    return (
    	<Provider store={store}>
          <Routes />
        </Provider>
           );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));