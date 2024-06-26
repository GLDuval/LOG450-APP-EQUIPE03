import * as Localization from 'expo-localization';
import { I18n, Scope, TranslateOptions } from 'i18n-js';

import * as translations from './translations';
import { stores } from '../../stores';

export class TranslateService {
  private inited = false;
  private i18n = new I18n(translations);

  init = () => {
    if (!this.inited) {
      this.setup();

      this.inited = true;
    }
  };

  do = (scope: Scope, options?: TranslateOptions | undefined) => this.i18n.t(scope, options);

  setup = (): void => {
    const { ui } = stores;
    const lng = Localization.locale;

    this.i18n.enableFallback = true;
    this.i18n.locale = ui.isLanguageSystem ? lng : ui.language;
  };

  getLanguage = (): string => {
    return this.i18n.locale.substring(0, 2);
  };

  setLanguage = (lang: string) => {
    this.i18n.locale = lang;
  };
}
