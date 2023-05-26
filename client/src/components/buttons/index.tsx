interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    label: string;
}
const Button: React.FC<ButtonProps> = ({ type, onClick, label }) => {
    return (
        <button
            type={type}
            className={`group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
