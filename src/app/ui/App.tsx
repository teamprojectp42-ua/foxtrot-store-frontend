// import '../../App.css';
import { useState } from "react";
import AppContext from "../../features/_context/AppContext";
import Locale_ukUA from "../../shared/L10n/Locale_uk-UA";
import Locale_enUS from "../../shared/L10n/Lokale_en-US";
import Router from "./Router";

export default function App() {
  //   locale -  текущее значение
  //   setLocale - функция для изменения значения.
  //                          По умолчанию - англ. 
  const [locale, setLocale] = useState(Locale_enUS);

  return (
    <AppContext.Provider value={{
      locale: locale,
      // передача функции setLocale под другим именем
      switchLocale: setLocale,
    }}>
      
    <Router/>

</AppContext.Provider>
  );
}


