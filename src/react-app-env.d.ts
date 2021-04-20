/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_MARVEL_API: string;
    REACT_APP_MARVEL_PUBLIC_KEY: string;
    REACT_APP_MARVEL_PRIVATE_KEY: string;
  }
}
