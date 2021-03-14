import React from 'react';
import ImageGallery from 'react-image-gallery';
import Skeleton from "react-loading-skeleton";

const Homepage = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return <React.Fragment>
        <section className="py-2 my-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h1>Chceš úsměv jako<br/>hollywoodská
                            hvězda?</h1>
                        <p>Vrať svým zubům jejich přirozenou bělost a<br/>pevnost.
                            Jednoduše, rychle a za pár korun.</p>
                        <div className="row mt-2 mb-3">
                            <div className="col">
                                <button className="btn btn-primary mr-1" type="button">Mam zajem</button>
                                <button className="btn btn-link" type="button">zjistit vice</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"><img src="assets/img/4-min-1-min%20(1).png"
                                                   loading="eager" width={'100%'}/></div>
                </div>
            </div>
        </section>


        <section className="text-center py-2 my-2 bg-light">
            <div className="container">
                <div className="row my-2">
                    <div className="col">
                        <h4 className="text-center"><strong>K zubaři už nemusíš. Do jediné krabičky jsme vložili
                            vše, co tvé zuby potřebují: koncentrovaný gel plný minerálů a přírodních extraktů i UV
                            světlo, které používají zubní lékaři. Už po pár aplikacích budou tvé zuby až o 6 stupňů
                            bělejší.</strong>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col align-self-center col-12 col-md-4"><i className="fa fa-star"></i>
                        <h3><strong>Pohodlně</strong><br/></h3>
                        <p>Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdykoliv. Jednoduše, bezbolestně
                            a
                            rychle – aplikace ti nezabere víc než 16 minut denně.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4"><i className="fa fa-star"></i>
                        <h3><strong>Levně</strong><br/></h3>
                        <p>Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při tom
                            až
                            4500,- oproti běžným cenám v ordinacích zubních lékařů.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4"><i className="fa fa-star"></i>
                        <h3><strong>Spolehlivě</strong><br/></h3>
                        <p>Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                            extraktům
                            z aloe a heřmánku navíc účinně posílí zubní sklovinu.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-2 my-2">
            <div className="container text-left text-center text-md-center text-lg-left text-xl-left">
                <div className="row">
                    <div className="col col-12- col-md-6">

                        <ImageGallery
                            items={images || <Skeleton/>}
                            thumbnailPosition="bottom"
                            lazyLoad={true}
                            showNav={true}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            useBrowserFullscreen={false}
                        />

                        <h3 className="text-center text-md-left"><strong>Sada na bělení
                            zubů
                            s UV světlem</strong><br/></h3>
                        <p className="text-center text-md-left">Získej bílé zuby jako z
                            plakátu – jednoduše, bez bolesti a za pouhých 16 minut. Bělicí sada od iDentu obsahuje
                            koncentrovaný gel a profesionální UV světlo urychlující vstřebávání účinných látek. Kvalita
                            a
                            výsledky jsou pro nás na prvním místě, celou bělicí sadu proto vyrábíme přímo v České
                            republice.</p><small className="text-center text-md-left">Sada obsahuje: náustek se 16
                        diodami z lékařského silikonu, tři bělicí
                        pera
                        o objemu 2 ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple Lightning), stupnice pro
                        kontrolu bělosti, návod k použití v češtině</small>
                        <div className="btn-group d-block mt-2" role="group">
                            <button className="btn btn-primary" type="button">Button 1</button>
                            <button className="btn btn-primary" type="button">Button 2</button>
                            <button className="btn btn-primary" type="button">Button 2</button>
                        </div>
                        <button className="btn btn-primary d-block mt-3" type="button">Button</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="carousel slide" data-ride="carousel" id="carousel-2">
                            <div className="carousel-inner">
                                <div className="carousel-item active"><img className="w-100 d-block"
                                                                           src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                                                                           alt="Slide Image"/></div>
                                <div className="carousel-item"><img className="w-100 d-block"
                                                                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                                                                    alt="Slide Image"/></div>
                                <div className="carousel-item"><img className="w-100 d-block"
                                                                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                                                                    alt="Slide Image"/></div>
                            </div>
                            <div><a className="carousel-control-prev" href="/" role="button"
                                    data-slide="prev"><span className="carousel-control-prev-icon"/><span
                                className="sr-only">Previous</span></a><a className="carousel-control-next"
                                                                          href="/" role="button"
                                                                          data-slide="next"><span
                                className="carousel-control-next-icon"/><span className="sr-only">Next</span></a>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-2" data-slide-to="0" className="active"/>
                                <li data-target="#carousel-2" data-slide-to="1"/>
                                <li data-target="#carousel-2" data-slide-to="2"/>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
}

export default Homepage;
