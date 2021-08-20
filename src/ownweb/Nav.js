import React from "react";
import { Route, Switch } from "react-router";
import Slideshow from "../component/slideshow";
import Sign from './Sing'
import Errors from '../component/error'
import Content from './content'
const Routers = () => {
  return (
    <>
      <Switch>
        
        <Route path="/sign" component={Sign} />
        <Route path="/Content" component={Content} />
        <Route path="/" component={Slideshow} />
        
        
        
      </Switch>
    </>
  );
};
const Nav = () => {
  return (
    <>
      <Routers />
      
    </>
  );
};
export default Nav;
