import { getPageColor } from "@/pageHelpers"
import { useEffect } from "react"

export function GeographyInfo() {
  return (
    <p className="text-lg">
      While I live in{" "}
      <a
        // href={link}
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY") }}
      >
        New York
      </a>
      , I can often be found in{" "}
      <a
        // href={link}
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY") }}
      >
        San Francisco
      </a>{" "}
      and am originally from{" "}
      <a
        // href={link}
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY") }}
      >
        Maryland
      </a>
    </p>
  )
}
