import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/_layout/Layout";
import Auth from "../../pages/auth/Auth";
import Cart from "../../pages/cart/Cart";
import Catalog from "../../pages/catalog/Catalog";
import Category from "../../pages/category/Category";
import Checkout from "../../pages/checkout/Checkout";
import Compare from "../../pages/compare/Compare";
import Favorites from "../../pages/favorites/Favorites";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import NotFound from "../../pages/not_found/NotFound";
import Product from "../../pages/product/Product";
import Profile from "../../pages/profile/Profile";
import Search from "../../pages/search/Search";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="auth" element={<Auth />} />
                 <Route path="cart" element={<Cart />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="category" element={<Category />} />
                <Route path="category/:slug" element={<Category />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="compare" element={<Compare />} />
                <Route path="search" element={<Search />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="home" element={<Home />} />
               <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>;
}