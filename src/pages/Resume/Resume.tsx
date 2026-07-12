import Button from "../../components/ui/Button/Button";
import useResume from "../../hooks/useResume";

import SEO from "../../components/seo/SEO";
import "./Resume.css";

const Resume = () => {
    const { downloadResume } = useResume();
    return (
        <>
            <SEO
                title="Resume"
            />

            <section className="resume-page">
                <div className="container">
                    <div className="resume-header">
                        <div>
                            <h1>My Resume</h1>

                            <p>
                                View my professional experience, projects,
                                technical expertise and career journey.
                            </p>
                        </div>

                        <Button onClick={downloadResume}>
                            Download Resume
                        </Button>
                    </div>

                    <div className="resume-viewer">
                        <iframe
                            src="/resume/Mulajim-Ali-Resume.pdf"
                            title="Mulajim Ali Resume"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
