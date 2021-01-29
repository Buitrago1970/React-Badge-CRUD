import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import BadgesNew from "../pages/BadgeNew";
import Badges from "../pages/Badge.js";
import Layout from "./Layout.js";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
