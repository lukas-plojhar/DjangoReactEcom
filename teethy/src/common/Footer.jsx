import React from 'react';
import {ProductCarousel, ReviewCarousel} from "./Carousel";

// Footer
export const Footer = () => {
    return <footer className="footer-clean mt-1">
        <div className="container">
            <div className="row text-left">
                <div className="col-6 col-md-4">
                    <h3>something</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-4">
                    <h3>something</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 social">
                    <a href="#">
                        <i className="icon ion-social-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="icon ion-social-instagram"></i>
                    </a>
                    <p className="copyright">Teethy.cz © 2021</p>
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
                    <ProductCarousel items={null}/>
                </div>
            </div>
        </section>

        {/*Reviews*/}
        <section className="bg-gradient text-center py-2 py-md-3">
            <div className="container">
                <div className="row">
                    <ReviewCarousel items={null}/>
                </div>
            </div>
        </section>

        {/*Regular footer*/}
        <Footer/>
    </React.Fragment>
}
