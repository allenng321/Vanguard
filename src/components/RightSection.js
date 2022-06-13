import React from 'react';
import { Link, Route, Switch } from "wouter";

import Inventory from './sections/Inventory.js';
import News from './sections/News.js';
import Sales from './sections/Sales.js'

function RightSection() {
  return (
     <div>
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/news" component={News} />
          <Route path="/sales" component={Sales} />
      </Switch>
     </div>


  )
}

export default RightSection;
