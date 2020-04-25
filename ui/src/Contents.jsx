  
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductView from './ProductView.jsx';
import ProductEdit from './ProductEdit.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/productview" component={ProductView} />
      <Route path="/productedit/:id" component={ProductEdit} />
      <Route component={NotFound} />
    </Switch>
  );
}