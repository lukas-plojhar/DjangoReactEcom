import React from 'react';

const CartForm = ({products, handleClick}) => {
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
                products !== undefined && products.length > 0 && products.map((item, index) => (
                    <tr key={index}>
                        <td><img src={item.product.featuredImage} className={'img-fluid'}/></td>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                            {item.product.regularPrice}<br/>
                            {item.product.salePrice}
                        </td>
                        <td>
                            <button className="btn btn-secondary btn-outline" value={index}
                                    onClick={handleClick}>X
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