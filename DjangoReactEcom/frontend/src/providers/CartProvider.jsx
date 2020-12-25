import React from 'react';
import axios from 'axios';

const api = 'http://localhost:8000';
const website = 'teethycz';
const key = 'asdasd2132312';
let cart = JSON.parse(localStorage.getItem(website)) === false ?
    {
        "customer": {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phone": "",
            "address": "",
            "city": "",
            "postcode": ""
        },
        "items": [],
        "shipping": "1",
        "payment": "1"
    } :
    JSON.parse(localStorage.getItem(website));


export async function handleAddToCart({productId}) {
    const response = await axios
        .get(`${api}/product/${productId}/detail`)
        .then(response => cart.items.push({
            'product': response.data,
            'quantity': 1
        }))
        .catch((error) => console.log(error));

    updateCart();
}

const updateCart = () => {
    localStorage.setItem(website, JSON.stringify(cart))
}


// async function loadCart() {
//     const response = await axios
//         .get(`${api}/cart/1/detail`)
//         .then(response => cart = response.data)
//         .catch((error => console.log(error)));
// }

