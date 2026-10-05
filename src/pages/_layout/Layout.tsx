import { Outlet } from "react-router-dom";
import './ui/Layout.css';
import { useContext } from "react";
import AppContext from "../../features/_context/AppContext";
import Locale_enUS from "../../shared/L10n/Lokale_en-US";
import Locale_ukUA from "../../shared/L10n/Locale_uk-UA";


export default function Layout() {

    // здесь Layout получает данные из Context: locale, switchLocale
    const {locale, switchLocale}= useContext(AppContext);
    return (
        <>
            <section className="supper-banner">
                <img src="/img/supper-banner.png" alt="Supper-banner"/>

                <div className="supper-banner-content">
                    
                </div>
            </section>

            <header>
                
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {/* взять из текущей локали(Locale_ukUA или Locale_enUS)  значение layoutFooterCopyright*/}
                {/* если locale = Locale_ukUA -- украинский перевод , если locale = Locale_enUS -- англ*/}

                &copy; {locale.layoutFooterCopyright} 

                {/* при нажатии на кнопку, вызывается switchLocale(Locale_enUS), а  
                    switchLocale: setLocale из App.tsx, поэтому происходит setLocale(Locale_enUS) */}

                <button onClick={() => switchLocale(Locale_enUS)}>en_US</button>
                <button onClick={() => switchLocale(Locale_ukUA)}>uk_UA</button>
            </footer>
        </>
    );
}