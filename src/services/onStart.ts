import { Assets } from 'react-native-ui-lib';
import { Image } from 'react-native-ui-lib/src/components/image';
import { stores } from '../stores';

export class OnStartService {
  private inited = false;

  init(): void {
    if (!this.inited) {
      this.incAppLaunches();

      this.loadAssets();

      this.inited = true;
    }
  }

  private loadAssets() {
    Assets.loadAssetsGroup('icons', {
      recipe: require('../../assets/icons/recipe.png') as Image,
      list: require('../../assets/icons/list.png') as Image,
      map: require('../../assets/icons/map.png') as Image,
      heart: require('../../assets/icons/heart.png') as Image,
      close: require('../../assets/icons/close.png') as Image,
      back: require('../../assets/icons/back.png') as Image,
      superC: require('../../assets/super-c-logo.png') as Image, // TODO: À enlever quand le loadAssetsGroup en dessous va fonctionner
    });

    Assets.loadAssetsGroup('images', {
      superC: require('../../assets/super-c-logo.png') as Image,
    });
  }

  private incAppLaunches() {
    const { ui } = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
