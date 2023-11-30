import NavButtons from "@/components/NavButtons"
import { Page, getPageColor } from "@/pageHelpers"
import { useEffect, useState } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div className="h-[85%] w-full flex flex-col sm:items-start items-center justify-center sm:pl-28">
        <p
          className="font-semibold sm:text-9xl text-5xl sm:leading-normal leading-tight sm:text-left text-center"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          Hi, I'm Maayan
        </p>
        <div className="relative w-full ml-[10px]">
          <div
            className="absolute w-full"
            style={{
              marginLeft: hovering ? -200 : 0,
              transitionProperty: "margin-left",
              transitionDuration: hovering ? "400ms" : "300ms",
              transitionTimingFunction: hovering ? "ease-in" : "ease-out",
            }}
          >
            <AboutInfo />
          </div>
          <div
            className="absolute left-[100%] w-full"
            style={{
              marginLeft: hovering ? -200 : 0,
              transitionProperty: "margin-left",
              transitionDuration: hovering ? "400ms" : "300ms",
              transitionTimingFunction: hovering ? "ease-in" : "ease-out",
            }}
          >
            <AboutInfo />
          </div>
        </div>
      </div>
      <div
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <NavButtons />
      </div>
    </>
  )
}

function AboutInfo() {
  return (
    <p className="text-lg">
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
      I've worked at{" "}
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
  )
}
