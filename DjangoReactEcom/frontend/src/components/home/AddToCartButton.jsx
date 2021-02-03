import {Link} from "react-router-dom";

const AddToCartButton = (productId) => {
    return (
        <Link to={{
            pathname: '/checkout',
            state: {
                productId,
            },
        }}>
            <button className="btn btn-primary my-3">Přidat do košíku</button>
        </Link>
    )
}

export default AddToCartButton;

