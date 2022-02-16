export default async function FetchApi(url, method = "GET", body = null, headers = {}) {
    if (method === "GET") {
        return await fetch(url).then(res => res.json())
    }
    headers['Content-Type'] = 'application/json'
    const params = {method, headers}
    if (body !== null) {
        params.body = JSON.stringify(body)
    }
    return await fetch(url, params).then(res => res.json())
}