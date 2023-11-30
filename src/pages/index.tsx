import { usePageContext } from "@/PageContext"
import NavButtons from "@/components/NavButtons"
import { Page, getPageColor } from "@/pageHelpers"
import { set } from "lodash"
import { ReactNode, useEffect, useMemo, useState } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const { curHoverIndex, curPage } = usePageContext()

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
          {curPage === "ABOUT" && (
            <InfoWrapper index={0}>
              <AboutInfo />
            </InfoWrapper>
          )}
          <InfoWrapper index={1}>
            <ContactInfo />
          </InfoWrapper>
          <InfoWrapper index={2}>
            <GeographyInfo />
          </InfoWrapper>
        </div>
      </div>
      <NavButtons />
    </>
  )
}

interface Props {
  index: number
  children: ReactNode
}

function InfoWrapper({ index, children }: Props) {
  const { curHoverIndex, curIndex } = usePageContext()

  const [opacity, setOpacity] = useState(1)

  const [isPreviewing, setIsPreviewing] = useState(false)

  useEffect(() => {
    if (
      isPreviewing &&
      curHoverIndex !== undefined &&
      curHoverIndex !== curIndex &&
      curHoverIndex !== -1
    ) {
      setOpacity(0)
      setTimeout(() => setIsPreviewing(false), 150)
    } else {
      setOpacity(1)
    }

    setIsPreviewing(curHoverIndex !== curIndex && curHoverIndex === index)
  }, [curHoverIndex])

  return (
    <div
      className="absolute w-full"
      style={{
        left: index === curIndex ? 0 : "100%",
        opacity,
        marginLeft: isPreviewing ? -200 : 0,
        transitionProperty: "margin-left, opacity",
        transitionDuration: `${
          curHoverIndex !== undefined ? "325ms" : "300ms"
        }, 150ms`,
        transitionTimingFunction: `${
          curHoverIndex !== undefined ? "ease-in" : "ease-out"
        }, ease-out`,
      }}
    >
      {children}
    </div>
  )
}

function GeographyInfo() {
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
      .
    </p>
  )
}

function ContactInfo() {
  return (
    <p className="text-lg">
      You can reach me at{" "}
      <a
        // href={link}
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("CONTACT") }}
      />
    </p>
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
