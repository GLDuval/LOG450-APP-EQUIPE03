import {Assets} from 'react-native-ui-lib';
import {stores} from '../stores';

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
    Assets.loadAssetsGroup('icons', {
      recipe: require('../../assets/icons/recipe.png'),
      list: require('../../assets/icons/list.png'),
      map: require('../../assets/icons/map.png'),
      heart: require('../../assets/icons/heart.png'),
      close: require('../../assets/icons/close.png'),
    });

    Assets.loadAssetsGroup('images', {
      superC: require('../../assets/super-c-logo.png'),
    });
  };
  private incAppLaunches() {
    const {ui} = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
