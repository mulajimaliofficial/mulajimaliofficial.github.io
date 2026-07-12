import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import { EXPERIENCE } from "../../../data/experience";

import "./Experience.css";

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <SectionHeading
                    title="Professional Experience"
                    subtitle="My professional journey and enterprise software experience."
                />

                <div className="timeline">
                    {EXPERIENCE.map((item) => (
                        <div className="timeline-item" key={item.id}>
                            <div className="timeline-dot"></div>

                            <div className="timeline-card">
                                <h3>{item.role}</h3>

                                <h4>{item.company}</h4>

                                <p className="timeline-duration">
                                    {item.duration} • {item.location}
                                </p>

                                <ul>
                                    {item.achievements.map((achievement) => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>

                                <div className="timeline-tech">
                                    {item.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
