import { capitalizeFirstLetter } from '@utils/common';
import React from 'react';
import * as pkg from 'react-helmet-async';

import { SeoProps } from './types';
const { Helmet } = pkg;

const Seo: React.FC<SeoProps> = ({ pageKey, config, lang }) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{`${capitalizeFirstLetter(pageKey)} - ${config.title}`}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      {config.ogTitle && <meta property="og:title" content={config.ogTitle} />}
      {config.ogDescription && (
        <meta property="og:description" content={config.ogDescription} />
      )}
      {config.ogImage && <meta property="og:image" content={config.ogImage} />}
      {config.twitterTitle && (
        <meta name="twitter:title" content={config.twitterTitle} />
      )}
      {config.twitterDescription && (
        <meta name="twitter:description" content={config.twitterDescription} />
      )}
      {config.twitterImage && (
        <meta name="twitter:image" content={config.twitterImage} />
      )}
      {config.hreflang &&
        config.hreflang.map((href) => (
          <link
            rel="alternate"
            hrefLang={href.lang}
            href={href.url}
            key={href.lang}
          />
        ))}
      {config.customMetaTags &&
        config.customMetaTags.map((tag) => (
          <meta name={tag.name} content={tag.content} key={tag.name} />
        ))}
    </Helmet>
  );
};

export default Seo;
