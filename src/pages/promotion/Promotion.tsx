import './ui/Promotion.css'
import { useParams } from "react-router-dom";
const products = [
    {
        id: 1,
        name: "Смартфон Apple iPhone",
        image: "/images/banner3.jpg",
        price: 39999,
        oldPrice: 44999,
    },
    {
        id: 2,
        name: "Ноутбук для роботи та навчання",
        image: "/images/banner7.jpg",
        price: 28999,
        oldPrice: 32999,
    },
    {
        id: 3,
        name: "Смартфон Samsung Galaxy",
        image: "/images/banner2.jpg",
        price: 24999,
        oldPrice: 27999,
    },
    {
        id: 4,
        name: "Техніка для дому",
        image: "/images/banner5.jpg",
        price: 5999,
        oldPrice: 7499,
    },
];

export default function Promotion() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="promotion-page">
            <div className="promotion-breadcrumbs">
                Головна / Акції
            </div>

            <section className="promotion-header">
                <h1>Акції та спеціальні пропозиції</h1>

                <div className="promotion-banner">
                    <img
                        src="/images/banner3.jpg"
                        alt="Банер акції"
                    />

                    <div className="promotion-banner-content">
                        <span>Спеціальна пропозиція</span>
                        <h2>Вигідні ціни на техніку</h2>
                        <p>Обирай товари за спеціальними цінами</p>
                    </div>
                </div>

                <p className="promotion-description">
                    Переглядай актуальні пропозиції та обирай техніку
                    для дому, роботи й відпочинку.
                </p>

                <p className="promotion-slug">
                    Акція: {slug}
                </p>
            </section>

            <section className="promotion-catalog">
                <aside className="promotion-filters">
                    <h3>Фільтри</h3>

                    <div className="filter-group">
                        <h4>Ціна, ₴</h4>
                        <input
                            type="number"
                            placeholder="Від"
                            aria-label="Мінімальна ціна"
                        />
                        <input
                            type="number"
                            placeholder="До"
                            aria-label="Максимальна ціна"
                        />
                    </div>

                    <div className="filter-group">
                        <h4>Бренд</h4>

                        <label>
                            <input type="checkbox" />
                            Apple
                        </label>

                        <label>
                            <input type="checkbox" />
                            Samsung
                        </label>

                        <label>
                            <input type="checkbox" />
                            Інші бренди
                        </label>
                    </div>
                </aside>

                <div className="promotion-products">
                    <div className="promotion-products-header">
                        <h2>Товари акції</h2>
                        <span>{products.length} товарів</span>
                    </div>

                    <div className="promotion-products-grid">
                        {products.map((product) => (
                            <article
                                className="promotion-product-card"
                                key={product.id}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <h3>{product.name}</h3>

                                <div className="product-prices">
                                    <span className="product-old-price">
                                        {product.oldPrice.toLocaleString("uk-UA")} ₴
                                    </span>

                                    <strong>
                                        {product.price.toLocaleString("uk-UA")} ₴
                                    </strong>
                                </div>

                                <button type="button">
                                    Купити
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}