import React from "react";
import TopNav from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";

const Contact = () => {
    return <React.Fragment>
        <TopNav/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 align-middle">
                    <h4 className="text-center mb-5">Kontakt</h4>
                    <p className="font-weight-bold text-center my-5">Reklamace zasílejte na adresu: TEETHY, Pod
                        Stromovkou
                        204,
                        370 01
                        Litvínovice</p>
                    <div className="row">
                        <div className="col-6 mt-5">
                            <p className="font-weight-bold">Sidlo</p>
                            <p>
                                Delina International s.r.o.<br/>
                                IČO: 07243090<br/>
                                Vítkova 188/22<br/>
                                186 00 Praha<br/>
                            </p></div>
                        <div className="col-6 mt-5"><p className="font-weight-bold">Kontakt</p>
                            <p>
                                Email: <a href="mailto:info@teethy.cz"></a>info@teethy.cz<br/>
                                Facebook: <a href="https://facebook.com/teethycz">teethycz</a><br/>
                                Instagram: <a href="https://instagram.com/teethycz">teethycz</a><br/>
                            </p></div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div style={{width: '100%'}}>
                        <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%C3%ADtkova%20186/22,%20Praha+(TEETHY:)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Contact;