import enAboutConfig from './config/en/about.json';
import enCommonConfig from './config/en/common.json';
import enHomeConfig from './config/en/home.json';
import zhAboutConfig from './config/zh/about.json';
import zhCommonConfig from './config/zh/common.json';
import zhHomeConfig from './config/zh/home.json';
import { Lang, PageKey, SeoConfig } from './types';

const seoConfigs: Record<Lang, Record<PageKey, SeoConfig>> = {
  en: {
    common: enCommonConfig as SeoConfig,
    home: enHomeConfig as SeoConfig,
    about: enAboutConfig as SeoConfig,
  },
  zh: {
    common: zhCommonConfig as SeoConfig,
    home: zhHomeConfig as SeoConfig,
    about: zhAboutConfig as SeoConfig,
  },
};

export const getSeoConfig = (lang: Lang, pageKey: PageKey): SeoConfig => {
  return seoConfigs[lang][pageKey];
};
