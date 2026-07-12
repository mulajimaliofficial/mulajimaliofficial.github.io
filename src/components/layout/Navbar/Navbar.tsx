import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useResume from "../../../hooks/useResume";

import { NAVIGATION_ITEMS } from "../../../constants/navigation";

import "./Navbar.css";

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { downloadResume } = useResume();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`navbar-wrapper ${scrolled ? "navbar-scroll" : ""}`}
            >
                <div className="container">
                    <div className="navbar-container">
                        <Link to="/" className="logo">
                            <div className="logo-circle">MA</div>

                            <div className="logo-text">
                                <span className="logo-name">Mulajim</span>

                                <span className="logo-role">Module Lead</span>
                            </div>
                        </Link>

                        <nav className="desktop-menu">
                            {NAVIGATION_ITEMS.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="desktop-actions">
                            <button
                                className="resume-btn"
                                onClick={downloadResume}
                            >
                                Download CV
                            </button>
                        </div>

                        <button
                            className="menu-button"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={
                    mobileMenuOpen ? "mobile-overlay active" : "mobile-overlay"
                }
                onClick={closeMenu}
            />

            <aside
                className={
                    mobileMenuOpen ? "mobile-sidebar active" : "mobile-sidebar"
                }
            >
                <div className="mobile-header">
                    <h3>Menu</h3>

                    <button onClick={closeMenu}>✕</button>
                </div>

                <div className="mobile-links">
                    {NAVIGATION_ITEMS.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "mobile-link active-link"
                                    : "mobile-link"
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}

                    <button className="resume-btn mobile-btn">
                        Download CV
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
