import React, { Component } from "react";
import {
  EuiIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel
} from "@elastic/eui";

class Instances extends Component {
  render() {
    const { instances, deploymentName } = this.props;
    
    return (
      <EuiPanel paddingSize="l" hasShadow style={{ textTransform: 'uppercase' }}>
        {deploymentName}
        <EuiFlexGroup style={{ marginTop: 10 }}>
        {
          instances.map((instance, i) => (
            <EuiFlexItem key={i} style={{ maxWidth: 300 }}>
              <EuiCard
                icon={<EuiIcon size="xxl" type={`infraApp`} />}
                title={instance.instance_name}
                description={instance.zone}
                onClick={() => window.alert('Card clicked')}
              />
            </EuiFlexItem>
          ))
        }
      </EuiFlexGroup>
      </EuiPanel>
    );
  }
}

export default Instances;
