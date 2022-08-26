type Props = {
    children?: JSX.Element[];
};

const CatalogComponent = (props: Props): JSX.Element => {
    return (
        <div>
            <div className="fs-2 text-center mb-2">Catalog</div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.children}
            </div>
        </div>
    );
};

export default CatalogComponent;
