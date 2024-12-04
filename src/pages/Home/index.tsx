import { HoverEffect } from "../../components/card-hover-effect";
import { products } from "../../data/productList.json";
import { NavbarDemo } from "../../components/navbar";
import { featured } from "../../data/featuredItems.json";
import Modal from "../../components/modal";
import { useState } from "react";
import ProductListing from "../../components/productListing";
import { useDispatch } from "react-redux";
import { aquatic } from "../../data/aquatic.json";
import { cat } from "../../data/cat.json";
import { dog } from "../../data/dog.json";
import { small_pets } from "../../data/smallPets.json";
import { birds } from "../../data/bird.json";
import { addItem } from "../../store/shopingCart/shopingCartSlice";

type Item = {
    name: string;
    price: number;
    image: string;
    availability: boolean;
};


const Home = () => {
    const dispatch = useDispatch();
    const [isBuying, setIsBuying] = useState(false);
    const [itemBuy, setItemBuy] = useState<Item>();
    const [catogory, setCatogory] = useState<any>(dog);
    const handleAddItem = () => {
        if (itemBuy) {
            dispatch(addItem({ id: Math.floor(Math.random() * 100) + 1, name: itemBuy.name, price: itemBuy.price, quantity: 1 }));
            setIsBuying(false);
        }
    };
    const handleBuy = (item: Item) => {
        setIsBuying(true);
        setItemBuy(item);
    };
    const handleCloseModal = () => {
        setIsBuying(false);
    };
    const productListing = (catogaryData: string) => {
        if (catogaryData === 'cat') {
            setCatogory(cat)
        } else if (catogaryData === 'dog') {
            setCatogory(dog)
        } else if (catogaryData === 'bird') {
            setCatogory(birds)
        } else if (catogaryData === 'aquatic') {
            setCatogory(aquatic)
        } else {
            setCatogory(small_pets)
        }
    };
    return (
        <>
            <div className="w-60 h-40">
                <img src="src\assets\logos\petStore.webp" alt="" />
            </div>
            <NavbarDemo />
            <div className="px-8">
                <div className="text-2xl font-bold text-special-text-color text-center">
                    Select Your Pet
                </div>
                <HoverEffect items={products} handleClick={productListing} />
            </div>
            <div className="text-2xl font-bold text-special-text-color pl-28">
                Featured Products
            </div>
            <div className="flex flex-row justify-center">
                {featured.map((item: Item, index) => (
                    <div key={item.name + index} className="rounded-xl m-10 p-5 w-60 shadow-xl bg-primary-bg">
                        <div className="h-32 w-40">
                            <img
                                src="src\assets\logos\petStore.webp"
                                alt=""
                                className="w-32"
                            />
                        </div>
                        <h2 className="h-12 text-left text-2xl md:text-xl font-semibold tracking-[-0.015em] text-special-text-color">
                            {item.name}
                        </h2>

                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            {item.price} USD
                        </p>
                        <button
                            className="p-[3px] relative mt-10 w-full"
                            onClick={() => handleBuy(item)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                            <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                                <div className="pr-3">Add To Cart</div>
                            </div>
                        </button>
                        {item.availability === true ? (
                            <div className="text-bermuda">Available</div>
                        ) : (
                            <div className="text-purple-500">Not Available</div>
                        )}
                    </div>
                ))}
            </div>
            <ProductListing catogoryData={catogory} handleBuyItem={handleBuy} />
            <Modal isOpen={isBuying} onClose={handleCloseModal}>
                <div className="text-special-text-color text-xl text-center">
                    {itemBuy?.name}
                </div>
                <div className="w-full justify-items-center">
                    <img src="src\assets\logos\petStore.webp" alt="" className="h-52" />
                </div>
                <p>Are you sure you want to buy this item?</p>
                <button className="p-[3px] relative mt-10 w-full" onClick={handleAddItem}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-green rounded-lg" />
                    <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                        <div className="pr-3">
                            Add To Cart <div className="font-bold">{itemBuy?.price} USD</div>
                        </div>
                    </div>
                </button>
                <button
                    onClick={handleCloseModal}
                    className="p-[3px] relative mt-5 w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-red rounded-lg" />
                    <div className="px-8 py-2  bg-primary rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                        <div className="pr-3">Cancel</div>
                    </div>
                </button>
            </Modal>
        </>
    );
};

export default Home;
