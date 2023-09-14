export interface NamespaceMapping {
  [index: string]: (data: HTMLElement) => void
}

export const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

export const setHeight = () => (document.body.style.height = `${window.innerHeight}px`)
export const removeHeight = () => (document.body.style.height = `auto`)

export const activeClass = (element: HTMLElement) => element.classList.add("active")
export const removeClass = (element: HTMLElement) => element.classList.remove("active")
