import { useState } from "react";
import Modal from "../../components/modal";

type Item = {
    name: string;
    price: number;
    image: string;
    availability: boolean;
};
type Props = {}

const ShoppingCart = (props: Props) => {

    const [isBuying, setIsBuying] = useState(true);
    const [itemBuy, setItemBuy] = useState<Item>();
    const [productList, setproductList] = useState();
    const [catogory, setCatogory] = useState<any>();
    const handleBuy = (item: Item) => {
        setIsBuying(true);
        setItemBuy(item);
    };
    const handleCloseModal = () => {
        setIsBuying(false);
    };

    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-3">
                <div className="w-full justify-items-center ">
                    <img src="src\assets\logos\petStore.webp" alt="" className="h-52" />
                </div>
                <div className="text-special-text-color text-xl text-center">
                    milk powder
                </div>
                <div className="font-bold">{itemBuy?.price} USD</div>

            </div>
        </div>
    )
}

export default ShoppingCart