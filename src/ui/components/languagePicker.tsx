import _ from 'lodash';
import React, { Component } from 'react';
import { Picker } from 'react-native-ui-lib';
import { Language } from '../../models/Language';
import { services } from '../../services';

const LANGUAGES: Language[] = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
];

export default class LanguagePicker extends Component {
  selectedLanguageCode = LANGUAGES.find(
    (lang) => lang.value === services.t.getLanguage().substring(0, 2),
  );
  state = {
    language: this.selectedLanguageCode,
  };

  handleLangChange = (lang: object) => {
    services.t.setLanguage((lang as Language).value);
    this.setState({ language: lang });
  };

  render() {
    return (
      <Picker
        placeholder={services.t.do('profile.chooseLanguage')}
        value={this.state.language}
        onChange={(item: object) => this.handleLangChange(item)}
      >
        {_.map(LANGUAGES, (option) => (
          <Picker.Item key={option.value} value={option.value} label={option.label} />
        ))}
      </Picker>
    );
  }
}
