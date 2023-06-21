
const set = (key, value) => {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        window.localStorage.setItem(key, value)
    }
}

const remove = (key) => {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        window.localStorage.removeItem(key)
    }
}

const get = (key) => {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        const item = window.localStorage.getItem(key)
        if (!item || item==="undefined") return null
        return JSON.parse(item)
    } else {
        return null
    }
}

const clear = () => {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        window.localStorage.clear()
    }
}
export const LocalStorage = {
    set,
    remove,
    get,
    clear
}