import React, {Component} from "react";
import "./assets/css/product.css";
import {VariationButtonGroup,} from "../variatiobutton/VariationButton";

// Images
import {ReactComponent as Star} from "../review/assets/svg/star.svg";
import {Link} from "react-router-dom";
import {API} from "../../../Globals";
import axios from "axios";

class SingleColProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVariation: 1,
            product: {
                id: this.props.id,
            }
        };
        this.handleVariationClick = this.handleVariationClick.bind(this);
    }

    // Hooks
    async componentDidMount() {
        const state = this.state;
        const url = `${API}/products/${state.product.id}`;

        const data = await axios.get(url).then((response) => response.data);
        this.setState({
            product: {
                id: state.product.id,
                ...data,
            },
        });
    }

    // Handlers
    handleVariationClick = (id) => {
        const state = this.state;
        state.selectedVariation = id;
        this.setState(state);
    }

    // Functions


    render() {
        if (!this.state.product.variations) return <p>loading</p>

        const {selectedVariation, product} = this.state;
        const {id, name, shortDescription, featuredImage, rating, numberOfReviews, variations,} = product;
        console.log(API + featuredImage);
        return (
            <div className="product d:grid">
                <img src={API + featuredImage[0].image} alt="product"/>
                <h1 className="colproduct-headline">{name}</h1>
                <div className="star-review d:flex flex:row">
                    <div className="d:flex flex:row">
                        <Star className="star-icon"/>
                    </div>
                    <span className="rv-span">
            ({rating}) {numberOfReviews}x
          </span>
                </div>
                <p className="product-description">{shortDescription}</p>
                <p className="content-text">Balení obsahuje: {variations[selectedVariation].content}</p>
                {/*<p className="text-center">*/}
                {/*    <span className="regular-price">{variations[selectedVariation].regularPrice} ,-</span><br/>*/}
                {/*    <span className="sale-price">{variations[selectedVariation].salePrice} ,-</span><br/>*/}
                {/*</p>*/}
                <div className="text-center">
                    <VariationButtonGroup
                        selectedVariation={selectedVariation}
                        variations={variations}
                        label="Oblíbené"
                        handleClick={this.handleVariationClick}
                    />
                    <Link to={`/pokladna/${id}`}>
                        <button className="btn btn-primary">Přidat do košíku</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SingleColProduct;
