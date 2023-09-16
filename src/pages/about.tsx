import { useEffect } from "react"
import SpacesButtons from "@/components/SpacesButtons"
import Section, { Row } from "@/components/Section"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const content: Row[] = [
    [
      {
        first: "I studied Design & CS at",
        second: "Carnegie Mellon",
        link: "https://www.design.cmu.edu/user/967",
      },
      {
        first: "where I wrote my thesis on",
        second: "Authoring Environments",
        link: "https://paper.dropbox.com/doc/Stamper-An-Artboard-Oriented-Programming-Environment-QXtfMXshBFBNCu6iCtx2J",
      },
    ],
    [
      {
        first: "I scaled Avenue Ops as their",
        second: "Founding Engineer",
        link: "https://avenue.so/blog/avenue-launches-signal-views",
      },
      {
        first: "and am now improving EQs with",
        second: "Eve",
        link: "https://www.eve.space/",
      },
    ],
  ]

  return <Section rows={content} space={"ABOUT"} />
}
