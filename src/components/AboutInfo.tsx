import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"
import { getPageColor } from "@/pageHelpers"

export function AboutInfo() {
  return (
    <p>
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
      <br className="sm:hidden" />
      After working at{" "}
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
      , and a few startups, I'm now building the voice of the void with{" "}
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
  )
}
