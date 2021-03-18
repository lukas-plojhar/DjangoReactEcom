import React from "react";

const HeurekaBadge = () => {
    // return <div
    //     className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
    //     <img src="https://www.drevoobchod.cz/wp-content/uploads/2020/09/Bez-n%C3%A1zvu-2.jpg"/>
    //     {/*<p className="d-xl-flex">HEUREKA</p>*/}
    // </div>
    return <React.Fragment>
        <div className="d-block text-center">
            <div className="d-inline-block" style={{maxWidth: '5.1rem'}}>
                <img
                    src="https://i2.wp.com/wcdemo.mergadoshop.com/wp-content/uploads/2020/03/overeno_zakazniky_gold_1.png"/>
            </div>
            <div className="d-inline-block text-left ml-1 ml-md-2" style={{position: 'relative', top: '1.3rem'}}>
                <small>
                    <strong className="font-green">99 % lidí nás doporučuje</strong><br/>
                    100 % lidí dorazilo zboží včas<br/>
                    1,9 dne je průměrná doba dodání
                </small>
            </div>
        </div>
    </React.Fragment>
}

export default HeurekaBadge;