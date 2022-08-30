import { Link } from "react-router-dom";
import "../App.css";

const HeaderComponent = (): JSX.Element => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/catalog" className="del_underline">
                    <div className="navbar-brand">TeapotShop</div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link to="/catalog" className="del_underline">
                            <div className="nav-link" aria-current="page">
                                Catalog
                            </div>
                        </Link>
                        <Link to="/add-product" className="del_underline">
                            <div className="nav-link" aria-current="page">
                                Add product
                            </div>
                        </Link>
                        <Link to="/cart" className="del_underline">
                            <div className="nav-link">Cart</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;
