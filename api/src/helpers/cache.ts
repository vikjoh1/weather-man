interface CacheItem {
  data: any
  expiry: number
}

// Lifetime of cache is stored in milliseconds
const CACHE_LIFETIME_MS = 10 * 60 * 1000

// Includes methods to get and set cached result. This saves on API requests :)
class MyCache {
  private myCache: { [key: string]: CacheItem } = {}

  get(key: string): any | null {
    const item = this.myCache[key]
    if (item && Date.now() < item.expiry) {
      return item.data
    }
    delete this.myCache[key]
    return null
  }

  set(key: string, data: any): void {
    this.myCache[key] = {
      data,
      expiry: Date.now() + CACHE_LIFETIME_MS,
    }
  }
}

// New instance for every export
export default new MyCache()