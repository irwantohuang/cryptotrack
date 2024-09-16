import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import PlaceholderImage from './../../../public/assets/placeholder.webp'


const ImageVariants = cva('transition-all duration-200 object-cover', {
    variants: {
        variant: {
            profile: "rounded-full",
            thumbnail: "block w-full",
        },
    }
})

type ImageProps = VariantProps<typeof ImageVariants> & ComponentProps<"img">;

const Image = ({ variant, className, src, ...props }: ImageProps ) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src)
    }, [src])

    return <img 
        src={imageSrc}
        onError={() => setImageSrc(PlaceholderImage)}
        {...props} 
        className={twMerge(ImageVariants({ variant }), className)} 
    />
}

export default Image;

