import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Video from './common/Video.jsx';
import Footer from './common/Footer';
import CenteredFullRow from './common/CenteredFullRow';
import IconWithLabel from './home/IconWithLabel';
import VariationButtonGroup from './home/VariationButtonGroup';

class Home extends Component {
    videoSource = "https://cdn.shopify.com/s/files/1/2502/5300/files/Kit_Page_Video_Desktop.mp4";
    iconSource = [
        "https://ident-system.cz/wp-content/uploads/elementor/thumbs/icons8-easy-50-p03efxy18omtb4lbwczj3mt8bvm5xvcnw42segd5vm.png",
        "https://ident-system.cz/wp-content/uploads/elementor/thumbs/icons8-money-box-64-p03efv4io6iycapfctrne5iujq02as1gvq4bymhcea.png",
        "https://ident-system.cz/wp-content/uploads/elementor/thumbs/icons8-guarantee-64-p03efw2cv0k8nwo27c69ynab53vfih577urtfwfy82.png"
    ];
    productImage = "https://ident-system.cz/wp-content/uploads/2020/12/4-min-1-min.png";


    state = {
        selected: 1,
        product_variations: [
            {
                product_id: 1,
                label: '1x 1199,-/ks',
                regular_price: 2999,
                sale_price: 1199,
            },
            {
                product_id: 2,
                label: '2x 999,-/ks',
                regular_price: 5999,
                sale_price: 1999,
            },
            {
                product_id: 3,
                label: '3x 799,-/ks',
                regular_price: 8999,
                sale_price: 2499,
            }
        ],
    }

    handleSelectionChange = (id) => {
        this.setState({selected: id});
    }

    render() {
        const {selected, product_variations} = this.state;
        return (
            <React.Fragment>
                <div className="row text-center welcome">
                    <div className="col-12">
                        <div className="py-5 mx-auto">
                            <h1 className='text-center font-weight-bold' style={{'lineHeight': 1.2}}>Chceš úsměv
                                jak<br/>hollywoodská
                                hvězda?</h1>
                            <p className='text-center'>Vrať svým zubům jejich přirozenou bělost a<br/>pevnost.
                                Jednoduše, rychle a za pár korun</p>
                            <button className="btn btn-primary">Chci bílé zuby</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CenteredFullRow>
                        <p className="text-center bigger">K zubaři už nemusíš. Do jediné krabičky jsme vložili vše,
                            co
                            tvé zubí potřebují: koncentrovaný gel plný minerálů a přírodních extraktů i UV světlo, které
                            používají zubní lékaři. Už po pár aplikacích budou tvé zuby až o 6 odstínů bělejší.</p>
                    </CenteredFullRow>

                    <div className="row mb-5">
                        <IconWithLabel source={this.iconSource[0]} title="Pohodlně">
                            Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdekoliv. Jednoduše,
                            bezbolestně a rychle - aplikace ti nezabere víc než 16 minut denně.
                        </IconWithLabel>

                        <IconWithLabel source={this.iconSource[1]} title="Levně">
                            Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při tom
                            až 4500,- oproti běžným cenám v ordinacích zubních lékařů.
                        </IconWithLabel>

                        <IconWithLabel source={this.iconSource[2]} title="Spolehlivě">
                            Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                            extraktům z aloe a heřmánku navíc účinně posílí zubní sklovinu.
                        </IconWithLabel>
                    </div>
                </div>
                <div className="container-fluid section-product">
                    <div className="container">
                        <div className="row my-1 py-4">
                            <div className="col-12">
                                <h1 className="text-left bold">Sada na bělení zubů s UV světlem</h1>
                            </div>

                            <div className="col-12 col-md-6">
                                <img src={this.productImage} style={{maxWidth: "100%"}} alt="Obrazek produktu"/>
                            </div>

                            <div className="col-12 col-md-6">
                                <p className='text-justify'>Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a
                                    za
                                    pouhých 16 minut. Bělicí sada od iDentu obsahuje koncentrovaný gel a profesionální
                                    UV
                                    světlo
                                    urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním
                                    místě,
                                    celou bělicí sadu proto vyrábíme přímo v České republice.</p>
                                <small className='text-justify' style={{'lineHeight': 1.2}}>Sada obsahuje: náustek se 16
                                    diodami
                                    z lékařského silikonu, tři
                                    bělicí pera o objemu 2 ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple
                                    Lightning),
                                    stupnice pro kontrolu bělosti, návod k použití v češtině</small>


                                <div className="text-center">
                                    <h1 className="font-weight-light">
                                        <del>&nbsp;{product_variations[selected - 1].regular_price},-</del>
                                    </h1>
                                    <h2 className="font-weight-bold color">{product_variations[selected - 1].sale_price},-</h2>
                                    <small>+ doprava pouze za 69,-</small><br/>
                                    <small>Ihned k odeslání!</small>
                                    <div className="text-center">
                                        <VariationButtonGroup data={product_variations}
                                                              selected={selected}
                                                              handleClick={this.handleSelectionChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <small>Bělicí sadu po použití nevyhazuj. Gelová pera si můžeš kdykoliv <Link to="/">dokoupit
                                    samostatně</Link>.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CenteredFullRow>
                        <h2 className="font-weight-normal">Jak sada od iDentu funguje?</h2>
                        <p>Nanes gel, nasaď speciální náustek s UV světlem – a hotovo. Už za 16 minut uvidíš výsledky.
                            Tři
                            pera s bělicím gelem, která jsou součástí balení ti vystačí na 15 aplikací. Díky
                            zabudovanému
                            časovači se navíc nemusíš o nic starat, iDent se vypne automaticky.</p>
                    </CenteredFullRow>

                    <CenteredFullRow>
                        <h2 className="font-weight-normal">Co na iDent říká Petra LovelyHair?</h2>
                        <p>"Je to naprostá pecka. iDent mi fakt pomoc, vybělil mi zuby až o šest stupňů. Už za sedm
                            dnů!"</p>
                        <Video source={this.videoSource}/>
                    </CenteredFullRow>

                    <CenteredFullRow>
                        <h2 className="font-weight-normal">Ohlasy ze sociálních sítí</h2>
                        <p>Neprodáváme zajíce v pytli. Na českém trhu jsme už od roku 2018</p>
                        <div className="col-4">
                            <img src="/" alt=""/>
                            <img src="/" alt=""/>
                            <img src="/" alt=""/>
                        </div>
                    </CenteredFullRow>

                    <CenteredFullRow>
                        <h2 className="font-weight-normal">Ohlasy našich zákazníků</h2>
                        <p>Kvalita je pro nás na prvním místě. Zajímají nás výsledky, stejně jako vás.</p>
                        <Link to="/#katalog">
                            <button className="btn btn-primary">Chci to vyzkoušet</button>
                        </Link>
                    </CenteredFullRow>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;