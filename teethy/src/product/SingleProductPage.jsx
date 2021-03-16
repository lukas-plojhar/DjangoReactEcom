import React, {useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import ImageGallery from "react-image-gallery";
import {Tabs, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BigFooter} from "../common/Footer";
import axios from "axios";

const SingleProductPage = () => {
    const [product, setProduct] = useState({product: {}});
    const [isLoading, setisLoading] = useState(true);

    // Fetch data
    useEffect(async () => {
        const result = await axios(`${process.env.REACT_APP_URL}/products/6`);
        setProduct(result.data);
        setisLoading(false);
    }, []);

    // Data for image gallery
    const images = [];
    if (!isLoading) {
        images.push({
            original: `${process.env.REACT_APP_URL}${product.featuredImage[0].image}`,
            thumbnail: `${process.env.REACT_APP_URL}${product.featuredImage[0].image}`,
        });
        product.imageGallery.forEach(image => images.push(
            {
                original: `${process.env.REACT_APP_URL}${image.image}`,
                thumbnail: `${process.env.REACT_APP_URL}${image.image}`,
            }));
    }

    // Data from state
    const {id, name, shortDescription, numberOfReviews, variations, tab, headline, rating} = product;
    console.log(product);

    if (isLoading) return <p>loading...</p>;

    return <React.Fragment>
        <section>
            <div className="container">
                <div className="row pt-2 mt-2 py-md-2 my-md-2">
                    <div className="col-12 col-md-6">
                        <ImageGallery
                            items={images || <Skeleton/>}
                            thumbnailPosition="bottom"
                            lazyLoad={true}
                            showNav={false}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            useBrowserFullscreen={false}
                        />
                    </div>
                    <div className="col-12 col-md-6 text-center text-sm-center text-md-left mb-2 py-md-1 my-md-1">
                        <h1>{name}</h1>
                        <span>{rating}/{numberOfReviews}</span>
                        <p>{shortDescription}</p>
                        <h1 className="display-4">499 Kč</h1>
                        <Link to="">
                            <button className="btn btn-primary" type="button">Pridat do kosiku</button>
                        </Link>
                        <div
                            className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
                            <img src=""/>
                            <p className="d-xl-flex">HEUREKA</p>
                        </div>
                    </div>
                </div>
                <div className="row pb-2 mb-2 py-md-2 my-md-2">
                    <div className="col text-sm-center text-md-left">
                        <Tabs defaultActiveKey="description" id="tabs">
                            {tab.map((tab, i) => {
                                return <Tab eventKey={tab.name} title={tab.name} key={i}>
                                    {tab.content}
                                </Tab>
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
        <BigFooter/>
    </React.Fragment>
}

export default SingleProductPage;