import {forwardRef} from 'react';
import GetBrowserInfo from "../../../helpers/GetBrowserInfo"
import './style.css'
const Image = forwardRef(({src, alt, className = "", size = "standard", ...otherProps}, ref) => {
    if (!src || !alt) {throw new Error("Attributes src and alt are required.") }
    const sizeClass = (function() {
        switch (size) {
            case "small": return "img img--small";
            case "medium": return "img img--medium";
            case "big": return "img img--big";
            default: return "img";
        }
    })()
    const commonClassNames = className ? sizeClass + " " + className : sizeClass
    const polyfill = GetBrowserInfo()?.isIE ? {"data-object-fit": "cover"} : {}
    return (
        <img ref={ref} src={src} alt={alt} className={commonClassNames} {...otherProps} {...polyfill}/>
    );
})

export default Image;
