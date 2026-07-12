import { Link } from "react-router-dom";

import {
    QUICK_LINKS,
    SOCIAL_LINKS,
    TECH_STACK,
} from "../../../constants/footer";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-4">
                        <div className="footer-logo">MA</div>

                        <h3>Mulajim Ali</h3>

                        <p>Module Lead | Full Stack Developer</p>

                        <p>
                            Passionate about building scalable web applications,
                            cloud solutions and enterprise software.
                        </p>

                        <div className="social-icons">
                            {SOCIAL_LINKS.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className={item.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h4>Quick Links</h4>

                        <ul>
                            {QUICK_LINKS.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-5">
                        <h4>Technologies</h4>

                        <div className="tech-list">
                            {TECH_STACK.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} Mulajim Ali. All Rights
                    Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
