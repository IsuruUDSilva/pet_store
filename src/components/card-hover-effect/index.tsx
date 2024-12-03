import { cn } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
    handleClick
}: {
    items: {
        title: string;
        description?: string;
        catogory: string;
        imgSrc?: string;
    }[];
    className?: string;
    handleClick: (data: string) => void;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <div
            className={cn(
                "grid grid-cols-3 md:grid-cols-5  py-10 ",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.catogory}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-zinc-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card imgSrc={item.imgSrc} handleClick={handleClick} catogory={item?.catogory}>
                        <CardTitle>{item.title}</CardTitle>
                        {item.description && <CardDescription>{item.description}</CardDescription>}
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
    imgSrc,
    catogory,
    handleClick
}: {
    className?: string;
    children: React.ReactNode;
    imgSrc?: string
    catogory: string
    handleClick: (data: string) => void;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-secondary border border-transparent dark:border-white/[0.2] group-hover:border-zinc-800 relative z-20",
                className
            )}
            onClick={() => handleClick(catogory)}
        >
            <img src={imgSrc} alt="dog" className="absolute w-20" />
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-special-text-color font-bold tracking-wide mt-4 text-center", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-white tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
