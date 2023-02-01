import React, { Component } from 'react';
import { getTheme } from '../../utils/designSystem';
import { Checkbox } from 'react-native-ui-lib';

class CheckboxComponent extends Component {
  state = {
    isChecked: false,
  };

  render() {
    return (
      <Checkbox
        value={this.state.isChecked}
        onValueChange={(isChecked: boolean) => this.setState({ isChecked })}
        color={getTheme().lightOrange}
      />
    );
  }
}

export default CheckboxComponent;
