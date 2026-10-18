import { useContext } from 'react';
import './ui/Home.css';
import AppContext from '../../features/_context/AppContext';

export default function Home() {
    // Home тоже получает текущий locale
    const {locale}= useContext(AppContext)
     return (

         <div className="home-container">
                <aside className="sidebar">
                    <h1>{locale?.warmerTogether}</h1>
                    <h1>{locale?.powerSources}</h1>
                    <h1>{locale?.smartphones}</h1>
                    <h1>{locale?.kitchenAppliances}</h1>
                    <h1>{locale?.homeAppliances}</h1>
                    <h1>{locale?.beautyAndHealth}</h1>
                    <h1>{locale?.laptopsPCsTablets}</h1>
                    <h1>{locale?.televisionsAndProjectors}</h1>
                    <h1>{locale?.forGamers}</h1>
                    <h1>{locale?.smartGadgets}</h1>
                    <h1>{locale?.audioPhotosVideo}</h1>
                    <h1>{locale?.homeGardenPetSupplies}</h1>
                    <h1>{locale?.dishes}</h1>
                    <h1>{locale?.sportAndTourism}</h1>
                    <h1>{locale?.toolsAndAutomotiveProducts}</h1>
                    <h1>{locale?.productsForChildren}</h1>
                    <h1>{locale?.services}</h1>
                    <h1>{locale?.allCategories}</h1>
                </aside>

                <main>
                    {/* https://getbootstrap.com/docs/5.3/components/carousel/ */}
                   <div id="mainBannerCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#mainBannerCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#mainBannerCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#mainBannerCarousel" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <img src="/images/banner1.jpg" className="d-block w-100 carousel-img" alt="Баннер 1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/banner2.jpg" className="d-block w-100 carousel-img" alt="Баннер 2" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/banner3.jpg" className="d-block w-100 carousel-img" alt="Баннер 3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/banner4.jpg" className="d-block w-100 carousel-img" alt="Баннер 4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#mainBannerCarousel" data-bs-slide="prev">
                        <span className="custom-arrow" aria-hidden="true"><i className="bi bi-chevron-left"></i></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainBannerCarousel" data-bs-slide="next">
                        <span className="custom-arrow" aria-hidden="true"><i className="bi bi-chevron-right"></i></span>
                    </button>
                </div>

             
            
                </main>
            </div>
        

        
    );
}