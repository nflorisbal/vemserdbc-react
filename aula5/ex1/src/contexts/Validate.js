import { createContext } from 'react';

export const ValidateContext = createContext();

const ValidateProvider = ({ children }) => {

  const isNameValid = (name) => {
    return true;
  }

  const isEmailValid = (email) => {
    let emailCharacters = email.split('');
    let emailSplit = email.split('@');
    let haveAt = emailSplit.length > 1;
    let emailDomain = haveAt ? emailSplit[1] : '';
    let emailDomainSplit = emailDomain.split('.');
    let emailDomainHaveDot = emailDomainSplit.length > 1;
    let haveCharBetweenDots = emailDomainSplit.every(e => e.length > 1);
    let startWithLetter = emailCharacters.length ? emailCharacters[0].toUpperCase() !== emailCharacters[0].toLowerCase() : false;
    let isValid = haveAt && emailDomainHaveDot && haveCharBetweenDots && startWithLetter;

    return isValid;
  }

  const isJobValid = (job) => {
    return true;
  }

  return(
    <ValidateContext.Provider value={
      { isNameValid,
        isEmailValid,
        isJobValid }
    }>
      { children }
    </ValidateContext.Provider>
  )
}

export default ValidateProvider;