import { getLanguage, setLanguage } from '../../repository/userRepository';
import { useEffect, useState } from 'react';
import { Language } from '../../models/Language';

export function useLanguage() {
  const [language, changeLanguage] = useState<Language>(getLanguage());

  useEffect(() => {
    function fetchData() {
      changeLanguage(getLanguage());
    }

    fetchData();
  }, []);

  function setLang(newLanguage: Language) {
    changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return { language, setLang };
}
