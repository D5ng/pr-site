import { removeClass, setHeight } from "../util/utils"
import move from "../animation/textMove"
import { ITransitionData } from "@barba/core"

export const qnaView = {
  namespace: "qna",
  beforeEnter(data: ITransitionData) {
    removeClass(data.next.container)
    setHeight()
  },
  afterEnter() {
    move()
  },
}
