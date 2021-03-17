import React from 'react';
import {ProductCarousel, ReviewCarousel} from "./Carousel";
import {Link} from "react-router-dom";

// Footer
export const Footer = () => {
    return <footer className="footer-clean mt-1">
        <div className="container">
            <div className="row text-left">
                <div className="col-6 col-md-4">
                    <h3>Kontakt</h3>
                    <ul>
                        <li>{process.env.REACT_APP_COMPANY_NAME}</li>
                        <li>{process.env.REACT_APP_COMPANY_ADDRESS}</li>
                        <li>{process.env.REACT_APP_COMPANY_CITY}</li>
                        <li><a
                            href={`mailto:${process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}`}>{process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-4">
                    <h3>Informace</h3>
                    <ul>
                        <li><Link to={`/obchodni-podminky`}>Obchodní podmínky</Link></li>
                        <li><Link to={`/kontakt`}>Kontakt</Link></li>
                        <li><Link to={`/obchodni-podminky`}>Platba a doručení</Link></li>
                        <li><Link to={`/reklamacni-rad`}>Reklamační řád</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 social">
                    <h3>Sociální média</h3>
                    <a href={`https://facebook.com/${process.env.REACT_APP_WEBSITE_SOCIAL_FACEBOOK}`}>
                        <i className="icon ion-social-facebook"></i>
                    </a>
                    <a href={`https://instagram.com/${process.env.REACT_APP_WEBSITE_SOCIAL_INSTAGRAM}`}>
                        <i className="icon ion-social-instagram"></i>
                    </a>
                    <p className="copyright">{process.env.REACT_APP_WEBSITE_NAME}© 2021</p>
                </div>
            </div>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    </footer>
}

// Footer with reviews and products
export const BigFooter = () => {
    return <React.Fragment>
        {/*Related products*/}
        <section className="bg-light text-center py-2 py-md-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-sm-left mb-2 d-block">Ostatní také vyzkouseli</h2>
                    </div>
                    <ProductCarousel items={null}/>
                </div>
            </div>
        </section>

        {/*Reviews*/}
        <section className="bg-gradient text-center py-2 py-md-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-sm-left mb-2 d-block font-white">Co o nas rikaji?</h2>
                    </div>
                    <ReviewCarousel items={null}/>
                </div>
            </div>
        </section>

        {/*Regular footer*/}
        <Footer/>
    </React.Fragment>
}
