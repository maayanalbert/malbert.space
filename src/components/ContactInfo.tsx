import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"
import { getPageColor } from "@/pageHelpers"

export default function ContactInfo() {
  return (
    <p>
      You can reach me at{" "}
      <a
        // href={link}
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("CONTACT") }}
      >
        maayan@eve.space
      </a>
    </p>
  )
}
