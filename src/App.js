import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={ContactUs} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
