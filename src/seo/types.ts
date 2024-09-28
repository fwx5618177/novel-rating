export interface SeoProps {
  config: SeoConfig;
  lang: string;
  pageKey: string;
}

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  hreflang?: { lang: string; url: string }[]; // 新增 hreflang 配置
  customMetaTags?: { name: string; content: string }[];
}

export type Lang = 'en' | 'zh';
export type PageKey = 'common' | 'home' | 'about';
