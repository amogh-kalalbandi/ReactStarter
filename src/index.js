import React from 'react';
import ReactDOM from 'react-dom';
import ProductHomeContainer from './containers/ProductHomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ProductCartContainer from './containers/ProductCartContainer';

//create a component that output html
const App = () => {
    return (
          <ProductHomeContainer />
           );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));