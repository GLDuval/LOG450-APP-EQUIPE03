import React from 'react';

const DEFAULT_LANG = 'en';
const LangContext = React.createContext(DEFAULT_LANG);

class LanguageProvider extends React.Component {
  state = {
    lang: DEFAULT_LANG,
  };

  handleLangChange = (newLang: string) => {
    this.setState({ lang: newLang });
  };

  render() {
    const { lang } = this.state;

    return (
      <LangContext.Provider value={{ lang, handleLangChange: this.handleLangChange }}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export default { LanguageProvider, LangContext };
