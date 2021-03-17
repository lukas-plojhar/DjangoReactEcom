import React from "react";

const Contact = () => {
    return <React.Fragment>
        <div className="container py-1 my-1 py-md-3 my-md-3">
            <div className="row">
                <div className="col-12 col-md-6 align-self-center">
                    <h4 className="text-center mb-3">Kontaktní informace</h4>
                    <p className="font-weight-bold text-center">
                        Reklamace zasílejte na
                        adresu: {process.env.REACT_APP_RETURN_NAME},
                        {process.env.REACT_APP_RETURN_ADDRESS},
                        {process.env.REACT_APP_RETURN_CITY}</p>

                    <div className="row mt-2 pt-2">
                        <div className="col-6"><p className="font-weight-bold">Sídlo společnosti</p>
                            <p>
                                {process.env.REACT_APP_COMPANY_NAME}<br/>
                                IČO: {process.env.REACT_APP_COMPANY_ICO}<br/>
                                {process.env.REACT_APP_COMPANY_ADDRESS}<br/>
                                {process.env.REACT_APP_COMPANY_CITY}<br/>
                            </p>
                        </div>
                        <div className="col-6"><p className="font-weight-bold">Kontakt</p>
                            <p>
                                Email: <a
                                href={`mailto:${process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}`}></a>{process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}<br/>
                                Facebook: <a
                                href={`https://facebook.com/${process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}`}>{process.env.REACT_APP_WEBSITE_SOCIAL_FACEBOOK}</a><br/>
                                Instagram: <a
                                href={`https://instagram.com/${process.env.REACT_APP_WEBSITE_EMAIL_GENERAL}`}>{process.env.REACT_APP_WEBSITE_SOCIAL_INSTAGRAM}</a><br/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="bg-rounded" style={{width: '100%'}}>
                        <iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%C3%ADtkova%20186/22,%20Praha+(TEETHY:)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </React.Fragment>
}
export default Contact;