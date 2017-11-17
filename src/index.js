import React from 'react';
import ReactDOM from 'react-dom';
import ProductHomeContainer from './containers/ProductHomeContainer'

//create a component that output html
const App = () => {
    return (
        <div>
          <ProductHomeContainer />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));