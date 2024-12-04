import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

type Item = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type ShoppingItemProps = {
    itemToBuy: Item;
    quantity: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
};

const ShopingItem = (props: ShoppingItemProps) => {
    return (
        <div className="w-full shadow-xl rounded-xl p-5  mr-10 my-5 bg-white grid grid-cols-4">
            <div>
                <div className="text-xl text-special-text-color pl-10 content-center">{props.itemToBuy.name}</div>
                <div className=" text-special-text-color pl-10 content-center">Price: ${props.itemToBuy.price} | Quantity: {props.itemToBuy.quantity}</div>
            </div>

            <div></div>
            <div className="grid grid-cols-3 justify-self-center text-center items-center">
                <button
                    onClick={() => props.onIncrease(props.itemToBuy.id)}
                    className="flex items-center px-6 py-3 text-black rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-special-text-color focus:ring-opacity-50 transition"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                {props.itemToBuy.quantity}
                <button
                    onClick={() => props.onDecrease(props.itemToBuy.id)}
                    className="flex items-center px-6 py-3 text-black rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-special-text-color focus:ring-opacity-50 transition"
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div className="justify-self-center">
                <button
                    onClick={() => props.onDelete(props.itemToBuy.id)}
                    className="flex items-center px-6 py-3 text-black rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red focus:ring-opacity-50 transition"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ShopingItem;
