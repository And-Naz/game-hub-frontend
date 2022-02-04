import { useRef, forwardRef, useEffect } from "react";
import DefaultImage from "./DefaultImage"
const ObjectFitImages = import("object-fit-images").then(module => module.default)
const PolyfilledImage = forwardRef(({ className = "", ...otherProps}, ref) => {
    const polyfillClassNames = className ? className + " " + "img--polyfill" : "img--polyfill";
    const imageRef = useRef(ref)
    useEffect(() => {
        ObjectFitImages.then(func => func(imageRef.current))
    }, [])
    return (
        <DefaultImage ref={imageRef} className={polyfillClassNames} {...otherProps} />
    );
})

export default PolyfilledImage;
