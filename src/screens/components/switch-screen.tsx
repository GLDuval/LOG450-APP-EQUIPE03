import React, { Component } from 'react';
import { Switch } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';

class SwitchScreen extends Component {
  state = {
    value: true,
  };

  render() {
    return (
      <Switch
        onColor={getTheme().purple}
        value={this.state.value}
        onValueChange={(value: boolean) => this.setState({ value })}
        style={{ marginBottom: 20 }}
      />
    );
  }
}

export default SwitchScreen;
