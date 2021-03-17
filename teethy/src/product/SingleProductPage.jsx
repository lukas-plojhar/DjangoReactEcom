import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import ImageGallery from "react-image-gallery";
import VariationsButtonGroup from "../common/VariationsButtonGroup";
import {Tabs, Tab, Nav} from "react-bootstrap";
import Stars from "../common/Stars";
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

    if (isLoading) return <p>loading...</p>;
    return <React.Fragment>
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
                        <h2 className="mb-1">{name}</h2>
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

const HeurekaBadge = () => {
    // return <div
    //     className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
    //     <img src="https://www.drevoobchod.cz/wp-content/uploads/2020/09/Bez-n%C3%A1zvu-2.jpg"/>
    //     {/*<p className="d-xl-flex">HEUREKA</p>*/}
    // </div>
    return <React.Fragment>
        <div className="d-block text-center">
            <div className="d-inline-block" style={{maxWidth: '5.1rem'}}>
                <img
                    src="https://i2.wp.com/wcdemo.mergadoshop.com/wp-content/uploads/2020/03/overeno_zakazniky_gold_1.png"/>
            </div>
            <div className="d-inline-block text-left ml-1 ml-md-2" style={{position: 'relative', top: '0.7rem'}}>
                <small>
                    <strong className="font-green">99 % lidí nás doporučuje</strong><br/>
                    100 % lidí dorazilo zboží včas<br/>
                    1,9 dne je průměrná doba dodání
                </small>
            </div>
        </div>
    </React.Fragment>
}