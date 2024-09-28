import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './en/common.json';
import commonZh from './zh/common.json';

const resources = {
  en: {
    common: commonEn,
  },
  zh: {
    common: commonZh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh', // 默认语言
  fallbackLng: 'en', // 回退语言
  interpolation: {
    escapeValue: false, // 不转义 HTML 标记
  },
  ns: ['common'], // 命名空间
  defaultNS: 'common', // 默认命名空间
});

export default i18n;
