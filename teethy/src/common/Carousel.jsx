import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import axios from "axios";

export const ProductCarousel = ({items}) => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const data = await axios.get(`${process.env.REACT_APP_URL}/products/upsells`).then(response => response.data);
        setProducts(data);
        setIsLoading(false);
    }, []);

    if (isLoading) return <p>Loading ...</p>
    return <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('')}
        onSwiper={(swiper) => console.log(swiper)}>
        {
            products.map((product, i) => {
                return <React.Fragment>
                    <SwiperSlide>
                        <div className="text-center text-md-left" key={i}>
                            <img src={`${process.env.REACT_APP_URL}${product.featuredImage}`} alt=""/>
                            <h4>{product.name}</h4>
                            <p>{product.shortDescription}</p>
                            <p>
                                {product.variations[0].regularPrice || ''}<br/>
                                {product.variations[0].salePrice}
                            </p>
                            <button className="btn btn-primary btn-sm">Pridat do kosiku</button>
                        </div>
                    </SwiperSlide>
                </React.Fragment>
            })
        }
    </Swiper>
}

export const ReviewCarousel = ({items}) => {
    const itemsDummy = [
        {
            source: 'Heureka',
            description: 'asdasdasd',
            name: 'Jan Novak'
        },
        {
            source: 'Heureka',
            description: 'asdasasdasddasd',
            name: 'Janasd Novak'
        },
        {
            source: 'Heureka',
            description: 'asdaasdasdasdsdasd',
            name: 'Jan Novasdak'
        },
        {
            source: 'Heureka',
            description: 'asdaasdasdasdsdasd',
            name: 'Jan Novasdak'
        },
    ];

    return <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {
            itemsDummy.map((review, i) => {
                return <SwiperSlide>
                    <div className="col text-left" key={i}>
                        <span className="font-white">{review.source}</span>
                        <h6 className="font-white">{review.name}</h6>
                        <p className="font-white">{review.description}</p>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
}
