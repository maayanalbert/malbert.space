import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"
import { getPageColor } from "@/pageHelpers"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div className="h-[85%] w-full flex flex-col sm:items-start items-center justify-center sm:pl-28 sm:p-0 p-8">
      <p className="sm:w-[500px] text-lg" style={{ color: "rgb(28, 28, 28)" }}>
        I studied Design & CS at{" "}
        <a
          // href={link}
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("ABOUT") }}
        >
          Carnegie Mellon
        </a>
        , where I wrote my thesis on{" "}
        <a
          // href={link}
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("ABOUT") }}
        >
          Authoring Environments
        </a>
        .<br />
        <br /> I spent time working at{" "}
        <a
          // href={link}
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("ABOUT") }}
        >
          Apple
        </a>
        ,{" "}
        <a
          // href={link}
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("ABOUT") }}
        >
          Google
        </a>
        , and a few startups, and am now building the voice of the void with{" "}
        <a
          // href={link}
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("ABOUT") }}
        >
          Eve
        </a>
        .
      </p>
    </div>
  )
}
