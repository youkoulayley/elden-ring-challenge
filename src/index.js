import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppComponent from "./components/app/app.component"
import reportWebVitals from "./reportWebVitals"
import class_en from "./translations/en/class.json"
import common_en from "./translations/en/common.json"
import constraint_en from "./translations/en/constraint.json"
import crystal_tear_en from "./translations/en/crystal-tear.json"
import difficulty_en from "./translations/en/difficulty.json"
import error_en from "./translations/en/error.json"
import keepsake_en from "./translations/en/keepsake.json"
import talisman_en from "./translations/en/talisman.json"
import weapon_type_en from "./translations/en/weapon-type.json"
import class_fr from "./translations/fr/class.json"
import common_fr from "./translations/fr/common.json"
import constraint_fr from "./translations/fr/constraint.json"
import crystal_tear_fr from "./translations/fr/crystal-tear.json"
import difficulty_fr from "./translations/fr/difficulty.json"
import error_fr from "./translations/fr/error.json"
import keepsake_fr from "./translations/fr/keepsake.json"
import talisman_fr from "./translations/fr/talisman.json"
import weapon_type_fr from "./translations/fr/weapon-type.json"

i18next.use(LanguageDetector).init({
    interpolation: {escapeValue: false}, // React already does escaping
    detection: {
        order: [ "path", "navigator" ],
    },
    fallbackLng: "en",
    resources: {
        en: {
            class: class_en,
            common: common_en,
            constraint: constraint_en,
            crystalTear: crystal_tear_en,
            talisman: talisman_en,
            difficulty: difficulty_en,
            error: error_en,
            keepsake: keepsake_en,
            weaponType: weapon_type_en,
        },
        fr: {
            class: class_fr,
            common: common_fr,
            crystalTear: crystal_tear_fr,
            talisman: talisman_fr,
            constraint: constraint_fr,
            difficulty: difficulty_fr,
            error: error_fr,
            keepsake: keepsake_fr,
            weaponType: weapon_type_fr,
        },
    },
    debug: false,
})

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppComponent />} />
                    <Route path=":id" element={<AppComponent />} />
                </Routes>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
