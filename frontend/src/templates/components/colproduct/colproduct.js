import React, {Component} from "react";
import "./assets/css/product.css";

export default class colproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="multiple-product-container">
                <div className="container">
                    <div className="multiple-product-content d:flex flex:col sm:flex:row">

                        <div className="product d:grid">
                            <img src="/uploads/product_2.jpg" alt="product"/>
                            <h1>Keep your smile fresh for less.</h1>
                            <p>
                                Get 10% off oral care products and free shipping when you spend
                                $30. Use code ORALCARE10 at checkout.
                            </p>
                            <button>Přidat do košíku</button>
                        </div>

                        <div className="product d:grid">
                            <img src="/uploads/product_3.png" alt="product"/>
                            <h1>Keep your smile fresh for less.</h1>
                            <p>
                                Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 16 minut. Bělicí
                                sada od iDentu obsahuje koncentrovaný gel a profesionální UV světlo urychlující
                                vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě, celou
                                bělicí sadu proto vyrábíme přímo v České republice.
                            </p>
                            <button>Přidat do košíku</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
