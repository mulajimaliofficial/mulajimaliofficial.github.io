import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";
import ProjectCard from "../../components/sections/ProjectCard/ProjectCard";

import { PROJECTS } from "../../data/projects";

import "./Projects.css";

const Projects = () => {
    const featuredProjects = PROJECTS.filter((project) => project.featured);

    const otherProjects = PROJECTS.filter((project) => !project.featured);

    return (
        <section className="projects">
            <div className="container">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Enterprise applications and innovative solutions I've built throughout my professional journey."
                />

                <div className="featured-projects">
                    <div className="row gy-4">
                        {featuredProjects.map((project) => (
                            <div className="col-lg-4" key={project.id}>
                                <ProjectCard
                                    title={project.title}
                                    company={project.company}
                                    description={project.description}
                                    technologies={project.technologies}
                                    github={project.github}
                                    featured
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="other-projects">
                    <SectionHeading
                        title="Other Projects"
                        subtitle="IoT, AI and cloud solutions developed across different domains."
                    />

                    <div className="row gy-4">
                        {otherProjects.map((project) => (
                            <div className="col-lg-4 col-md-6" key={project.id}>
                                <ProjectCard
                                    title={project.title}
                                    company={project.company}
                                    description={project.description}
                                    technologies={project.technologies}
                                    github={project.github}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
