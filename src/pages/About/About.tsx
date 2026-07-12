import ABOUT from "../../data/about";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";
import GlassCard from "../../components/ui/GlassCard/GlassCard"
import "./About.css";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <SectionHeading title={ABOUT.heading} subtitle={ABOUT.title} />

                <div className="row align-items-center gy-4">
                    <div className="col-lg-7">
                        <p className="about-description">{ABOUT.description}</p>
                    </div>

                    <div className="col-lg-5">
                        <GlassCard className="about-card">
                            <h4>Current Company</h4>

                            <span>{ABOUT.company}</span>

                            <h4>Experience</h4>

                            <span>{ABOUT.experience} Years</span>

                            <h4>Education</h4>

                            <span>{ABOUT.education}</span>

                            <h4>Location</h4>

                            <span>{ABOUT.location}</span>
                        </GlassCard>
                    </div>
                </div>

                <div className="about-technologies">
                    {ABOUT.technologies.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
