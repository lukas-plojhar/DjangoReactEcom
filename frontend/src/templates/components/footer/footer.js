import React, {Component} from "react";
import "./assets/css/footer.css";


export default class footer extends Component {
    render() {
        return (
            <footer className="bottom-footer">
                <hr style={{marginTop: 0, marginBottom: 0}}/>
                <div className="container">
                    <div className="footer-content d:grid">
                        {/*<Logo className="footer-logo" />*/}
                        <div className="footer-menu">
                            <a href="/">Platba a doručení</a>
                            <a href="/">Kontakt</a>
                            <a href="/">Obchodní podmínky</a>
                            <a href="/">Reklamační řád</a>
                        </div>
                        {/*<form className="mail-list-container">*/}
                        {/*  <input type="email" placeholder="Join our mailing list" />*/}
                        {/*  <Send className="send" />*/}
                        {/*</form>*/}
                        <div className="social-icons">
                            <a href="/">fb</a>
                            <a href="/">ig</a>
                            {/*<a href="/">t</a>*/}
                            {/*<a href="/">y</a>*/}
                            {/*<a href="/">s</a>*/}
                        </div>
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
