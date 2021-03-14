import React from 'react';

const Footer = () => {
    return <footer className="footer-clean mt-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li><a href="#">Job openings</a></li>
                        <li><a href="#">Employee success</a></li>
                        <li><a href="#">Benefits</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a
                    href="#"><i className="icon ion-social-instagram"></i></a>
                    <p className="copyright">Teethy.cz © 2021</p>
                </div>
            </div>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    </footer>
}

export default Footer;