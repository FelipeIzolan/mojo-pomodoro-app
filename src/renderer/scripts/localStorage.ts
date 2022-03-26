function getLocalStorage(key: string) {
    const data: any = localStorage.getItem(key)
    return JSON.parse(data)
}

function setLocalStorage(key: string, value: any) {
    const data = JSON.stringify(value)
    return localStorage.setItem(key, data)
}

export { getLocalStorage, setLocalStorage }