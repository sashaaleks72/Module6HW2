import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartComponent from "./Cart/CartComponent";
import CartItemComponent from "./Cart/CartItemComponent";
import CatalogComponent from "./Catalog/CatalogComponent";
import CatalogItemComponent from "./Catalog/CatalogItemComponent";
import ProductAddComponent from "./Catalog/ProductAddComponent";
import ProductChangeComponent from "./Catalog/ProductChangeComponent";
import ProductComponent from "./Catalog/ProductComponent";
import ProductDto from "./dtos/ProductDto";
import HeaderComponent from "./Header/HeaderComponent";
import { getProducts } from "./http/fetches";
import { Cart } from "./store/Cart.store";
import { Catalog } from "./store/Catalog.store";

export const cart = new Cart();
export const catalog = new Catalog();

const App = observer(() => {
    useEffect(() => {
        const init = async () => {
            const products: ProductDto[] = await getProducts();

            catalog.productList = products;
        };

        init();
    }, []);

    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route
                        path="/catalog"
                        element={
                            <CatalogComponent>
                                {catalog.productList.map((item, index) => (
                                    <CatalogItemComponent
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        quantity={item.quantity}
                                        imgUrl={item.imgUrl}
                                    />
                                ))}
                            </CatalogComponent>
                        }
                    />
                    <Route path="/catalog/:id" element={<ProductComponent />} />
                    <Route
                        path="/edit-product/:id"
                        element={<ProductChangeComponent />}
                    />
                    <Route
                        path="/add-product"
                        element={<ProductAddComponent />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartComponent>
                                {cart.cartItems.map((item, index) => (
                                    <CartItemComponent
                                        key={index}
                                        id={item.id}
                                        price={item.price}
                                        title={item.title}
                                        imgUrl={item.imgUrl}
                                        quantity={item.quantity}
                                    />
                                ))}
                            </CartComponent>
                        }
                    />
                    <Route
                        path="*"
                        element={<Navigate replace to="/catalog" />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
});

export default App;
