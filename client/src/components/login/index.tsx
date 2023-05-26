import { useState } from "react";
import InputField from "../inputs/inputField";
import styles from "@/styles/styles";
import Button from "../buttons";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [visible, setVisible] = useState(true);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
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

                        <div className={`${styles.normalFlex} justify-between`}>
                            <div className={`${styles.normalFlex}`}>
                                <input
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href=".forgot-password"
                                    className="font-medium text-blue-600 hover:text-blue-500 hover:underline underline-offset-2"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        {/* button */}
                        <div>
                            <Button label="Submit" type="submit" />
                        </div>

                        <div className={`${styles.normalFlex} w-full`}>
                            <h4>Not have any account?</h4>
                            <Link
                                to="/sign-up"
                                className="text-blue-600 pl-2 font-medium hover:underline-offset-1 hover:underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
