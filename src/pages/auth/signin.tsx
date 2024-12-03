import { Input } from "../../components/input";
import Paw from "../../assets/icons/paw";
import { Link } from "react-router-dom";

type Props = {};

const SignIn = (props: Props) => {
    return (
        <div className="bg-primary-bg h-screen w-screen place-content-center justify-items-center">
            {false && // Show loading spinner if `loading` is true
                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <img
                        src="../../src/assets/loading/dogLoading.gif"
                        alt="Loading"
                        className="w-24 h-12 relative "
                    />
                </div>
            }
            <div className={`bg-primary h-2/3 w-3/4 rounded-xl shadow-2xl md:flex md:flex-row ${false ? "blur-sm" : ""}`}>
                <div className="md:h-full md:w-1/2 font-parkinsans">
                    <div className="text-2xl pl-10 pt-10">Get Started Now</div>
                    <div className="pl-10">Enter Credentials To Start</div>
                    <div className="place-items-center">
                        <form className="w-2/3 md:w-1/2 ">
                            <div className="pt-16">
                                <div>Email</div>
                                <Input id="firstname" placeholder="Enter Your email Here" type="email" />
                            </div>
                            <div className="pt-10">
                                <div>Password</div>
                                <Input id="firstname" placeholder="Enter Your Password Here" type="password" />
                            </div>
                            <button className="p-[3px] relative mt-10 w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                                <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                                    <div className="pr-3">SignIn</div><Paw />
                                </div>
                            </button>
                        </form>
                        <div className="pt-7">Don't have a account?<Link to="/signup" className="text-special-text-color pl-4">SignUp</Link></div>
                    </div>
                </div>
                <div className="md:h-full md:w-1/2 md:bg-secondary place-content-center justify-items-center rounded-r-xl sm:relative">
                    <img src="src\assets\images\dog.png" alt="dog" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
