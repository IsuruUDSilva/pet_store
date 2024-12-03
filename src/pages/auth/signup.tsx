import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../../components/input";
import Paw from "../../assets/icons/paw";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { signUpStart, signUpSuccess, signUpFailure } from "../../store/userSlice";
import { signupUser } from "../../store/reducers/userSlice";

// Define the types for formData state
interface FormData {
    name: string;
    email: string;
    password: string;
}

type Props = {};

// Simulating an API call with TypeScript type for userData
const fakeApiCall = (userData: FormData): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData.name === "admin") {
                reject("name already taken");
            } else {
                resolve({ id: 1, ...userData });
            }
        }, 1000);
    });
};

const SignUp = (props: Props): JSX.Element => {
    const dispatch = useDispatch();
    // const { loading, error } = useSelector((state: any) => state.user);

    // Define state with correct type
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    // Change handler type definition
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit handler type definition
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        // e.preventDefault();
        // dispatch(signupUser({ name, email, password }));
    };

    return (
        <div className="bg-primary-bg h-screen w-screen place-content-center justify-items-center">
            {false && // Show loading spinner if `loading` is true
                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <img
                        src="../../src/assets/loading/catLoading.gif"
                        alt="Loading"
                        className="w-12 h-12 relative "
                    />
                </div>
            }
            <div className={`bg-primary h-3/4 w-3/4 rounded-xl shadow-2xl md:flex md:flex-row ${false ? "blur-sm" : ""}`}>
                <div className="md:h-full md:w-1/2 font-parkinsans">
                    <div className="text-2xl pl-10 pt-10">Create Your Account</div>
                    <div className="pl-10">Enter Credentials To Create Account</div>
                    <div className="place-items-center">
                        <form className="w-2/3 md:w-1/2 pt-10 md:pt-16 " onSubmit={handleSubmit}>
                            <div>Name</div>
                            <Input
                                name="name"
                                placeholder="Enter Your Name Here"
                                type="text"
                            />
                            <div className="pt-10">Email</div>
                            <Input
                                name="email"
                                placeholder="Enter Your email Here"
                                type="email"
                            />
                            <div className="pt-10">Password</div>
                            <Input
                                name="password"
                                placeholder="Enter Your Password Here"
                                type="password"
                            />
                            <button type="submit" className="p-[3px] relative mt-10 w-full text-center">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                                <div className="px-8 py-2 bg-primary rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                                    <div className="pr-3"> SignUp</div>  <Paw />
                                </div>
                            </button>
                        </form>
                        <div className="pt-7">
                            Already have an account?{" "}
                            <Link to="/" className="text-special-text-color pl-4">
                                SignIn
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h2/3 md:h-full md:w-1/2 md:bg-secondary place-content-center justify-items-center rounded-r-xl sm:relative">
                    <img src="src/assets/images/cat.png" alt="cat" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
