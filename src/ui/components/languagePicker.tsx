import _ from 'lodash';
import React from 'react';
import { Picker } from 'react-native-ui-lib';
import { Language } from '../../models/Language';
import { services } from '../../services';
import { useLanguage } from '../hooks/useLanguage';
import { languages } from '../../repository/userRepository';

export const LanguagePicker = () => {
  const { language, setLang } = useLanguage();

  return (
    <Picker
      placeholder={services.t.do('profile.chooseLanguage')}
      value={language}
      onChange={(item: object) => setLang(item as Language)}
    >
      {_.map(languages, (option) => (
        <Picker.Item key={option.value} value={option.value} label={option.label} />
      ))}
    </Picker>
  );
};
