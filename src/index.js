import React from 'react';
import ReactDOM from 'react-dom';
import ProductHomeContainer from './containers/ProductHomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ProductCartContainer from './containers/ProductCartContainer';
import Routes from './routes'

//create a component that output html
const App = () => {
    return (
          <Routes />
           );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));