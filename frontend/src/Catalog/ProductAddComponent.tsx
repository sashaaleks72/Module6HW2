import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { catalog } from "../App";
import ProductDto from "../dtos/ProductDto";
import { addNewProduct } from "../http/fetches";

const ProductAddComponent = observer((): JSX.Element => {
    const [product, setProduct] = useState<ProductDto>();
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            if (product != undefined) {
                await addNewProduct(product);
                catalog.addProduct(product);
                navigate("/catalog");
            }
        };

        init();
    }, [product]);

    return (
        <div>
            <div className="fs-2 text-center mb-2">Adding product</div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    const target = e.target as typeof e.target & {
                        title: { value: string };
                        price: { value: number };
                        quantity: { value: number };
                        manufacturerCountry: { value: string };
                        warrantyInMonths: { value: number };
                        capacity: { value: number };
                        description: { value: string };
                        imgUrl: { value: string };
                    };

                    const product: ProductDto = {
                        id: "",
                        title: target.title.value,
                        price: target.price.value,
                        quantity: target.quantity.value,
                        manufacturerCountry: target.manufacturerCountry.value,
                        warrantyInMonths: target.warrantyInMonths.value,
                        capacity: target.capacity.value,
                        description: target.description.value,
                        imgUrl: target.imgUrl.value,
                    };

                    setProduct(product);
                }}
            >
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">
                        Manufacturer country
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="manufacturerCountry"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Warranty</label>
                    <input
                        type="number"
                        className="form-control"
                        name="warrantyInMonths"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Capacity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="capacity"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        required
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Img url</label>
                    <input
                        type="text"
                        className="form-control"
                        name="imgUrl"
                        required
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </form>
        </div>
    );
});

export default ProductAddComponent;
