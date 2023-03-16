import _ from 'lodash';
import React from 'react';
import { Picker } from 'react-native-ui-lib';
import { Language } from '../../models/Language';
import { services } from '../../services';
import { useLanguage } from '../hooks/useLanguage';
import { languages } from '../../repository/userRepository';

type LanguagePickerProps = {
  changeLang: (newLang: Language) => void;
};

export const LanguagePicker = (props: LanguagePickerProps) => {
  const { language, setLang } = useLanguage();

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    props.changeLang(newLang);
  };

  return (
    <Picker
      placeholder={services.t.do('profile.chooseLanguage')}
      value={language}
      onChange={(item: object) => handleLangChange(item as Language)}
    >
      {_.map(languages, (option) => (
        <Picker.Item key={option.value} value={option.value} label={option.label} />
      ))}
    </Picker>
  );
};
