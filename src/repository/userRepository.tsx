import { services } from '../services';
import { Language } from '../models/Language';

const defaultLanguage: Language = { value: 'en', label: 'English' };

export const languages: Language[] = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
];

let language: Language =
  languages.find((lang) => lang.value === services.t.getLanguage().substring(0, 2)) ||
  defaultLanguage;

export function getLanguage(): Language {
  return language;
}

export function setLanguage(newLanguage: Language) {
  language = newLanguage;
  services.t.setLanguage(language.value);
}
