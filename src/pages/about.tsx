import { useEffect } from "react"
import SpacesButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div className="h-full w-full">
      <div style={{ bottom: `calc(50% - ${11 * 4}px)` }}>
        <p>
          I studied design and CS at Carnegie Mellon, where I wrote my thesis on
          authoring environments.
        </p>
      </div>
    </div>
  )
}
