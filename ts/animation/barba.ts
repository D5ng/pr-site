import barba from "@barba/core"
import { startTransition, endTransition, onceTransition } from "./transition"
import { homeView } from "../views/Home"
import { aboutView } from "../views/About"
import { curriculumView } from "../views/Curriculum"
import { CourseTargetView } from "../views/CourseTarget"
import { qnaView } from "../views/qna"

barba.init({
  debug: true,
  views: [homeView, aboutView, curriculumView, CourseTargetView, qnaView],
  transitions: [
    {
      name: "default-transition",
      once(data) {
        onceTransition(data)
        console.log("?")
      },

      async leave(data) {
        await startTransition(data)
      },

      async enter(data) {
        return endTransition(data)
      },
    },
    // {
    //   name: "home",
    //   to: {
    //     namespace: ["home"],
    //   },

    //   once(data) {
    //     return endTransition(data)
    //   },

    //   async leave(data) {
    //     await startTransition(data)
    //   },

    //   async enter(data) {
    //     return endTransition(data)
    //   },
    // },
    // {
    //   name: "about",
    //   to: {
    //     namespace: ["about"],
    //   },

    //   once(data) {
    //     return endTransition(data)
    //   },

    //   async leave(data) {
    //     await startTransition(data)
    //   },

    //   async enter(data) {
    //     return endTransition(data)
    //   },
    // },
    // {
    //   name: "curriculum",
    //   to: {
    //     namespace: ["curriculum"],
    //   },
    //   once(data) {
    //     return endTransition(data)
    //   },

    //   async leave(data) {
    //     await startTransition(data)
    //   },

    //   async enter(data) {
    //     return endTransition(data)
    //   },
    // },
    // {
    //   name: "target",
    //   to: {
    //     namespace: ["target"],
    //   },
    //   once(data) {
    //     return endTransition(data)
    //   },

    //   async leave(data) {
    //     await startTransition(data)
    //   },

    //   async enter(data) {
    //     return endTransition(data)
    //   },
    // },
  ],
})
