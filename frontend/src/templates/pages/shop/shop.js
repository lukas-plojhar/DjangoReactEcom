import React, {Component} from "react";
import './assets/css/shop.css'
import TopNav from "../../components/topnavbar/nav";

const Product = ({price, imageLeft, title, intro, image}) => {
    return <div
        className={imageLeft
            ? "product-container white-bg"
            : "product-container whitesmoke-bg"
        }
    >
        <div className="container">
            <div className="col-12 mt-5">
                <div
                    className={
                        imageLeft
                            ? "product-content d:flex flex:col md:flex:row-reverse"
                            : "product-content d:flex flex:col md:flex:row"
                    }
                >
                    <div className="product-details d:grid">
                        <div className="content">
                            <h1>{title}</h1>
                            <p>{intro}</p>
                            <h3>již od {price} ,-</h3>
                            <button className="btn btn-primary">Přidat do košíku</button>
                        </div>
                    </div>
                    <div className="product-img">
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <TopNav/>
                <Product
                    imageLeft={true}
                    title="Sada bělicích per"
                    intro="nejaky content blalbalbalba"
                    image="https://ident-system.cz/wp-content/uploads/2020/11/pera-600x600.png"
                    price={1399}
                />
                <Product
                    imageLeft={false}
                    title="Sada na bělení zubů s UV světlem"
                    intro="náustek se 16 diodami z lékařského silikonu, tři bělicí pera o objemu 2 ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple Lightning), stupnice pro kontrolu bělosti, návod k použití v češtině"
                    image="https://ident-system.cz/wp-content/uploads/2020/12/4-min-1-min.png"
                    price={499}
                />
                <Product
                    imageLeft={true}
                    title="Bělicí zubní páský"
                    intro="14x horní pásek, 14x dolní pásek, stupnici pro kontrolu bělosti, návod k použití v českém jazyce"
                    image="https://teethy.cz/wp-content/uploads/2018/10/na-hlavn%C3%AD-stranu-2-min.png"
                    price={499}
                />
            </React.Fragment>
        );
    }
}
