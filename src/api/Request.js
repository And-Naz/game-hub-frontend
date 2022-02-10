import FetchApi from "./FetchApi"
export const Ready = "Ready"
export const Loading = "Loading"
export const Statuses = {Ready, Loading}
class Request {
    static Statuses = Object.freeze(Statuses)

    #setStatus(status) {
        switch (status) {
            case Request.Statuses.Ready:
                Object.defineProperty(this, "status", { configurable: true, writable: false, enumerable: true, value: Request.Statuses.Ready })
                Object.defineProperty(this, "isReady", { configurable: true, writable: false, enumerable: true, value: true })
                Object.defineProperty(this, "isPending", { configurable: true, writable: false, enumerable: true, value: false })
                break;
            case Request.Statuses.Loading:
                Object.defineProperty(this, "status", { configurable: true, writable: false, enumerable: true, value: Request.Statuses.Loading })
                Object.defineProperty(this, "isReady", { configurable: true, writable: false, enumerable: true, value: false })
                Object.defineProperty(this, "isPending", { configurable: true, writable: false, enumerable: true, value: true })
                break;
            default:
                break;
        }
    }

    setToken(key, value) {
        this.tokens.set(key, value)
    }
    getToken(key) {
        this.tokens.get(key)
    }
    deleteToken(key) {
        this.tokens.delete(key)
    }

    async login(params) {
        this.#setStatus(Request.Statuses.Loading)
        const response = await FetchApi(this.url + "auth/login", "POST", params)
        this.#setStatus(Request.Statuses.Ready)
        return response
    }
    async register(params) {
        this.#setStatus(Request.Statuses.Loading)
        const response = await FetchApi(this.url + "auth/login", "POST", params)
        this.#setStatus(Request.Statuses.Ready)
        return response
    }
    async getHome() {
        this.#setStatus(Request.Statuses.Loading)
        const response = await FetchApi(this.url, "GET")
        this.#setStatus(Request.Statuses.Ready)
        return response
    }
    constructor(url) {
        Object.defineProperty(this, "url", { configurable: false, writable: false, enumerable: true, value: new URL(url) })
        Object.defineProperty(this, "tokens", { configurable: false, writable: false, enumerable: true, value: new Map })
        Object.defineProperty(this, "status", { configurable: true, writable: false, enumerable: true, value: Request.Statuses.Ready })
        Object.defineProperty(this, "isReady", { configurable: true, writable: false, enumerable: true, value: true })
        Object.defineProperty(this, "isLoading", { configurable: true, writable: false, enumerable: true, value: false })
    }
}

export default Request;