import Loader from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 center">
                    <Loader
                        type="ThreeDots"
                        color="blue"
                        height={80}
                        width={80}
                        timeout={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;
