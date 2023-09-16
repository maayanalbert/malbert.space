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
        first: "Always reachable at",
        second: "maayan.albert@gmail.com",
        link: "mailto:maayan.albert@gmail.com",
      },
    ],
  ]

  return <Section rows={content} space={"ABOUT"} />
}
