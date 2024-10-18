

export const useUrl = relativePath => {
    return new URL(`../assets/images/${relativePath}`, import.meta.url).href
  }
  