import { SKILL_CATEGORIES } from "../../data/skills";
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading'
import "./Skills.css";

const Skills = () => {
    return (
        <section className="skills">
            <div className="container">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="Technologies I use to build scalable enterprise applications."
                />

                <div className="row gy-4">
                    {SKILL_CATEGORIES.map((category) => (
                        <div className="col-lg-6" key={category.id}>
                            <div className="skill-card">
                                <div className="skill-card-header">
                                    <i className={category.icon}></i>

                                    <h3>{category.title}</h3>
                                </div>

                                <div className="skill-tags">
                                    {category.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
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

export default Skills;
