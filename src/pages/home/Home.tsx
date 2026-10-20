import { useContext } from 'react';
import './ui/Home.css';
import AppContext from '../../features/_context/AppContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
                    
                  <div className="swiper-container-wrapper">
                    <Swiper
                    // Модули - доп.инструменты слайдера.
                    // Autoplay - встроенное перелистывание, независимо от пользователя
                    // Navigation - стрелки навигации вперед/назад
                       modules={[Navigation, Autoplay]}
                       spaceBetween={10} // Расстояние между баннерами
                       slidesPerView={4.5} // 4 целых баннера, 5-й наполовину
                       navigation={true} // Включает стрелочки влево/вправо
                       autoplay={{ delay: 4000 }} // время задержки в миллисек., т.е баннеры прокручиваются автоматич. каждые 4 сек
                       breakpoints={{
                         // Адаптивность под разные экраны:
                         320: { slidesPerView: 1.2 },  // На мобилках видно 1 целых и кусочек второго
                         768: { slidesPerView: 2.5 },  // На планшетах 2 целых и кусочек
                         1200: { slidesPerView: 4.5 }, // На десктопе 4 целых и 5-й наполовину
                    }}
                    >

                        <SwiperSlide><img src="/images/banner1.jpg" alt="1" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner2.jpg" alt="2" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner3.jpg" alt="3" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner4.jpg" alt="4" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner5.jpg" alt="5" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner6.jpg" alt="6" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner7.jpg" alt="7" /></SwiperSlide>
                        <SwiperSlide><img src="/images/banner9.jpg" alt="9" /></SwiperSlide>
                    </Swiper>
                  </div>


                  <div className='recommended-categories'>
                    <h2>{locale.recommendedCategories}</h2>
                     <div className="categories-grid">

                        {/* Смартфоны */}
                        <a href="/smartphones" className="category-card">
                           <div className="image-wrapper">
                             <img src="/images/smartphone.png" alt={locale?.smartphones} />
                           </div>
                           <p className="category-name">{locale?.smartphones}</p>
                        </a>

                        {/* Стиральные машины */}
                        <a href="/washing-machines" className="category-card">
                           <div className="image-wrapper">
                             <img src="/images/washer.png" alt={locale?.homeAppliances} />
                           </div>
                           <p className="category-name">{locale?.homeAppliances}</p>
                        </a>

                        {/* Конвекторы */}
                        <a href="/heaters" className="category-card">
                            <div className="image-wrapper">
                              <img src="/images/heater.png" alt={locale?.warmerTogether} />
                            </div>
                            <p className="category-name">{locale?.warmerTogether}</p>
                        </a>

                        {/* Телевизоры */}
                        <a href="/televisions" className="category-card">
                             <div className="image-wrapper">
                               <img src="/images/tv.png" alt={locale?.televisionsAndProjectors} />
                             </div>
                             <p className="category-name">{locale?.televisionsAndProjectors}</p>
                        </a>

                        {/* Ноутбуки */}
                        <a href="/laptops" className="category-card">
                          <div className="image-wrapper">
                            <img src="/images/laptop.png" alt={locale?.laptopsPCsTablets} />
                          </div>
                          <p className="category-name">{locale?.laptopsPCsTablets}</p>
                        </a>

                        {/* Холодильники */}
                        <a href="/refrigerators" className="category-card">
                          <div className="image-wrapper">
                            <img src="/images/fridge.png" alt={locale?.homeAppliances} />
                          </div>
                          <p className="category-name">{locale?.homeAppliances}</p>
                        </a>

                        {/* Кофемашины */}
                        <a href="/coffee-machines" className="category-card">
                          <div className="image-wrapper">
                            <img src="/images/coffee-machine.png" alt={locale?.kitchenAppliances} />
                          </div>
                          <p className="category-name">{locale?.kitchenAppliances}</p>
                        </a>

                        {/* Наушники */}
                        <a href="/headphones" className="category-card">
                          <div className="image-wrapper">
                            <img src="/images/headphones.png" alt={locale?.audioPhotosVideo} />
                          </div>
                          <p className="category-name">{locale?.audioPhotosVideo}</p>
                        </a>
                     </div>
                  </div>

                  

            

                  
                </main>
            </div>
                
    );
}