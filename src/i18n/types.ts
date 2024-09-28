export interface TranslationResource {
  [key: string]: string;
}

export interface NamespaceResources {
  [namespace: string]: TranslationResource;
}

export interface Resources {
  [language: string]: NamespaceResources;
}
