interface ColorMapping {
  [index: string]: string
}

const backgroundMapping: ColorMapping = {
  home: "#F8F0E5",
  about: "#952323",
  curriculum: "#352F44",
  target: "#241468",
  qna: "#FFBB5C",
}

const menuMapping: ColorMapping = {
  home: "#dac0a3",
  about: "#fff3b4",
  curriculum: "#B9B4C7",
  target: "#ea1179",
  qna: "#e25e3e",
}

export const getBackgroundColor = (namespace: string) => backgroundMapping[namespace]
export const getMenuColor = (namespace: string) => menuMapping[namespace]
