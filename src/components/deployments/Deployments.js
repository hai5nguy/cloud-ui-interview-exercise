import React, { Component } from "react";
import {
  EuiPageBody,
} from "@elastic/eui";

import Instances from './Instances'

import data from './deployment.json';

/*
  Usually, data fetching and data manipulation like this needs to be done in an api consuming layer or part of a store's reducer or action creators. 
*/
const { instances } = data.topology;

class Deployments extends Component {
  render() {
    const {
      deployment_name,
    } = data;

    return (
      <EuiPageBody>
        <Instances deploymentName={deployment_name} instances={instances} />
      </EuiPageBody>
    );
  }
}

export default Deployments;
