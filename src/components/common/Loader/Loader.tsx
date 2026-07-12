import "./Loader.css";

const Loader = () => {
    return (
        <div className="app-loader">
            <div className="loader-content">
                <div className="loader-ring outer-ring"></div>

                <div className="loader-ring inner-ring"></div>

                <div className="loader-logo">MA</div>
            </div>

            <h2>
                Building Enterprise
                <span> Digital Solutions</span>
            </h2>

            <p>Loading Portfolio...</p>

            <div className="loading-bar">
                <span></span>
            </div>
        </div>
    );
};

export default Loader;
