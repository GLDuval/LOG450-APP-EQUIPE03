import React, { Component } from 'react';
import { getTheme } from '../../utils/designSystem';
import { Button, Colors, Icon } from 'react-native-ui-lib';

class FavoriteComponent extends Component {
  state = {
    isChecked: false,
    tint: getTheme().details,
  };

  render() {
    return (
      <Button
        onPress={() => {
          this.setState({ isChecked: !this.state.isChecked });
          this.state.isChecked
            ? this.setState({ tint: getTheme().details })
            : this.setState({ tint: getTheme().orange });
        }}
        backgroundColor={Colors.transparent}
        style={{ width: 25, height: 25, marginTop: 5, marginLeft: 20 }}
      >
        <Icon assetName={'heart'} tintColor={this.state.tint} style={{ width: 25, height: 25 }} />
      </Button>
    );
  }
}

export default FavoriteComponent;
