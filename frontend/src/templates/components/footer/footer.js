import React, {Component} from "react";
import "./assets/css/footer.css";
import {Link} from "react-router-dom";


export default class footer extends Component {
    render() {
        return (
            <footer className="bottom-footer">
                <hr style={{marginTop: 0, marginBottom: 0}}/>
                <div className="container">
                    <div className="footer-content d:grid">
                        {/*<Logo className="footer-logo" />*/}
                        <div className="footer-menu">
                            <Link to="/obchodni-podminky">Platba a doručení</Link>
                            <Link to="/kontakt">Kontakt</Link>
                            <Link to="/obchodni-podminky">Obchodní podmínky</Link>
                            <Link to="/reklamacni-rad">Reklamační řád</Link>
                        </div>
                        {/*<div className="social-icons">*/}
                        {/*    <a href="https://facebook.com/teethycz">fb</a>*/}
                        {/*    <a href="https://instagram.com/teethycz">ig</a>*/}
                        {/*</div>*/}
                        <div className="partners m-1 text-center">
                            <img src="https://onas.heureka.cz/upload/221-logoheurekanoclaim.png"
                                 className="partner-logo"/>
                            <img src="https://iczc.cz/qdir6885maub2i7ag57an6b6f6_m/obrazek" className="partner-logo"/>
                            <img src="https://ceskedluhopisy.cz/wp-content/uploads/2019/11/logo-alza.png"
                                 className="partner-logo"/>
                        </div>
                        <span className="copyright">
              © 2021 TEETHY. Veškerá práva vyhrazena.
            </span>
                    </div>
                </div>
            </footer>
        );
    }
}
