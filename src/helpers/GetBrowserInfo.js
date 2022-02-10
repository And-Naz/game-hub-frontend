function GetBrowserInfo(params) {
    const Edge = "MS Edge"
    const EdgeChromiumBased = "Edge ( chromium based)"
    const Opera = "Opera"
    const Chrome = "Chrome"
    const IE = "MS IE"
    const Firefox = "Mozilla Firefox"
    const Safari = "Safari"
    const Other = "other"

    const Current = (function (agent) {
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

    return {
        isEdge: Current === Edge,
        isEdgeChromiumBased: Current === EdgeChromiumBased,
        isOpera: Current === Opera,
        isChrome: Current === Chrome,
        isIE: Current === IE,
        isFirefox: Current === Firefox,
        isSafari: Current === Safari,
        isOther: Current === Other
    }
}

export default GetBrowserInfo;