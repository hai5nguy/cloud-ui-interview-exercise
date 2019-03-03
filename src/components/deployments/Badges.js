import React, { Component } from "react";
import {
  EuiBadge
} from "@elastic/eui";

const colorMap = {
  master: 'primary',
  data: 'secondary',
}

class Badges extends Component {
  render() {
    const { instance } = this.props;

    return instance.service_roles.map((r, i) => {
      let color = colorMap[r] || 'default';
      return <EuiBadge key={i} color={color}>{r}</EuiBadge>
    });
  }
}

export default Badges;
