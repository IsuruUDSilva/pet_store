import { useState } from 'react'

type Item = {
  name: string;
  price: number;
  image: string;
  availability: boolean;
};

type Props = {
  catogoryData: Record<string, Item[]>;
  handleBuyItem: (item: Item) => void;
};

const ProductListing = (props: Props) => {
  const categories = ["food", "equipment", "cage", "medicine", "other"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <div className="text-2xl font-bold mb-4 ml-14">
            {category.charAt(0).toUpperCase() + category.slice(1)} Items
          </div>
          <div className="flex flex-row flex-wrap">
            {props.catogoryData?.[category]?.length > 0 ? (
              props.catogoryData[category].map((item, index) => (
                <div
                  key={item.name + index}
                  className="rounded-xl m-10 p-5 w-60 shadow-xl bg-primary-bg flex flex-col items-center"
                >
                  <div className="h-32 w-40">
                    <img
                      src="src/assets/logos/petStore.webp"
                      alt=""
                      className="w-32"
                    />
                  </div>
                  <h2 className="h-12 text-center lg:text-left text-lg md:text-xl font-semibold tracking-[-0.015em] text-special-text-color pb-5">
                    {item.name}
                  </h2>

                  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    {item.price} USD
                  </p>
                  <button
                    className="p-[3px] relative mt-10 w-full"
                    onClick={() => props.handleBuyItem(item)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-secondary rounded-lg" />
                    <div className="px-8 py-2 bg-primary rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent flex flex-row justify-center">
                      <div className="pr-3">Add To Cart</div>
                    </div>
                  </button>
                  {item.availability === true ? (
                    <div className="text-bermuda">Available</div>
                  ) : (
                    <div className="text-purple-500">Not Available</div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-neutral-500 ml-10 px-5 py-10">
                No products for this category
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
