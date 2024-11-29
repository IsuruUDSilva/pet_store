import React from "react";
import { Input } from "../../components/input";
import Paw from "../../assets/icons/paw";
import { Link } from "react-router-dom";

type Props = {};

const SignIn = (props: Props) => {
    return (
        <div className="bg-primary-bg h-screen w-screen place-content-center justify-items-center">
            <div className="bg-primary h-3/4 w-3/4 rounded-xl shadow-2xl flex flex-row">
                <div className="h-full w-1/2 font-parkinsans">
                    <div className="text-2xl pl-10 pt-10">Get Started Now</div>
                    <div className="pl-10">Enter Credentials To Start</div>
                    <div className="place-items-center">
                        <div className="w-1/2 pt-16">
                            <div>Email</div>
                            <Input id="firstname" placeholder="Enter Your email Here" type="email" />
                        </div>
                        <div className="w-1/2 pt-10">
                            <div>Password</div>
                            <Input id="firstname" placeholder="Enter Your Password Here" type="password" />
                        </div>
                        <button className="p-[3px] relative mt-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                            <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                                SignIn
                            </div>
                        </button>
                        <div className="pt-7">Don't have a account?<Link to="/signup" className="text-special-text-color pl-4">SignUp</Link></div>
                    </div>
                </div>
                <div className="h-full w-1/2 bg-secondary place-content-center justify-items-center rounded-r-xl">
                    <img src="src\assets\images\dog.png" alt="dog" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
