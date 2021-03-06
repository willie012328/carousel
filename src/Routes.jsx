import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import LandingPage from "./containers/landing";
import Carousel from "./containers/carousel";

export function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/:carouselRepo' component={Carousel} />
      <Redirect to='/' />
    </Switch>
  );
}

export default withRouter(Routes);
