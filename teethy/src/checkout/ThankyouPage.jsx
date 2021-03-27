import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


import {SummaryRow} from "./CheckoutPage";


const ThankyouPage = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState({});

    useEffect(async () => {
        const result = await axios(`${process.env.REACT_APP_URL}/orders/${params['id']}`);
        setOrder(result.data);
        setIsLoading(false);
    }, []);


    if (isLoading) return <p>loading...</p>;

    // Data preparation
    const {id, cart, customer, created} = order;
    const {items, payment, shipping, total} = cart;

    return <section>
        <div className="container">
            {/*Thank you*/}
            <div className="row my-2 py-2">
                <div className="col-md-12 text-center">
                    <h3>Děkujeme.</h3>
                    <h6>Vaše objednávka byla přijatá pod číslem {id}</h6>
                    <p>Prosíme zkontorolujte si složku hromadné a nevyžádané pošty a spam v
                        případě, že Vám nedorazí potvrzení objednávky.</p>
                </div>
            </div>

            {/*Order recap*/}
            <div className="row">
                <div className="col-12 col-md-6 px-md-3 my-2 py-2">

                    <div className="block mb-2 pb-2">
                        <h6 className="text-center">Shrnutí</h6>
                        <SummaryRow left={`Doprava`} right={shipping}/>
                        <SummaryRow left={`Platba`} right={payment}/>
                        <SummaryRow left={`Telefon`} right={customer.phone} boldText={true}/>
                        <SummaryRow left={`Email`} right={customer.email} boldText={true}/>
                    </div>


                    <div className="block">
                        <h6 className="text-center">Doručovací adresa</h6>
                        <SummaryRow left={`Adresa`} right={customer.address}/>
                        <SummaryRow left={`Mesto`} right={customer.city}/>
                        <SummaryRow left={`PSC`} right={customer.postcode}/>
                    </div>

                </div>
                <div className="col-12 col-md-6 px-md-3 my-2 py-2">
                    <h6 className="text-center">Účtenka</h6>
                    {/*Items*/}
                    {items.map(item => <SummaryRow
                        left={`${item.product.name} (${item.product.variations[0].name})${item.quantity > 1 ? ' x ' + item.quantity : ''}`}
                        right={`${item.product.variations[0].salePrice * item.quantity}${process.env.REACT_APP_CURRENCY}`}
                    />)}

                    {/*Shipping and payment*/}
                    <SummaryRow left={`Doprava`} right={`+ 69${process.env.REACT_APP_CURRENCY}`}/>
                    {payment == 'Dobírka'
                        ? <SummaryRow left={payment} right={`+ 49${process.env.REACT_APP_CURRENCY}`}/>
                        : ''
                    }


                    {/*Total*/}
                    <hr/>
                    <SummaryRow left={`Celkem`} right={`${total}${process.env.REACT_APP_CURRENCY}`} boldText={true}/>
                </div>

                <div className="col-12 my-2 py-2 text-center">
                    <Link to={'/'}>
                        <button className="btn btn-primary d-inline-block mb-2 mb-md-0 mr-md-2">Zpět na úvod</button>
                    </Link>
                    <Link to={'/obchod'}>
                        <button className="btn btn-primary d-inline-block ml-md-2">Katalog produktů</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
}
export default ThankyouPage;