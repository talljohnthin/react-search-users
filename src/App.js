import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppLayout from "./appLayout";

/* Routes */
import TeamUsers from "./view/users";

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Fragment>
          <AppLayout>
            <Route exact path={`/`} component={TeamUsers} />
          </AppLayout>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
