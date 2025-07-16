import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signupUser } from "../../store/user/userSlice";
import Paw from "../../assets/icons/paw";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { useState } from "react";

const SignUp = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required  okk"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
        setIsLoading(true)
        try {
            await dispatch(signupUser(values)).unwrap();
            alert("Signup successful!");
            navigate("/home");
        } catch (err: any) {
            alert(err.message || "Signup failed");
        } finally {
            setSubmitting(false);
        }
        setIsLoading(false)
    };

    return (
        <div className="bg-primary-bg h-screen w-screen place-content-center justify-items-center">
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <img
                        src="../../src/assets/loading/catLoading.gif"
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
                    <div className="text-xl md:text-2xl px-10 pt-10">Create Your Account</div>
                    <div className="px-10 text-sm md:text-base">Enter your credentials to create an account</div>
                    <div className="place-items-center">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className="w-2/3 md:w-1/2">
                                <div className="pt-5 md:pt-8">
                                    <label>Name</label>
                                    <Input
                                        name="name"
                                        type="text"
                                        placeholder="Enter Your email Here"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="pt-8">
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
                                <div className="pt-8">
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
                                        <div className="pr-3">SignUp</div>
                                        <Paw />
                                    </div>
                                </button>
                            </Form>
                        </Formik>
                        <div className="pt-7 text-sm md:text-base">
                            Already have an account?
                            <Link to="/" className="text-special-text-color pl-4">
                                SignIn
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:h-full md:w-1/2 md:bg-secondary place-content-center justify-items-center rounded-r-xl sm:relative">
                    <img src="src/assets/images/cat.png" alt="dog" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
