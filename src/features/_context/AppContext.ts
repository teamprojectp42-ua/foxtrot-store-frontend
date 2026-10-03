import { createContext } from "react";
import type IAppContext from "./model/IAppContext";
import Locale_ukUA from "../../shared/L10n/Locale_uk-UA";
import Locale_enUS from "../../shared/L10n/Lokale_en-US";


// без использования Context нам пришлось бы передавать locale через компоненты: 
// App -> Router -> Layout -> Home (как созданы папки по порядку в проекте)
// пришлось бы постоянно прописывать :
// <Router locale={locale} />
// <Layout locale={locale} />
// <Home locale={locale} />
// Это называется prop drilling


// создание самого Context
const AppContext = createContext<IAppContext>({
    locale:Locale_enUS,  // англ - по умолч.
    // для начала с англ локалью 
    switchLocale(_) {
        throw "switchLocale: Not implemented";
    }
})

export default AppContext