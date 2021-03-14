import React from 'react';

const SingleProductPage = () => {
    return <section>
        <div className="container">
            <div className="row pt-2 mt-2 py-md-2 my-md-2">
                <div className="col-12 col-md-6">
                    <div className="carousel slide" data-ride="carousel" id="carousel-1">
                        <div className="carousel-inner mb-2 mb-md-0">
                            <div className="carousel-item active"><img className="w-100 d-block"
                                                                       src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                                                                       alt="Slide Image"/></div>
                        </div>
                        <div><a className="carousel-control-prev" href="#" role="button"
                                data-slide="prev"><span
                            className="carousel-control-prev-icon"/><span
                            className="sr-only">Previous</span></a><a
                            className="carousel-control-next" href="#" role="button" data-slide="next"><span
                            className="carousel-control-next-icon"/><span className="sr-only">Next</span></a>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to="0" className="active"/>
                            <li data-target="#carousel-1" data-slide-to="1"/>
                            <li data-target="#carousel-1" data-slide-to="2"/>
                        </ol>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center text-sm-center text-md-left mb-2 py-md-2 my-md-2">
                    <h1>Pasky na beleni zubu</h1>
                    <p>Paragraph</p>
                    <h1 className="display-4">499 Kč</h1>
                    <button className="btn btn-primary" type="button">Button</button>
                    <div
                        className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
                        <img src=""/>
                        <p className="d-xl-flex">Paragraph</p>
                    </div>
                </div>
            </div>
            <div className="row pb-2 mb-2 py-md-2 my-md-2">
                <div className="col text-sm-center text-md-left">
                    <div>
                        <ul className="nav nav-tabs d-flex d-sm-flex justify-content-center justify-content-sm-center justify-content-xl-start"
                            role="tablist">
                            <li className="nav-item" role="presentation"><a className="nav-link active" role="tab"
                                                                            data-toggle="tab"
                                                                            href="#">Tab 1</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" role="tab"
                                                                            data-toggle="tab"
                                                                            href="#">Tab 2</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" role="tab"
                                                                            data-toggle="tab"
                                                                            href="#">Tab 3</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" role="tabpanel" id="tab-1">
                                <p>Content for tab 1.</p>
                            </div>
                            <div className="tab-pane" role="tabpanel" id="tab-2">
                                <p>Content for tab 2.</p>
                            </div>
                            <div className="tab-pane" role="tabpanel" id="tab-3">
                                <p>Content for tab 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SingleProductPage;