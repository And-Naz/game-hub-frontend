import {forwardRef} from 'react';
import './style.css'
import React from "react";
const DefaultImage = forwardRef(({src, alt, className = "", size = "standard", ...otherProps}, ref) => {
    if (!src || !alt) {throw new Error("Attributes src and alt are required.") }
    const sizeClass = (function() {
        switch (size) {
            case "small": return "img img--small";
            case "medium": return "img img--medium";
            case "big": return "img img--big";
            default: return "img";
        }
    })()
    const standardClassNames = className ? sizeClass + " " + className : sizeClass;
    return (
        <img ref={ref} src={src} alt={alt} className={standardClassNames} {...otherProps} />
    );
})

export default DefaultImage;