import React, { Component } from "react";
import {
  EuiIcon,
} from "@elastic/eui";

import "./InstanceDetails.scss"

class InstanceDetails extends Component {
  render() {
    const { instance } = this.props;
    const { memory, disk } = instance;

    return (
      <div className="instanceDetails">
        <div className="memoryInfo">
          <EuiIcon className="icon" type="memory" />
          <h3 className="title">Memory</h3>
          <div className="hardware">
            <div className="hardwareLabel">
              <p>Capacity:</p>
              <p>Pressure:</p>
            </div>
            <div>
              <p>{memory.instance_capacity} MB</p>
              <p>{memory.memory_pressure}</p>
            </div>
          </div>
        </div>
        <div className="diskInfo">
          <EuiIcon className="icon" type="storage" />
          <h3 className="title">Disk</h3>
          <div className="hardware">
            <div className="hardwareLabel">
              <p>Available:</p>
              <p>Used:</p>
              <p>Multiplier:</p>
            </div>
            <div>
              <p>{disk.disk_space_available} MB</p>
              <p>{disk.disk_space_used} MB</p>
              <p>{disk.storage_multiplier}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstanceDetails;
