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
      dot: require('../../assets/icons/dot.png') as Image,
      rightArrow: require('../../assets/icons/right-arrow.png') as Image,
      moon: require('../../assets/icons/moon.png') as Image,
      language: require('../../assets/icons/language.png') as Image,
      google: require('../../assets/icons/google.png') as Image,
    });

    Assets.loadAssetsGroup('images', {
      superC: require('../../assets/super-c-logo.png') as Image,
      onboarding1: require('../../assets/onboarding1.jpg') as Image,
      onboarding2: require('../../assets/onboarding2.jpg') as Image,
      onboarding3: require('../../assets/onboarding3.jpg') as Image,
    });
  }

  private incAppLaunches() {
    const { ui } = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
