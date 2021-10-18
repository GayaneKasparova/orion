import React from 'react';

const LocaleContext = React.createContext({locale: "en"});

class LocaleProvider extends React.Component {
  render() {
    const {children, locale} = this.props;
    return (
      <LocaleContext.Provider value={{locale}}>
        {children}
      </LocaleContext.Provider>
    )
  }
}

export default LocaleContext;

export {LocaleProvider};