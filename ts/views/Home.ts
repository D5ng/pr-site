import { removeClass, setHeight } from "../util/utils"
import move from "../animation/textMove"
import { ITransitionData } from "@barba/core"

export const homeView = {
  namespace: "home",
  beforeEnter(data: ITransitionData) {
    removeClass(data.next.container)
    setHeight()
  },
  afterEnter() {
    move()
  },
}
