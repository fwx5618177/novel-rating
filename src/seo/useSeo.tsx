import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Seo from './Seo';
import { getSeoConfig } from './seoConfig';
import { PageKey, Lang, SeoConfig } from './types';

export const useSeo = (pageKey: PageKey = 'common') => {
  const { lang = 'en' } = useParams<{ lang: Lang }>();
  const seoConfig = useMemo(() => {
    return getSeoConfig(lang, pageKey) as SeoConfig;
  }, [lang, pageKey]);

  return <Seo pageKey={pageKey} config={seoConfig} lang={lang} />;
};
