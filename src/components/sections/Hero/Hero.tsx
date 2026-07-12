import PERSONAL_INFO from "../../../constants/personal";

import profileImage from "../../../assets/images/mulajim-ali.jpg";
import Button from '../../ui/Button/Button'
import useTypingEffect from "../../../hooks/useTypingEffect";
import { HERO_TYPING_WORDS, HERO_STATS } from "../../../data/hero";
import useResume from "../../../hooks/useResume";
import "./Hero.css";

const Hero = () => {
    const typingText = useTypingEffect(HERO_TYPING_WORDS);
    const { downloadResume } = useResume();

    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content">
                            <span className="hero-greeting">👋 Hello, I'm</span>

                            <h1 className="hero-title">
                                {PERSONAL_INFO.fullName}
                            </h1>

                            <h2 className="hero-designation">
                                {PERSONAL_INFO.designation}

                                <span> • </span>

                                {PERSONAL_INFO.role}
                            </h2>
                            <div className="hero-typing">
                                {typingText}

                                <span className="cursor">|</span>
                            </div>
                            <p className="hero-description">
                                Building scalable enterprise applications,
                                cloud-native solutions and modern web
                                experiences using Python, React, GraphQL and
                                AWS.
                            </p>
                            <div className="hero-skills">
                                {PERSONAL_INFO.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                            <div className="hero-buttons">
                                <Button onClick={downloadResume}>
                                    Download Resume
                                </Button>

                                <Button variant="outline">Contact Me</Button>
                            </div>

                            <div className="hero-stats">
                                {HERO_STATS.map((item) => (
                                    <div
                                        key={item.id}
                                        className="hero-stat-card"
                                    >
                                        <h3>{item.value}</h3>

                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="hero-image">
                            <img
                                src={profileImage}
                                alt={PERSONAL_INFO.fullName}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
