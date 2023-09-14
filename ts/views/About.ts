import { sectionTransition } from "../animation/transition"
import { activeClass, removeHeight } from "../util/utils"
import { ITransitionData } from "@barba/core"

export const aboutView = {
  namespace: "about",
  beforeEnter(data: ITransitionData) {
    removeHeight()
    sectionTransition(data.next.container)
  },
  afterEnter(data: ITransitionData) {
    // activeClass(data.next.container)
  },
}
