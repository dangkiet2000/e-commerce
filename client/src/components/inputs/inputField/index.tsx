import { ChangeEvent } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputFieldProps {
    value: string;
    setValue: (newValue: string) => void;
    type?: string;
    className?: string;
    name?: string;
    autoComplete?: string;
    label?: string;
    isVisible?: boolean;
    visible?: boolean;
    setVisible?: (value: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    setValue,
    type,
    className,
    name,
    autoComplete,
    label,
    isVisible,
    visible = false,
    setVisible,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleIsVisible = () => {
        setVisible?.(!visible);
    };
    return (
        <div>
            <label
                htmlFor={`${type}`}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="mt-1 relative">
                <input
                    type={type}
                    name={name}
                    autoComplete={autoComplete}
                    required
                    value={value}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
                />

                {isVisible && !visible && (
                    <AiOutlineEye
                        size={25}
                        className="cursor-pointer absolute top-2 right-2 rounded-lg"
                        onClick={handleIsVisible}
                    />
                )}

                {isVisible && visible && (
                    <AiOutlineEyeInvisible
                        size={25}
                        className="cursor-pointer absolute top-2 right-2 rounded-lg"
                        onClick={handleIsVisible}
                    />
                )}
            </div>
        </div>
    );
};

export default InputField;
