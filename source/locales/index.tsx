import * as localize from 'react-native-localize';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import en from './en';
import es from './es';
import pt from './pt';

i18n.translations = {
  en,
  pt,
  es,
};

i18n.defaultLocale = 'en';

const getLanguage = () => {
  const fallback = { languageTag: 'en' };
  const { languageTag } =
    localize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
    fallback;

  return languageTag;
};

const translate = memoize(
  (key, config = undefined) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setLanguageToI18n = () => {
  const language = getLanguage();
  i18n.locale = language;
};

export default translate;
