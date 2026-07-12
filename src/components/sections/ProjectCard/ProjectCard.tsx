import Button from "../../ui/Button/Button";
import "./ProjectCard.css";

interface ProjectCardProps {
    title: string;
    company: string;
    description: string;
    technologies: string[];
    featured?: boolean;
    github?: string;
}

const ProjectCard = ({
    title,
    company,
    description,
    technologies,
    featured = false,
    github,
}: ProjectCardProps) => {
    return (
        <div className={`project-card ${featured ? "featured" : ""}`}>
            {featured && (
                <div className="featured-container">
                    <span className="featured-badge">Featured</span>
                </div>
            )}
            <div className="project-content">
                <p className="project-company">{company}</p>

                <h3 className="project-title">{title}</h3>

                <p className="project-description">{description}</p>

                <div className="project-technologies">
                    {technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-buttons">
                    <Button>View Details</Button>

                    {github ? (
                        <Button variant="outline">GitHub</Button>
                    ) : (
                        <Button variant="outline">Private</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
