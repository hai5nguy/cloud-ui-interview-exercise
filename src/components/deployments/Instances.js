import React, { Component } from "react";
import {
  EuiIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
} from "@elastic/eui";

import Badges from "./Badges";
import InstanceDetails from "./InstanceDetails";

import "./Instances.scss";

class Instances extends Component {
  state = {
    selectedInstanceIndex: 0
  }

  instanceClick = (selectedInstanceIndex) => () => {
    this.setState({ selectedInstanceIndex })
  }

  render() {
    const { selectedInstanceIndex } = this.state;
    const { instances, deploymentName } = this.props;

    const instance = instances[selectedInstanceIndex]

    return (
      <EuiPanel className="instances" paddingSize="l" hasShadow style={{ textTransform: "uppercase" }} >
        {deploymentName}
        <EuiFlexGroup className="scrollPanel" direction="column">
          <EuiFlexItem className="cardContainer">
            {instances.map((instance, i) => (
              <EuiCard
                key={i}
                className={`card ${i === selectedInstanceIndex ? 'selected' : ''}`}
                icon={<EuiIcon size="xxl" type={`infraApp`} />}
                title={instance.instance_name}
                description={<Badges instance={instance} />}
                onClick={this.instanceClick(i)}
              />
            ))}
          </EuiFlexItem>
          <EuiFlexItem className="detailsContainer">
            <InstanceDetails instance={instance} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel >
    );
  }
}

export default Instances;
