import React from 'react';
import {Link} from "react-router-dom";
import API from "../../API";

const Home = () => {
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Uvodni stranka</h1>
                </div>
                <div className="col-6">
                    <p>
                        <a href={`${API}/orders/export`} target='_blank'>
                            <button className="btn btn-primary">
                                Stahnout CZ objednavky
                            </button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Home;