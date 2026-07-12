import React from 'react'
import Hero from "../../components/sections/Hero/Hero";
import About from '../About/About'
import Skills from '../Skills/Skills'
import Experience from "../../components/sections/Experience/Experience";
import Projects from '../Projects/Projects'
import SEO from '../../components/seo/SEO';
const Home:React.FC = () => {
    return (
        <div className="container py-5">
            <SEO
                title="Home"
            />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
};

export default Home;
