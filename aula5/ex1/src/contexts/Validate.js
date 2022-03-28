import { createContext } from 'react';

export const ValidateContext = createContext();

const ValidateProvider = ({ children }) => {

  const isNameValid = (name) => {
    let haveJustLetters = [...name].every(letter => letter.toLowerCase() !== letter.toUpperCase() || letter === ' ');
    let isEmpty = name === '';
    let isValid = haveJustLetters && !isEmpty;

    return isValid;
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
    let haveJustLetters = [...job].every(letter => letter.toLowerCase() !== letter.toUpperCase() || letter === ' ');
    let isEmpty = job === '';
    let isValid = haveJustLetters && !isEmpty;

    return isValid;
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