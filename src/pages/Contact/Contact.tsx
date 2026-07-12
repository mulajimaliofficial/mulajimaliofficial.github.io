import { useState } from "react";
import { toast } from "react-toastify";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";

import "./Contact.css";

const Contact = () => {
    const initialForm = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialForm);
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        toast.success("Thank you! Your message has been sent successfully.");

        setFormData(initialForm);
    };
    return (
        <section className="contact">
            <div className="container">
                <SectionHeading
                    title="Let's Connect"
                    subtitle="Have a project in mind or looking for a Full Stack Developer? Feel free to reach out."
                />

                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="bi bi-envelope-fill"></i>

                                <div>
                                    <h4>Email</h4>

                                    <a href="mailto:mulajimali786@gmail.com">
                                        mulajimali786@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-telephone-fill"></i>

                                <div>
                                    <h4>Phone</h4>

                                    <a href="tel:+919044142673">
                                        +91 9044142673
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-geo-alt-fill"></i>

                                <div>
                                    <h4>Location</h4>

                                    <p>New Delhi, India</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-linkedin"></i>

                                <a
                                    href="https://in.linkedin.com/in/mulajim-ali-877910176"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/mulajim-ali
                                </a>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-github"></i>

                                <div>
                                    <h4>GitHub</h4>

                                    <a
                                        href="https://github.com/mulajimaliofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        github.com/mulajimaliofficial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>

                                <textarea
                                    rows={6}
                                    placeholder="Write your message..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
