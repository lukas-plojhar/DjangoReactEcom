import React from 'react';

const CartForm = ({items, handleStateChange}) => {

    const handleClick = (e) => {
        const action = e.target.name;
        if (action === "remove") {
            items.splice(e.target.value,1);
            return handleStateChange(items);
        }
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Název</th>
                <th scope="col">Množství</th>
                <th scope="col">Cena</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                items !== undefined && items.length > 0 && items.map((item, index) => (
                    <tr key={index}>
                        <td><img src={item.product.featuredImage} className={'img-fluid'} alt={""}/></td>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                            {item.product.regularPrice}<br/>
                            {item.product.salePrice}
                        </td>
                        <td>
                            <button className="btn btn-secondary btn-outline" name="remove" value={index}
                                    onClick={e => handleClick(e)}>X
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export default CartForm;