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
    const [catogoryName, setCatogoryName] = useState<any>('dog');
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
            setCatogoryName('cat')
        } else if (catogaryData === 'dog') {
            setCatogory(dog)
            setCatogoryName('dog')
        } else if (catogaryData === 'bird') {
            setCatogory(birds)
            setCatogoryName('bird')
        } else if (catogaryData === 'aquatic') {
            setCatogory(aquatic)
            setCatogoryName('aquatic')
        } else {
            setCatogory(small_pets)
            setCatogoryName('small pets')
        }
    };
    return (
        <>
            <div className="pt-20 lg:pt-0 flex items-center lg:block">
                <img src="src\assets\logos\petStore.webp" alt="" className="w-24 lg:w-60" />
                <div className="lg:hidden text-2xl font-bold text-special-text-color text-center w-full lg:text -left lg:w-auto">
                    Select Your Pet
                </div>
            </div>
            <NavbarDemo />
            <div className="px-8">
                <div className="hidden lg:block text-2xl font-bold text-special-text-color text-center">
                    Select Your Pet
                </div>
                <HoverEffect items={products} handleClick={productListing} />
            </div>
            <div className="text-2xl font-bold text-special-text-color text-center lg:text-left lg:pl-28 pb-5">
                Featured Products
            </div>
            <div className="flex flex-col gap-3 md:gap-6 md:flex-row justify-center lg:justify-start items-center mb-10 lg:mb-0 px-10 flex-wrap">
                {featured.map((item: Item, index) => (
                    <div key={item.name + index} className="flex flex-col items-center rounded-xl max-w-52 lg:m-10  lg:p-5 lg:w-60 shadow-xl bg-primary-bg">
                        <div className="h-32 w-40">
                            <img
                                src="src\assets\logos\petStore.webp"
                                alt=""
                                className="w-32"
                            />
                        </div>
                        <h2 className="h-12 text-center lg:text-left text-lg md:text-xl font-semibold tracking-[-0.015em] text-special-text-color pb-5">
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
            <ProductListing petName={catogoryName} catogoryData={catogory} handleBuyItem={handleBuy} />
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
