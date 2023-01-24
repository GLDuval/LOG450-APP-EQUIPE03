import * as Font from 'expo-font';
import {IconComponent} from '../components/icon';
import {stores} from '../stores';
import {Assets} from 'react-native-ui-lib';

export class OnStartService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.incAppLaunches();

      await this.loadAssets();

      this.inited = true;
    }
  };

  private loadAssets = async () => {
    const fonts = [IconComponent.font];

    const fontAssets = fonts.map(font => Font.loadAsync(font));

    Assets.loadAssetsGroup('images', {
      google: require('../../assets/google.png'),
    });

    await Promise.all([...fontAssets]);
  };

  private incAppLaunches() {
    const {ui} = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
