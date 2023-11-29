import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"
import { getPageColor } from "@/pageHelpers"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div
      className="h-[85%] w-full flex flex-col sm:items-start items-center justify-center sm:pl-28 sm:p-0 p-8"
      style={{ color: "rgb(28, 28, 28)" }}
    >
      <p
        className="sm:w-[500px] text-lg  sm:ml-[30%] sm:pt-[275px] sm:text-left text-center"
        style={{ color: "rgb(28, 28, 28)" }}
      >
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
    </div>
  )
}
