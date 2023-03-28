import { createContext } from 'react';
import { Language } from '../models/Language';
import { getLanguage } from '../repository/userRepository';

interface LanguageContextValue {
  language: Language;
  setLang: (newLanguage: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: getLanguage(),
  setLang: () => {
    return;
  },
});
