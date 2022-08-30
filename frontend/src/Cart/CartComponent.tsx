import { observer } from "mobx-react-lite";
import { cart } from "../App";

type Props = {
    children?: JSX.Element[];
};

const CartComponent = observer((props: Props): JSX.Element => {
    return (
        <div>
            <div className="fs-2 text-center mb-4">Your cart</div>
            {props.children?.length ? (
                <div>
                    {props.children}
                    <div className="fs-4 text-end mb-3">
                        <b>Total sum: </b>
                        {cart.totalSum} UAH
                    </div>
                </div>
            ) : (
                <div className="fs-1 text-center">Cart is empty!</div>
            )}
        </div>
    );
});

export default CartComponent;
