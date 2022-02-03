export const Edge = "MS Edge"
export const EdgeChromiumBased = "Edge ( chromium based)"
export const Opera = "Opera"
export const Chrome = "Chrome"
export const IE = "MS IE"
export const Firefox = "Mozilla Firefox"
export const Safari = "Safari"
export const Other = "other"

export const Current = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return Edge;
        case agent.indexOf("edg/") > -1: return EdgeChromiumBased;
        case agent.indexOf("opr") > -1 && !!window.opr: return Opera;
        case agent.indexOf("chrome") > -1 && !!window.chrome: return Chrome;
        case agent.indexOf("trident") > -1: return IE;
        case agent.indexOf("firefox") > -1: return Firefox;
        case agent.indexOf("safari") > -1: return Safari;
        default: return Other;
    }
})(window.navigator.userAgent.toLowerCase());

export const isEdge = Current === Edge
export const isEdgeChromiumBased = Current === EdgeChromiumBased
export const isOpera = Current === Opera
export const isChrome = Current === Chrome
export const isIE = Current === IE
export const isFirefox = Current === Firefox
export const isSafari = Current === Safari
export const isOther = Current === Other