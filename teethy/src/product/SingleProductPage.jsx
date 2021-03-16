import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import ImageGallery from "react-image-gallery";
import VariationsButtonGroup from "../common/VariationsButtonGroup";
import {Tabs, Tab} from "react-bootstrap";
import {BigFooter} from "../common/Footer";

const SingleProductPage = () => {
    const [product, setProduct] = useState({product: {}});
    const [isLoading, setisLoading] = useState(true);
    const params = useParams();
    const history = useHistory();

    // Fetch data
    useEffect(async () => {
        const result = await axios(`${process.env.REACT_APP_URL}/products/${params['id']}`);
        setProduct(result.data);
        setisLoading(false);
    }, []);

    // Data for image gallery
    const images = [];
    if (!isLoading) {
        images.push({
            original: `${process.env.REACT_APP_URL}${product.featuredImage}`,
            thumbnail: `${process.env.REACT_APP_URL}${product.featuredImage}`,
        });
        product.imageGallery.forEach(image => images.push(
            {
                original: `${process.env.REACT_APP_URL}${image}`,
                thumbnail: `${process.env.REACT_APP_URL}${image}`,
            }));
    }

    // Data from state
    const {id, name, shortDescription, numberOfReviews, variations, tab, headline, rating} = product;
    console.log(product);

    // Handlers
    const handleClick = (e) => {
        history.push(`/pokladna?productId=${params['id']}&variationId=${e.target.value}`);
    }

    if (isLoading) return <p>loading...</p>;

    return <React.Fragment>
        <section>
            <div className="container">
                <div className="row pt-1 mt-1 py-md-2 my-md-2">

                    {/*Image gallery - left side*/}
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

                    {/*Description - right side*/}
                    <div className="col-12 col-md-6 text-center text-md-left mb-2 py-md-1 my-md-1">
                        <h2>{name}</h2>
                        <span>{rating}/{numberOfReviews}</span>
                        <p>{shortDescription}</p>
                        <VariationsButtonGroup variations={variations}
                                               handleClick={handleClick}/>
                        <hr/>
                        <HeurekaBadge/>
                    </div>
                </div>

                {/*Summary below*/}
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

const HeurekaBadge = () => {
    return <div
        className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
        <img src="https://www.drevoobchod.cz/wp-content/uploads/2020/09/Bez-n%C3%A1zvu-2.jpg"/>
        {/*<p className="d-xl-flex">HEUREKA</p>*/}
    </div>
}