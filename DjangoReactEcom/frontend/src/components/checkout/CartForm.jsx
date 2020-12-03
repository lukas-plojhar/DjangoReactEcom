import React from 'react';

const CartForm = ({products, handleClick}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nazev</th>
                <th scope="col">Mnozstvi</th>
                <th scope="col">Cena</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product) => (
                    <tr>
                        <th scope="row"><img src={product.product_id.mainImage} alt=""/></th>
                        <td>{product.product_id.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.product_id.sale_price}</td>
                        <td>
                            <button className="btn btn-secondary btn-outline" value={product.product_id.name} onClick={handleClick}>remove</button></td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    )
}
export default CartForm;