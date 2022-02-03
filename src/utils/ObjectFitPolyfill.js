import { lazy } from "react"
import GetBrowserInfo from "../helpers/GetBrowserInfo"
if (GetBrowserInfo()?.isIE) {
    function loadPolyFill() {
        lazy(() => import("objectFitPolyfill").then(polyfill => (console.log("importing Polyfill for IE"), polyfill)))
    }
    document.addEventListener("DOMContentLoaded", loadPolyFill)
    
}