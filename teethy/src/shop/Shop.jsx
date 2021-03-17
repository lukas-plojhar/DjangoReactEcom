import React, {useState, useEffect} from 'react';
import {Footer} from "../common/Footer";
import Stars from "../common/Stars";
import {Link} from "react-router-dom";
import axios from "axios";

const ShopPage = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const data = await axios.get(`${process.env.REACT_APP_URL}/products/`).then(response => response.data);
        setProducts(data);
        setIsLoading(false);
    });

    if (isLoading) return <p> Loading ... </p>
    return <React.Fragment>
        {
            products.map((product, index) => {
                const {id, name, shortDescription, featuredImage, variations} = product;
                return <section className={"py-2 my-2 py-md-2 my-md-2 " + (index % 2 === 1 ? "bg-light" : "")}>
                    <div className="container">
                        <div className="row">

                            <div className={"col-12 col-md-6 text-center text-md-left align-self-center " + (index % 2 === 1 ? "order-md-1" : "")}>
                                <h2>{name}</h2>
                                <Stars/>
                                <p>{shortDescription}</p>
                                <div className="d-block mt-2 mb-2 mb-md-3">
                                    <h4>již od {variations[0].salePrice}{process.env.REACT_APP_CURRENCY}</h4>
                                    <Link to={`/produkt/${id}`}>
                                        <button className="btn btn-primary mr-md-1" type="button">přidat do košíku</button>
                                    </Link>
                                    <Link to={`/produkt/${id}`}>
                                        <button className="btn btn-link" type="button">více informací</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <img src={process.env.REACT_APP_URL + featuredImage}/>
                            </div>

                        </div>
                    </div>
                </section>
            })
            }
            <Footer/>
            </React.Fragment>
        }

        export default ShopPage;