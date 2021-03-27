import React from 'react';
import Loader from "react-loader-spinner";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Loading = ({isLoading}) => {
    return <TransitionGroup>
        <CSSTransition timeout={350} classNames='ease'>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 align-self-center text-center" style={{marginTop: '30%'}}>
                            <Loader
                                type="Puff"
                                color="#3d7aef"
                                height={120}
                                width={120}
                                timeout={1000}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </CSSTransition>
    </TransitionGroup>
}

export default Loading;
