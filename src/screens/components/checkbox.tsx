import React, { Component } from 'react';
import { getTheme } from '../../utils/designSystem';
import { Checkbox } from 'react-native-ui-lib';

type IngredientsListProps = {
  isChecked: boolean;
};

class CheckboxComponent extends Component<IngredientsListProps> {
  state = {
    isChecked: this.props.isChecked,
  };

  render() {
    const { isChecked } = this.state;

    return (
      <Checkbox
        value={isChecked}
        onValueChange={(isChecked: boolean) => this.setState({ isChecked })}
        color={getTheme().lightOrange}
      />
    );
  }
}

export default CheckboxComponent;
