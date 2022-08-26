import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { cart } from "../App";
import "../App.css";

type Props = {
    id: string;
    title: string;
    quantity: number;
    price: number;
    imgUrl: string;
};

const CatalogItemComponent = observer((props: Props): JSX.Element => {
    return (
        <div className="col-4">
            <div className="card">
                <Link
                    to={`/edit-product/${props.id}`}
                    className="del_underline d-inline"
                >
                    <div className="text-end">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2356/2356780.png"
                            alt="edit"
                            width="35"
                        />
                    </div>
                </Link>
                <Link to={`/catalog/${props.id}`} className="del_underline">
                    <div className="text-center">
                        <img
                            src={props.imgUrl}
                            style={{ height: "200px" }}
                            alt="product"
                        />
                    </div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.price} UAH</p>
                    <div
                        className="btn btn-primary"
                        onClick={() => {
                            cart.addToCart(
                                props.id,
                                props.title,
                                props.imgUrl,
                                props.price
                            );
                        }}
                    >
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CatalogItemComponent;
