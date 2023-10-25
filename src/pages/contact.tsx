import { useEffect } from "react"
import SpacesButtons from "@/components/NavButtons"
import Section, { Row } from "@/components/Section"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const content: Row[] = [
    [
      {
        first: "Reachable at",
        second: "maayan@eve.space",
        link: "mailto:maayan@eve.space",
      },
    ],
  ]

  return <Section rows={content} space={"CONTACT"} />
}
