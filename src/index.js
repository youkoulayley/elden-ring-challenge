import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import AppComponent from "./components/app.component";
import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },  // React already does escaping
    detection: {
        order: ["path", "navigator"]
    },
    fallbackLng: 'en',
    resources: {
        en: {
            common: common_en
        },
        fr: {
            common: common_fr
        },
    },
    debug: true,
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <AppComponent />
      </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
