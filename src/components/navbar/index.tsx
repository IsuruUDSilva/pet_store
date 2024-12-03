"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../navigationBarmenu";
import { cn } from "../../utils";
import { products } from "../../data/productList.json";
import Modal from "../modal";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

const info = {
    doctor: {
        title: "Dr. Animal Friend",
        description: "He is the best of the best in area",
        moNumber: "0774141414",
    },
    shop: {
        title: "Mr. Shop Owner",
        description: "Best items for sale in the area",
        moNumber: "0771234567",
    },
};

type ModalInfo = {
    title: string;
    description: string;
    moNumber: string;
};

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalInfomation, setmodalInformation] = useState<ModalInfo | null>(
        null
    );
    const OpenModal = (info: ModalInfo) => {
        setIsOpen(true);
        setmodalInformation(info);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <button onClick={() => OpenModal(info.doctor)}>
                            Doctor Appoinment
                        </button>
                        <button onClick={() => OpenModal(info.shop)}>Contact Shop</button>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        {products.map((item) => (
                            <ProductItem
                                title={item.title}
                                href={item.catogory}
                                src={item.imgSrc}
                            />
                        ))}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Account">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink to="/cart">Go To Cart</HoveredLink>
                        <HoveredLink to="/">Logout</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <div className="text-special-text-color text-xl text-center">
                    {modalInfomation?.title}
                </div>
                <p className="text-center">{modalInfomation?.description}</p>
                <div className="w-full text-center font-semibold">
                    <a
                        href={`tel:${modalInfomation?.moNumber}`}
                        className="text-black text-center w-full"
                    >
                        {" "}
                        Click here To Call {modalInfomation?.moNumber}
                    </a>
                </div>
            </Modal>
        </div>
    );
}
