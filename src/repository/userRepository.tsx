import { services } from '../services';
import { Language } from '../models/Language';

export const languages: Language[] = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
];

const defaultLanguage: Language = languages[0];

let language: Language =
  languages.find((lang) => lang.value === services.t.getLanguage()) || defaultLanguage;

export function getLanguage(): Language {
  return language;
}

export function setLanguage(newLanguage: Language) {
  language = newLanguage;
  services.t.setLanguage(language.value);
}