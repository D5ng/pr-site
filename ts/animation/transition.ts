import gsap from "gsap"
import { NamespaceMapping, activeClass } from "../util/utils"
import { ITransitionData } from "@barba/core"
import { getBackgroundColor, getMenuColor } from "./colors"

const barbaNamespaceMapping: NamespaceMapping = {
  about: (element) => sectionTransition(element),
  curriculum: (element) => sectionTransition(element),
  target: (element) => sectionTransition(element),
  qna: (element) => sectionTransition(element),
}

const tl = gsap.timeline()

function colorSystem(data: ITransitionData) {
  const menuColor = getMenuColor(data.next.namespace)
  const backgroundColor = getBackgroundColor(data.next.namespace)

  document.body.style.background = backgroundColor
  document.querySelector("header")!.style.color = menuColor
}

export async function onceTransition(data: ITransitionData) {
  colorSystem(data)
  gsap.from("header a", {
    duration: 1,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "power4.out",
  })
}

export async function startTransition(data: ITransitionData) {
  const pathElem = data.current.container.querySelector(".path")! as SVGPathElement
  const position = {
    start: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
    end: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
  }

  const next = await data.next
  const backgroundColor = getBackgroundColor(next.namespace)

  pathElem.attributes[2].value = backgroundColor

  return tl
    .to(pathElem, {
      duration: 1,
      attr: { d: position.start },
      ease: "Power3.easeIn",
      // Power3.easeIn
    })
    .to(pathElem, {
      duration: 1,
      attr: { d: position.end },
      ease: "Power3.easeOut",
    })
    .to(pathElem, {
      duration: 0,
      attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
    })
}

export function endTransition(data: ITransitionData) {
  colorSystem(data)
  if (data.next.namespace !== "home") barbaNamespaceMapping[data.next.namespace](data.next.container)
}

export function sectionTransition(container: HTMLElement) {
  gsap.to("section", {
    duration: 0.5,
    stagger: 0.3,
    opacity: 1,
    ease: "Power3.easeIn",
    onComplete: () => activeClass(container),
  })
}
