import { useState } from "react";
import InputField from "../inputs/inputField";
import styles from "@/styles/styles";
import Button from "../buttons";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [visible, setVisible] = useState(true);

    const [avatar, setAvatar] = useState<File | null>(null);

    const handleFileInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        setAvatar(file as File);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register a new user
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <InputField
                            value={name}
                            setValue={setName}
                            label="Full name"
                            type="fullname"
                            name="fullname"
                            autoComplete="fullname"
                        />

                        <InputField
                            value={email}
                            setValue={setEmail}
                            label="Email address"
                            type="email"
                            name="email"
                            autoComplete="email"
                        />

                        <InputField
                            value={password}
                            isVisible
                            type={visible ? "password" : "text"}
                            setValue={setPassword}
                            name="password"
                            autoComplete="current-password"
                            label="Password"
                            visible={visible}
                            setVisible={setVisible}
                        />

                        {/* Upload avatar */}
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8 text-gray-500" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5 flex items-center cursor-pointer justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        hidden
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        id="file-input"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Register button */}
                        <Button label="Register" type="submit" />

                        <div className={`${styles.normalFlex} w-full`}>
                            <h4>Already have an account?</h4>
                            <Link
                                to="/login"
                                className="text-blue-600 pl-2 font-medium hover:underline-offset-1 hover:underline"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
