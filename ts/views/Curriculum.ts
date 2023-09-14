import { sectionTransition } from "../animation/transition"
import { setHeight } from "../util/utils"
import { ITransitionData } from "@barba/core"

export const curriculumView = {
  namespace: "curriculum",
  beforeEnter(data: ITransitionData) {
    setHeight()
    sectionTransition(data.next.container)
  },
}
