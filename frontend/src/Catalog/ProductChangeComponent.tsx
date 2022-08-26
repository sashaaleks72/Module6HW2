import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catalog } from "../App";
import ProductDto from "../dtos/ProductDto";
import { changeProduct, getProductById } from "../http/fetches";

const ProductChangeComponent = observer((): JSX.Element => {
    const [product, setProduct] = useState<ProductDto>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const init = async () => {
            const product: ProductDto = await getProductById(id);
            setProduct(product);
        };

        init();
    }, []);

    return (
        <div>
            <div className="fs-2 text-center mb-2">Changing product</div>
            <form
                onSubmit={async (e) => {
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
                        id: id ?? "",
                        title: target.title.value,
                        price: target.price.value,
                        quantity: target.quantity.value,
                        manufacturerCountry: target.manufacturerCountry.value,
                        warrantyInMonths: target.warrantyInMonths.value,
                        capacity: target.capacity.value,
                        description: target.description.value,
                        imgUrl: target.imgUrl.value,
                    };

                    await changeProduct(id, product);
                    catalog.changeProduct(product);
                    navigate("/catalog");
                }}
            >
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        required
                        defaultValue={product?.title}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        required
                        defaultValue={product?.price}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        required
                        defaultValue={product?.quantity}
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
                        defaultValue={product?.manufacturerCountry}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Warranty</label>
                    <input
                        type="number"
                        className="form-control"
                        name="warrantyInMonths"
                        required
                        defaultValue={product?.warrantyInMonths}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Capacity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="capacity"
                        required
                        defaultValue={product?.capacity}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        required
                        defaultValue={product?.description}
                    />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label className="form-label fs-4">Img url</label>
                    <input
                        type="text"
                        className="form-control"
                        name="imgUrl"
                        required
                        defaultValue={product?.imgUrl}
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

export default ProductChangeComponent;
