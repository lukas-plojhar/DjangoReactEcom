import React, {Component} from "react";
import "./assets/css/usp.css";
import {API} from "../../../Globals";

const image = "https://ident-system.cz/wp-content/uploads/elementor/thumbs/icons8-easy-50-p03efxy18omtb4lbwczj3mt8bvm5xvcnw42segd5vm.png"

export default class usp extends Component {
    render() {
        return (
            <div className="usp-container">
                <div className="container">
                    <div className="mb-5">
                        <p className="usp-headline text-center">
                            K zubaři už nemusíš. Do jediné krabičky jsme vložili vše, co tvé zuby potřebují:
                            koncentrovaný
                            gel plný minerálů a přírodních extraktů, které používají zubní lékaři. Už po pár aplikacích
                            budou tvé zuby až o 6 stupňů bělejší.
                        </p>
                    </div>
                    <div className="usp-content d:grid">
                        <div className="brand d:grid">
                            <img src={API + "/images/usp1.png"} className="usp-icon" alt=""/>
                            <h2 className="usp-subheadline">Pohodlně</h2>
                            <p>
                                Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdykoliv. Jednoduše,
                                bezbolestně a rychle – aplikace ti nezabere víc než 16 minut denně.
                            </p>
                        </div>
                        <div className="brand d:grid">
                            <img src={API + "/images/usp2.png"} className="usp-icon" alt=""/>
                            <h2 className="usp-subheadline">Levně</h2>
                            <p>
                                Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při
                                tom až 4500,- oproti běžným cenám v ordinacích zubních lékařů.
                            </p>
                        </div>
                        <div className="brand d:grid">
                            <img src={API + "/images/usp3.png"} className="usp-icon" alt=""/>
                            <h2 className="usp-subheadline">Spolehlivě</h2>
                            <p>
                                Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                                extraktům z aloe a heřmánku navíc účinně posílí zubní sklovinu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
