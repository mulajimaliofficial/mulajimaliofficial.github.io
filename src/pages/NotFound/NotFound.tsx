import { Link } from "react-router-dom";

import SEO from "../../components/seo/SEO";
import Button from "../../components/ui/Button/Button";
import ROUTES from "../../routes/routes";

import "./NotFound.css";

const NotFound = () => {
    return (
        <>
            <SEO title="404" />

            <section className="not-found">
                <div className="background-glow"></div>

                <div className="not-found-content">
                    <span className="error-code">404</span>

                    <h1>Lost in the Digital Universe</h1>

                    <p>
                        The page you're looking for doesn't exist, has been
                        moved or the URL is incorrect.
                    </p>

                    <div className="tech-stack">
                        <span>React</span>

                        <span>Python</span>

                        <span>GraphQL</span>

                        <span>AWS</span>
                    </div>

                    <Link to={ROUTES.HOME}>
                        <Button>Back To Home</Button>
                    </Link>
                </div>

                <div className="watermark">MA</div>
            </section>
        </>
    );
};

export default NotFound;
