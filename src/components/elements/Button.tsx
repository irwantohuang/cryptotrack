import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonVariants  = cva('transition-all duration-150', {
    variants: {
        variant: {
            default: "bg-primary hover:bg-primary/80",
            outline: "border-2 border-primary hover:bg-primary-200",
            ghost: "bg-transparent hover:bg-primary-black-200 hover:text-primary-white"
        },
        size: {
            default: "rounded p-2",
            pill: "rounded-full px-6 py-2",
            icon: "flex items-center justify-center w-10 h-10 rounded-full p-2.5"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

interface ButtonProps extends VariantProps<typeof buttonVariants>, ComponentProps<"button"> {

};

const Button = ({ variant, className, size, children, ...props }: ButtonProps) => {
    return (
        <button 
            {...props}
            className={twMerge(buttonVariants({ variant, size }), className)}
        >
            {children} 
        </button>

    )
}

export default Button