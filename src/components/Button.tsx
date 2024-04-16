import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children}) => {
    return (
        <button className="bg-blue-400 w-[90px] py-1 px-1 rounded-md flex items-center justify-center">
            {children}
        </button>
    );
};
