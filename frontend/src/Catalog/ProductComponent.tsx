import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cart, catalog } from "../App";
import ProductDto from "../dtos/ProductDto";
import { delProductById, getProductById } from "../http/fetches";

const ProductComponent = observer((): JSX.Element => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductDto>();
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            const recievedProduct: ProductDto = await getProductById(id);
            setProduct(recievedProduct);
        };

        init();
    }, []);

    return (
        <div>
            <div className="fs-2 text-center mb-2">Product description</div>
            <div className="fs-4 mb-2">
                <b>Title: </b>
                {product?.title}
            </div>
            <div className="fs-4 mb-2">
                <b>Price: </b>
                {product?.price}
            </div>
            <div className="fs-4 mb-2">
                <b>Quantity: </b>
                {product?.quantity}
            </div>
            <div className="fs-4 mb-2">
                <b>Manufacturer country: </b>
                {product?.manufacturerCountry}
            </div>
            <div className="fs-4 mb-2">
                <b>Warranty: </b>
                {product?.warrantyInMonths} months
            </div>
            <div className="fs-4 mb-2">
                <b>Capacity: </b>
                {product?.capacity} l
            </div>
            <div className="fs-4 mb-4">
                <b>Description: </b>
                {product?.description}
            </div>
            <div className="text-center mb-4">
                <img src={product?.imgUrl} alt="product" />
            </div>
            <div className="text-center">
                <div
                    className="btn btn-primary"
                    onClick={() => {
                        if (product)
                            cart.addToCart(
                                product.id,
                                product.title,
                                product.imgUrl,
                                product.price
                            );
                    }}
                >
                    Add to cart
                </div>
                <div
                    className="btn btn-danger ms-2"
                    onClick={async () => {
                        if (product) {
                            cart.delFromCart(product.id);
                            await delProductById(id);
                            catalog.delProductById(product.id);

                            navigate("/products");
                        }
                    }}
                >
                    X
                </div>
            </div>
            <Link to="/products">
                <div className="text-end">Go to catalog</div>
            </Link>
        </div>
    );
});

export default ProductComponent;
