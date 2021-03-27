import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

import ImageGallery from "react-image-gallery";
import VariationsButtonGroup from "../common/VariationsButtonGroup";
import {Tab, Nav} from "react-bootstrap";
import Stars from "../common/Stars";
import HeurekaBadge from "../common/HeurekaBadge";
import {BigFooter} from "../common/Footer";
import Loading from "../common/Loader";


const SingleProductPage = () => {
    const [product, setProduct] = useState({product: {}});
    const [isLoading, setisLoading] = useState(true);
    const params = useParams();

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

    return !isLoading && <React.Fragment>
        <section>
            <div className="container">
                <div className="row pt-1 mt-1 py-md-2 my-md-2">

                    {/*Image gallery - left side*/}
                    <div className="col-12 col-md-6">
                        <ImageGallery
                            items={images}
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
                        <h2 className="mb-0">{name}</h2>
                        <Stars rating={rating} numberOfReviews={numberOfReviews}/>
                        <p>{shortDescription}</p>
                        <VariationsButtonGroup id={id} variations={variations}/>
                        <hr/>
                        <HeurekaBadge/>
                    </div>
                </div>

                {/*Summary below*/}
                <Tab.Container defaultActiveKey={tab[0].name} className="row pb-2 mb-2 py-md-2 my-md-2">
                    <Nav justify variant="pills" className="mb-2">
                        {tab.map((tab, i) =>
                            <Nav.Item key={i}>
                                <Nav.Link eventKey={tab.name}>{tab.name}</Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    <Tab.Content className="mb-3">
                        {tab.map((tab, i) =>
                            <Tab.Pane eventKey={tab.name} key={i}>
                                {tab.content}
                            </Tab.Pane>
                        )}
                    </Tab.Content>
                </Tab.Container>

            </div>
        </section>
        <BigFooter/>
    </React.Fragment>
}

export default SingleProductPage;