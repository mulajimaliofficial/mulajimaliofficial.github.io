import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline";
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

const Button = ({
    children,
    variant = "primary",
    type = "button",
    onClick,
    className = "",
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`app-button app-button-${variant} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
