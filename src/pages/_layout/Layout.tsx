import { Outlet } from "react-router-dom";
import './ui/Layout.css';
import { useContext, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AppContext from "../../features/_context/AppContext";
import Locale_enUS from "../../shared/L10n/Lokale_en-US";
import Locale_ukUA from "../../shared/L10n/Locale_uk-UA";



export default function Layout() {

    // здесь Layout получает данные из Context: locale, switchLocale
    const {locale, switchLocale}= useContext(AppContext);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    return (
        <>
            <section className="super-banner">
                <img src="/images/super-banner.png" alt="Super-banner"/>
                <div className="super-banner-content"></div>
            </section>

            <header className="site-header">
                <div className="header-top-row">
                    <div className="header-logo-block">
                        <h1 className="PageTitle">{locale.pageTitle}</h1>
                        <img src="/images/euronics-group.jpg" alt="Euronics-group"/>
                </div>

                <nav className="header-top-row">
                    <div className="language-selector">
                        <button className="language-button">
                            <p>{locale.languageButton}</p>
                        </button>
                            <div className="language-menu">
                                <button
                                className={locale === Locale_enUS ? "active" : ""}
                                onClick={() => {
                                    switchLocale(Locale_enUS);
                                }}>
                                    English
                                </button>

                                <button
                                className={locale === Locale_ukUA? "active" : ""}
                                onClick={() => {
                                    switchLocale(Locale_ukUA);
                                }}>
                                     Українська
                                </button>
                            </div>
                    </div>

                    <div className="city-selector">
                        <div className="city-button">
                            <i className="bi bi-geo-alt" style={{ marginLeft: '5px', fontSize: '13px' }}></i>
                            <p className="city" style={{ marginLeft: '5px', fontSize: '13px', marginBottom: '3px' }}>
                            {locale.selectCity || "м. Київ"}</p>
                            <i className="bi bi-chevron-down" style={{ marginBottom: '0px', marginLeft: '5px', fontSize: '13px'}}></i>
                        </div>
                        <div className="window-city">
                            <h1 style={{color: ' rgb(99, 99, 99)'}}>{locale.windowCity}</h1>
                            <h1 style={{paddingTop: '10px', fontWeight: 'bold', fontSize: '30px'}}>{locale.kyivCity}</h1>
                            <div className="window-city-buttons">
                                <button style={{backgroundColor: 'rgb(130, 93, 199)', color: "white", fontWeight: 'bold', fontSize: '16px'}}>{locale.changeCity}</button>
                                <button style={{backgroundColor: 'rgb(232, 93, 42)', color: "white", fontWeight: 'bold', fontSize: '16px'}}>{locale.confirmCity}</button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="navigation-buttons">
                        <div className="promotions-link">{locale.allPromotions}</div>
                        <button className="sale-button-header">{locale.saleButtonHeader}</button>
                        <div className="navigation-buttons2">
                            <div>{locale.tradeIn}</div>
                            <div>{locale.storesHeader}</div>
                            <div className="with-chevron">
                                {locale.toCustomers}
                                <i className="bi bi-chevron-down"  style={{ fontSize: '9px', fontWeight: 'bold'}}></i>
                            </div>
                        </div>
                        <div className="navigation-buttons3">
                            <div className="icon-btnHelp">
                                <i className="bi bi-question-circle" style={{fontSize: '16px', color: 'rgb(130, 93, 199)'}}></i>
                                <button>{locale.btnHelp}</button>
                            </div>
                            <div className="icon-btnSignIn">
                                <i className="bi bi-person-circle" style={{fontSize: '16px', color: 'rgb(130, 93, 199)'}}></i>
                                <button className="btnSignIn">{locale.signIn}</button>
                            </div>
                            
                        </div>
                        
                    </div>
                </nav>
                </div>
            </header>

            <div className="main-row">
                <button className="btn-catalog">
                <i className="bi bi-grid-3x3-gap-fill" style={{fontSize: '13px'}}></i>
                {locale.btnCatalog}
                </button>
                
                <div className="search-box">
                    <input type="text" className="main-input"></input> 
                    <button className="search-btn">
                    <i className="bi bi-search" style={{color: 'white', fontSize: '15px'}}></i>
                    </button>
                </div> 

                <div className="main-row-buttons">

                    <div className="_like">
                        <button className="btn-liked">
                            <i className="bi bi-heart icon-empty" style={{fontSize: '22px'}}></i>
                            <i className="bi bi-heart-fill icon-filled" style={{ fontSize: '22px' }}></i>
                        </button>
                        <div>{locale.selected}</div>
                    </div>

                    <div className="_scales">
                        <button className="btn-scales">
                            <FontAwesomeIcon style={{fontSize: '22px'}} icon={faBalanceScale} />
                        </button>
                        <div>{locale.scales}</div>
                    </div>

                    <div className="_download-app">
                        <button className="btn-download-app">
                            <i className="bi bi-qr-code" style={{color: 'rgb(130, 93, 199)', fontSize: '20px'}}></i>
                        </button>
                        <div className="app-text">{locale.downloadApp}</div>

                        <div className="qr-dropdown-window">
                            <div className="qr-window-content">
                                <img src="/images/qr-code.png" alt="QR Code" className="qr-image" />

                                <div className="qr-text-block">
                                    <h3 style={{fontSize: '18px'}}>{locale.downloadAppTitle}</h3>
                                    <p style={{fontSize: '13px', color: 'rgb( 105, 104, 102)', paddingTop: '10px'}}>{locale.scanQrText}</p>
                                    <div className="store-buttons">
                                        <img src="/images/app-store.png" alt="App Store" className="btn-app-store"/>
                                        <img src="/images/google-play.png" alt="Google Play" className="btn-google-play" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>          

                    
                    
            </div>

            

            <main>
                <Outlet />
            </main>

            <footer>
                {/* взять из текущей локали(Locale_ukUA или Locale_enUS)  значение layoutFooterCopyright*/}
                {/* если locale = Locale_ukUA -- украинский перевод , если locale = Locale_enUS -- англ*/}

                &copy; {locale?.layoutFooterCopyright || "Euronics Group"} 

                {/* при нажатии на кнопку, вызывается switchLocale(Locale_enUS), а  */}
                {/*   switchLocale: setLocale из App.tsx, поэтому происходит setLocale(Locale_enUS) */}
               
                
            </footer>
        </>
    );
}