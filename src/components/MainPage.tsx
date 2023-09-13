import Title from "@/components/Title"
import { createGlobalStyle } from "styled-components"
import { Space, getSpaceColor, useSpacesContext } from "@/SpaceContext"
import SpacesButtons from "./SpacesButtons"
import Section from "./Section"
import { ReactNode } from "react"

/**
 * The main page where all of the content is
 */
export default function MainPage() {
  const curSpace = useSpacesContext().curSpace
  const GlobalStyles = createGlobalStyle`
/* Highlight color */
::selection {
  background-color: ${
    curSpace ? getSpaceColor(curSpace, 0.7) : "rgba(255, 255, 255, .7)"
  };
}
`

  const workItems = [
    { first: "Founder", second: "Eve", link: "" },
    { first: "Founding Engineer", second: "Avenue", link: "" },
    { first: "Co-writer", second: "Stamper", link: "" },
    { first: "Design & CS", second: "Carnegie Mellon", link: "" },
  ]

  const contactItems = [
    { first: "Twitter", second: "_maayanster", link: "" },
    { first: "Github", second: "maayanalbert", link: "" },
    { first: "Email", second: "maayan.albert@gmail.com", link: "" },
    { first: "Linkedin", second: "maayan-albert", link: "" },
  ]

  const locationItems = [
    { first: "Live", second: "New York", link: "" },
    { first: "Often in", second: "San Francisco", link: "" },
    { first: "From", second: "Maryland", link: "" },
  ]

  return (
    <>
      <GlobalStyles />
      <OpacityWrapper visible={!curSpace}>
        <Title />
      </OpacityWrapper>
      <OpacityWrapper visible={!!curSpace}>
        {curSpace === "WORK" && <Section items={workItems} />}
        {curSpace === "CONTACT" && <Section items={contactItems} />}
        {curSpace === "LOCATION" && <Section items={locationItems} />}
      </OpacityWrapper>

      <SpacesButtons />
    </>
  )
}

interface OpacityWrapperProps {
  children: ReactNode
  visible: boolean
}

function OpacityWrapper({ children, visible }: OpacityWrapperProps) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 1s ease-in-out ${visible ? 1 : 0}s`,
      }}
    >
      {children}
    </div>
  )
}

interface SectionWrapperProps {
  children: ReactNode
  space: Space
}

function SectionWrapper({ children, space }: SectionWrapperProps) {
  const { curSpace } = useSpacesContext()
  return (
    <div
      style={{
        margin: curSpace === space ? 0 : space === "CONTACT" ? "10px" : "-10px",
        transition: `all 0.5s cubic-bezier(0, 0.55, 0.45, 1) 0s`,
      }}
    >
      {children}
    </div>
  )
}
