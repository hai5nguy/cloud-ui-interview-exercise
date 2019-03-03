import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Deployments from "./components/deployments/Deployments";

import {
  EuiPage,
  EuiPageSideBar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderLogo,
  EuiHeaderSectionItem
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <EuiHeader>
            <EuiHeaderSection grow={true}>
              <EuiHeaderSectionItem border="right">
                <EuiHeaderLogo href="#" iconType={"logoElastic"} />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          <EuiPage>
            <EuiPageSideBar>
              <Link to="/">Home</Link>
              <EuiSpacer />
              <Link to="/deployments">Deployments</Link>
            </EuiPageSideBar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/deployments" component={Deployments} />
            </Switch>
          </EuiPage>
        </div>
      </Router>
    );
  }
}

export default App;
