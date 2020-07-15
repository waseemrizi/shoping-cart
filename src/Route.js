import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About'
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function RouteConfig() {

  return (
	<div>
    
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
            
        </Router>
        <Footer />
	</div>
  );
}

export default RouteConfig;