import { useEffect } from "react"
import Title from "@/components/Title"
import SpacesButtons from "@/components/SpacesButtons"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div>
      <Title />
    </div>
  )
}
