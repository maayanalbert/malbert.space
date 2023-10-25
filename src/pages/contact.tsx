import { useEffect } from "react"
import SpacesButtons from "@/components/NavButtons"
import Section, { Item, Row } from "@/components/Section"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const reachMe = {
    first: "You can reach me at",
    second: "maayan@eve.space",
    link: "mailto:maayan@eve.space",
  }

  return (
    <div
      className={`absolute flex-col h-full w-full sm:p-28 p-8 flex items-start justify-start 
      h-[90%] sm:text-2xl text-lg text-center flex-col sm:mt-[92px]`}
      style={{ top: 38 * 4 }}
    >
      <Item item={reachMe} page={"CONTACT"} />
    </div>
  )
}
