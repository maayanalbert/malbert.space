import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"

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
    <div className="h-full w-full">
      <div
        className="absolute sm:pl-28 pl-8"
        style={{ bottom: `calc(50% + ${6 * 4}px)` }}
      >
        <Item item={reachMe} page={"CONTACT"} />
      </div>
    </div>
  )
}
