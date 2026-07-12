import "./SectionHeading.css";

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    align?: "left" | "center";
}

const SectionHeading = ({
    title,
    subtitle,
    align = "center",
}: SectionHeadingProps) => {
    return (
        <div className={`section-heading section-heading-${align}`}>
            <span className="section-heading-tag">Explore My Work</span>

            <h2 className="section-heading-title">{title}</h2>

            <p className="section-heading-subtitle">{subtitle}</p>
        </div>
    );
};

export default SectionHeading;
