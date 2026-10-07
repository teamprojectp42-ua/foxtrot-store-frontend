import { Outlet } from "react-router-dom";
import './ui/Layout.css';
import { useContext, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 

import AppContext from "../../features/_context/AppContext";
import Locale_enUS from "../../shared/L10n/Lokale_en-US";
import Locale_ukUA from "../../shared/L10n/Locale_uk-UA";


export default function Layout() {

    // здесь Layout получает данные из Context: locale, switchLocale
    const {locale, switchLocale}= useContext(AppContext);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    return (
        <>
            <section className="supper-banner">
                <img src="/images/supper-banner.png" alt="Supper-banner"/>
                <div className="supper-banner-content"></div>
            </section>

            <header className="site-header">
                <div className="header-logo-block">
                    <h1 className="PageTitle">{locale.pageTitle}</h1>
                    <img src="/images/euronics-group.jpg" alt="Euronics-group"/>
                </div>

                <nav className="header-navigation">
                    <div className="language-selector">
                        <button 
                        className="language-button"
                        onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
                            <p>{locale.languageButton}</p>
                        </button>
                        {isLanguageOpen && (
                            <div className="language-menu">
                                <button
                                onClick={() => {
                                    switchLocale(Locale_enUS);
                                    setIsLanguageOpen(false);
                                }}>
                                    English
                                </button>

                                <button
                                onClick={() => {
                                    switchLocale(Locale_ukUA);
                                    setIsLanguageOpen(false);
                                }}>
                                     Українська
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <i className="bi bi-geo-alt" style={{ color: 'rgb(100, 99, 97)', marginLeft: '10px', fontSize: '12px' }}></i>
                        <p style={{ margin: 0, fontSize: '15px', color: 'rgb(130, 129, 127)', marginBottom: '5px' }}>
                            {locale.selectCity || "м. Київ"}</p>
                    </div>
                </nav>
                
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
               
                
            </footer>
        </>
    );
}