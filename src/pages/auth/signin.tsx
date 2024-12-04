import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paw from "../../assets/icons/paw";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { Input } from "../../components/input";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const { users } = useSelector((state: RootState) => state.auth);

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    });

    const handleLogin = (values: { email: string; password: string }) => {
        setIsLoading(true);

        const user = users.find((u) => u.email === values.email && u.password === values.password);
        if (user) {
            dispatch({ type: "auth/signupUser/fulfilled", payload: user });
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }

        setIsLoading(false);
    };

    return (
        <div className="bg-primary-bg h-screen w-screen place-content-center justify-items-center">
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <img
                        src="../../src/assets/loading/dogLoading.gif"
                        alt="Loading"
                        className="w-24 h-12 relative "
                    />
                </div>
            )}
            <div
                className={`bg-primary h-2/3 w-3/4 rounded-xl shadow-2xl md:flex md:flex-row ${isLoading ? "blur-sm" : ""
                    }`}
            >
                <div className="md:h-full md:w-1/2 font-parkinsans">
                    <div className="text-2xl pl-10 pt-10">Get Started Now</div>
                    <div className="pl-10">Enter Credentials To Start</div>
                    <div className="place-items-center">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form className="w-2/3 md:w-1/2">
                                <div className="pt-16">
                                    <label>Email</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Enter Your email Here"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="pt-10">
                                    <label>Password</label>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your Password Here"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="p-[3px] relative mt-10 w-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                                    <div className="px-8 py-2 bg-primary rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                                        <div className="pr-3">SignIn</div>
                                        <Paw />
                                    </div>
                                </button>
                            </Form>
                        </Formik>
                        <div className="pt-7">
                            Don't have an account?
                            <Link to="/signup" className="text-special-text-color pl-4">
                                SignUp
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:h-full md:w-1/2 md:bg-secondary place-content-center justify-items-center rounded-r-xl sm:relative">
                    <img src="src/assets/images/dog.png" alt="dog" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
