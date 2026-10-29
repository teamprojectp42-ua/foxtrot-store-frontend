import { useContext } from 'react';
import './ui/Home.css';
import AppContext from '../../features/_context/AppContext';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  // Home тоже получает текущий locale
  const { locale } = useContext(AppContext)
  // Массив баннеров главной страницы.
  // image — путь к изображению баннера.
  // slug — уникальный адрес акции, по которому откроется её страница.
  const banners = [
    { image: '/images/banner1.jpg', slug: 'warmer-together' },
    { image: '/images/banner2.jpg', slug: 'power-sources' },
    { image: '/images/banner3.jpg', slug: 'smartphones' },
    { image: '/images/banner4.jpg', slug: 'kitchen-appliances' },
    { image: '/images/banner5.jpg', slug: 'home-appliances' },
    { image: '/images/banner6.jpg', slug: 'beauty-and-health' },
    { image: '/images/banner7.jpg', slug: 'laptops' },
    { image: '/images/banner9.jpg', slug: 'special-offer' },
  ];
  return (
    <div className="home-container">
      <aside className="sidebar">

        <div>
          <i className='bi bi-lightning-fill'></i>
          <h1>{locale?.warmerTogether}</h1>
        </div>
        <div>
          <i className='bi bi-battery-charging'></i>
          <h1>{locale?.powerSources}</h1>
        </div>
        <div>
          <i className='bi bi-phone'></i>
          <h1>{locale?.smartphones}</h1>
        </div>
        <div>
          <i className="bi bi-plug"></i>
          <h1>{locale?.kitchenAppliances}</h1>
        </div>
        <div>
          <i className='bi bi-house-door'></i>
          <h1>{locale?.homeAppliances}</h1>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <h1>{locale?.beautyAndHealth}</h1>
        </div>
        <div>
          <i className='bi bi-laptop'></i>
          <h1>{locale?.laptopsPCsTablets}</h1>
        </div>
        <div>
          <i className='bi bi-display'></i>
          <h1>{locale?.televisionsAndProjectors}</h1>
        </div>
        <div>
          <i className='bi bi-controller'></i>
          <h1>{locale?.forGamers}</h1>
        </div>
        <div>
          <i className='bi bi-smartwatch'></i>
          <h1>{locale?.smartGadgets}</h1>
        </div>
        <div>
          <i className='bi bi-images'></i>
          <h1>{locale?.audioPhotosVideo}</h1>
        </div>
        <div>
          <i className='bi bi-tree'></i>
          <h1>{locale?.homeGardenPetSupplies}</h1>
        </div>
        <div>
          <i className='bi bi-fork-knife'></i>
          <h1>{locale?.dishes}</h1>
        </div>
        <div>
          <i className='bi bi-backpack'></i>
          <h1>{locale?.sportAndTourism}</h1>
        </div>
        <div>
          <i className='bi bi-tools'></i>
          <h1>{locale?.toolsAndAutomotiveProducts}</h1>
        </div>
        <div>
          <i className='bi bi-balloon'></i>
          <h1>{locale?.productsForChildren}</h1>
        </div>
        <div>
          <i className='bi bi-gear'></i>
          <h1>{locale?.services}</h1>
        </div>
        <div>
          <i className='bi bi-grid-3x3-gap'></i>
          <h1>{locale?.allCategories}</h1>
        </div>
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
            {/* Перебираем массив banners и создаём слайд для каждого баннера. */}
            {banners.map((banner) => (
              // Каждый слайд должен иметь уникальный key для React.
              <SwiperSlide key={banner.slug}>
                <Link to={`/promotions/${banner.slug}`}>
                  {/* Отображаем изображение текущего баннера.
                src — путь к изображению.
                alt — текстовое описание изображения. */}
                  <img
                    src={banner.image}
                    alt={banner.slug}
                  />
                </Link>
              </SwiperSlide>
            ))}
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