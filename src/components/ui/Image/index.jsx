import {forwardRef, lazy, Suspense} from "react";
import DefaultImage from "./DefaultImage";
import GetBrowserInfo from "../../../helpers/GetBrowserInfo"
import React from "react";
const PolyfilledImage = lazy(() => import("./PolyfilledImage"))
const {isIE} = GetBrowserInfo()
const Image = forwardRef((props, ref) => {
    return (
        isIE
        ?   <Suspense fallback={"IE Image"}>
                <PolyfilledImage ref={ref} {...props} />
            </Suspense>
        :   <DefaultImage ref={ref} {...props} />
    )
})

export default Image;
