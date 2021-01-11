import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import contactFR from "./translations/contactFR.json"
import contactEN from "./translations/contactEN.json"

const ressources = {
  en: {
    contact: contactEN
  },
  fr: {
    contact: contactFR
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ressources,
    lng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;