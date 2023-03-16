import { createContext } from 'react';
import { Language } from '../models/Language';
import { getLanguage } from '../repository/userRepository';

export const LanguageContext = createContext<Language | null | undefined>(getLanguage());
