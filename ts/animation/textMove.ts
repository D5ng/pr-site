type HeadingElement = HTMLHeadElement

let speed: number = -window.innerWidth * 0.9
let rafId: number = 0

export default function move() {
  const textElem = document.querySelector(".loading h2") as HeadingElement

  if (!textElem) {
    window.cancelAnimationFrame(rafId)
    return
  }

  speed = initialSpeed(textElem)
  speed += 3

  textElem.style.left = `${-speed}px`
  rafId = window.requestAnimationFrame(move)
}

function initialSpeed(textElem: HeadingElement) {
  return speed > textElem.clientWidth ? (speed = -window.innerWidth * 0.9) : speed
}
