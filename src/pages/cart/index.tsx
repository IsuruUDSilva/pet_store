import { useState } from "react";
import Modal from "../../components/modal";
import ShopingItem from "../../components/shopingItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    clearCart
} from "../../store/shopingCart/shopingCartSlice";
import { Input } from "../../components/input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paw from "../../assets/icons/paw";
import { Link } from "react-router-dom";

const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
});

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const [total, setTotal] = useState<Number>(0);

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteItem(id));
    };

    const [isBuying, setIsBuying] = useState(false);
    const handleBuy = () => {
        const fullBill = items.reduce((sum, item) => {
            return sum + Number(item.price) * Number(item.quantity);
        }, 0);

        setTotal(Number(fullBill.toFixed(2)));
        setIsBuying(true);
    };
    const handleCloseModal = () => {
        setIsBuying(false);
    };
    const handleSubmit = () => {
        alert("Checkout successful!");
        dispatch(clearCart());
        setIsBuying(false);
    };

    return (
        <>
            <div className="w-full h-screen bg-primary-bg">
                <div className="w-full grid grid-cols-3 pt-10">
                    <div className="w-full justify-items-center ">
                        <Link to={"/home"}>
                            <img
                                src="src\assets\logos\petStore.webp"
                                alt=""
                                className="h-52"
                            />
                        </Link>
                    </div>
                    <div className="text-special-text-color text-3xl text-center font-bold">
                        Shoping Cart
                    </div>
                    <div className="bg-primary-bg px-10 items-center justify-self-center place-content-center">
                        <button
                            className="p-[3px] relative mt-10 w-48"
                            onClick={handleBuy}
                            disabled={items.length === 0}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                            <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                                <div className="pr-3">Buy</div>
                            </div>
                        </button>
                    </div>
                </div>
                {items.length === 0 ? (
                    <div className="justify-items-center">
                        <div className="text-center text-2xl text-special-text-color font-semibold">
                            Your Shoping Cart Is Empty
                        </div>
                        <div className="mt-10">
                            <Link
                                to='/home'
                                className="px-4 py-2 bg-gradient-to-r from-primary-bg to-secondary text-black rounded hover:bg-blue-600 transition border mt-10"
                            >
                                Back To Home
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="px-10">
                        {items.map((item) => (
                            <ShopingItem
                                key={item.id}
                                itemToBuy={item}
                                quantity={item.quantity}
                                onIncrease={() => handleIncrease(item.id)}
                                onDecrease={() => handleDecrease(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Modal isOpen={isBuying} onClose={handleCloseModal}>
                <div className="max-w-md  mt-10 p-5 rounded-lg bg-white">
                    <h1 className="text-2xl font-bold text-center mb-5">Checkout Form</h1>
                    <div className="w-full mr-10 my-5 bg-white h-40 overflow-y-auto">
                        {items.map((item) => (
                            <div className="flex flex-row my-3 mx-2 px-2 py-2 shadow-xl rounded-lg">
                                <div className="text-md text-special-text-color content-center">
                                    {item.name}
                                </div>
                                <div className="text-sm text-special-text-color pl-10 content-center">
                                    Price: ${item.price} | Quantity: {item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            address: "",
                            phone: "",
                        }}
                        validationSchema={CheckoutSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block font-medium">
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-medium">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block font-medium">
                                        Address
                                    </label>
                                    <Input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Enter your address"
                                    />
                                    <ErrorMessage
                                        name="address"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block font-medium">
                                        Phone
                                    </label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>USD {Number(total)}</div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-4 py-2 bg-gradient-to-r from-primary-bg to-secondary text-black rounded hover:bg-blue-600 transition border"
                                    >
                                        <div className="flex flex-row">
                                            {isSubmitting ? "" : "Checkout "} <Paw />
                                        </div>
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default ShoppingCart;
