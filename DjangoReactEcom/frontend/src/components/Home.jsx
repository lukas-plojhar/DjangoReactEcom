import React, {Component} from 'react';


import Footer from './common/Footer';
import CenteredFullRow from './common/CenteredFullRow';
import IconWithLabel from './home/IconWithLabel';
import VariationButtonGroup from './home/VariationButtonGroup';

import image from '../static/img/krabicka_side.png';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected_product_id: 1,
            product_variations: [
                {
                    product_id: 1,
                    label: '1x 1199,-',
                    regular_price: 2999,
                    sale_price: 1199,
                },
                {
                    product_id: 2,
                    label: '2x 999,-',
                    regular_price: 5999,
                    sale_price: 1999,
                },
                {
                    product_id: 3,
                    label: '3x 799,-',
                    regular_price: 8999,
                    sale_price: 2499,
                }
            ],
        }
    }

    handleProductVariationChange = (product_id) => {
        const state = this.state;
        state.selected_product_id = product_id;
        this.setState({state});
    }

    render() {

        console.log(image)

        return (
            <React.Fragment>
                <div className="row col-12 text-center above_overlay">
                    <div className="py-5 mx-auto">
                        <h1 className='text-center bold'>Chceš úsměv jako hollywoodská hvězda?</h1>
                        <p className='text-center'>Vrať svým zubům jejich přirozenou bělost a pevnost. Jednoduše, rychle
                            a za pár korun</p>
                        <button className="btn btn-primary">Chci bile zuby</button>
                    </div>
                </div>

                <CenteredFullRow>
                    <h2 className="subheadline text-center">K zubaři už nemusíš. Do jediné krabičky jsme vložili vše, co
                        tvé zubí potřebují: koncentrovaný gel plný minerálů a přírodních extraktů i UV světlo, které
                        používají zubní lékaři. Už po pár aplikacích budou tvé zuby až o 6 odstínů bělejší.</h2>
                    <video
                        src="https://cdn.shopify.com/s/files/1/2502/5300/files/Kit_Page_Video_Desktop.mp4"
                        autoPlay="True"
                        width="100%"
                    ></video>
                </CenteredFullRow>

                <div className="row mb-5">
                    <div className="col">
                        <IconWithLabel img="/" title="Pohodlně">
                            Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdekoliv. Jednoduše,
                            bezbolestně a rychle - aplikace ti nezabere víc než 16 minut denně.
                        </IconWithLabel>
                    </div>

                    <div className="col">
                        <IconWithLabel img="/" title="Levně">
                            Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při tom
                            až 4500,- oproti běžným cenám v ordinacích zubních lékařů.
                        </IconWithLabel>
                    </div>

                    <div className="col">
                        <IconWithLabel img="/" title="Spolehlivě">
                            Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                            extraktům z aloe a heřmánku navíc účinně posílí zubní sklovinu.
                        </IconWithLabel>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12">
                        <h1 className="text-left bold">Sada na bělení zubů s UV světlem</h1>
                    </div>
                    <div className="col-6">
                        <img src={image} style={{maxWidth: "100%"}} alt="Obrazek produktu"/>
                    </div>
                    <div className="col-6">
                        <p className='text-justify'>Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za
                            pouhých 16 minut. Bělicí sada od iDentu obsahuje koncentrovaný gel a profesionální UV světlo
                            urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě,
                            celou bělicí sadu proto vyrábíme přímo v České republice.</p>
                        <small className='text-justify'>Sada obsahuje: náustek se 16 diodami z lékařského silikonu, tři
                            bělicí pera o objemu 2 ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple Lightning),
                            stupnice pro kontrolu bělosti, návod k použití v češtině</small>
                        <h1>{this.state.product_variations[this.state.selected_product_id - 1].regular_price},-</h1>
                        <h1>{this.state.product_variations[this.state.selected_product_id - 1].sale_price},-</h1>
                        <small>+ doprava pouze za 69,-</small>
                        <small>Do tří dnů u vás!</small>
                        <div className="text-center">
                            <VariationButtonGroup data={this.state.product_variations}
                                                  selectedProductId={this.state.selected_product_id}
                                                  handleClick={this.handleProductVariationChange}/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <small>Bělicí sadu po použití nevyhazuj. Gelová pera si můžeš kdykoliv dokoupit
                            samostatně.</small>
                    </div>
                </div>

                <CenteredFullRow>
                    <h2 className="bold highlight">Jak sada od iDentu funguje?</h2>
                    <p>Nanes gel, nasaď speciální náustek s UV světlem – a hotovo. Už za 16 minut uvidíš výsledky. Tři
                        pera s bělicím gelem, která jsou součástí balení ti vystačí na 15 aplikací. Díky zabudovanému
                        časovači se navíc nemusíš o nic starat, iDent se vypne automaticky.</p>
                </CenteredFullRow>

                <CenteredFullRow>
                    <h2 className="bold highlight">Co na iDent říká Petra LovelyHair?</h2>
                    <p>"Je to naprostá pecka. iDent mi fakt pomoc, vybělil mi zuby až o šest stupňů. Už za sedm
                        dnů!"</p>
                </CenteredFullRow>

                <CenteredFullRow>
                    <h2 className="bold highlight">Ohlasy ze sociálních sítí</h2>
                    <p>Neprodáváme zajíce v pytli. Na českém trhu jsme už od roku 2018</p>
                    <div className="col-4">
                        <img src="/" alt=""/>
                        <img src="/" alt=""/>
                        <img src="/" alt=""/>
                    </div>
                </CenteredFullRow>

                <CenteredFullRow>
                    <h2 className="bold highlight">Ohlasy našich zákazníků</h2>
                    <p>Kvalita je pro nás na prvním místě. Zajímají nás výsledky, stejně jako vás.</p>
                    <button className="btn btn-primary">Chci to vyzkoušet</button>
                </CenteredFullRow>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;