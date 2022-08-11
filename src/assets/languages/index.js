import ru from './ru.json';
import en from './en.json';
import de from './de.json';

export const dictionaryList = { en, ru, de };

export const languageOptions = {
  en: {country: 'En', flag: require('../icons/ukflag.png')},
  ru: {country: 'Ru', flag: require('../icons/ruflag.png')},
  de: {country: 'De', flag: require('../icons/deflag.png')},
};
