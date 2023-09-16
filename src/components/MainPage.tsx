import Title from "@/components/Title"
import { createGlobalStyle } from "styled-components"
import { Space, getSpaceColor, useSpacesContext } from "@/SpaceContext"
import SpacesButtons from "./SpacesButtons"
import Section, { Item, Row } from "./Section"
import { ReactNode, useEffect, useState } from "react"

/**
 * The main page where all of the content is
 */
export default function MainPage() {
  const curSpace = useSpacesContext().curSpace

  const workContent: Row[] = [
    [
      {
        first: "I studied Design & CS at",
        second: "Carnegie Mellon",
        link: "https://www.design.cmu.edu/user/967",
      },
      {
        first: "where I wrote my thesis on",
        second: "Authoring Environments",
        link: "https://paper.dropbox.com/doc/Stamper-An-Artboard-Oriented-Programming-Environment-QXtfMXshBFBNCu6iCtx2J",
      },
    ],
    [
      {
        first: "I scaled Avenue Ops as their",
        second: "Founding Engineer",
        link: "https://avenue.so/blog/avenue-launches-signal-views",
      },
      {
        first: "and am now making us all more mature with",
        second: "Eve",
        link: "https://www.eve.space/",
      },
    ],
  ]

  const contactContent = [
    [
      {
        first: "Always reachable at",
        second: "maayan.albert@gmail.com",
        link: "mailto:maayan.albert@gmail.com",
      },
    ],
  ]

  const locationContent = [
    [
      {
        first: "I live in",
        second: "New York",
        link: "https://www.google.com/maps/place/Manhattan,+New+York,+NY/@40.7591622,-74.0516318,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
      {
        first: "but am often in",
        second: "San Francisco",
        link: "https://www.google.com/maps/place/San+Francisco,+CA/@37.757807,-122.5200009,12z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu",
      },
    ],
    [
      {
        first: "Originally from",
        second: "Maryland",
        link: "https://www.google.com/maps/place/Bethesda,+MD/@38.9850764,-77.162964,12.73z/data=!4m6!3m5!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092!16zL20vMGJ4YnI?entry=ttu",
      },
    ],
  ]

  return (
    <div>
      <OpacityWrapper visible={!curSpace}>
        <Title />
      </OpacityWrapper>
      <OpacityWrapper visible={!!curSpace}>
        <SectionOpacityWrapper visible={curSpace === "WORK"}>
          <Section rows={workContent} space={"WORK"} />
        </SectionOpacityWrapper>
        <SectionOpacityWrapper visible={curSpace === "CONTACT"}>
          <Section rows={contactContent} space={"CONTACT"} />
        </SectionOpacityWrapper>
        <SectionOpacityWrapper visible={curSpace === "LOCATION"}>
          <Section rows={locationContent} space={"LOCATION"} />
        </SectionOpacityWrapper>
      </OpacityWrapper>
      <SpacesButtons />
    </div>
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
        transition: `opacity 0.2s ease-in-out ${visible ? 0.2 : 0}s`,
      }}
    >
      {children}
    </div>
  )
}

interface SectionOpacityWrapperProps {
  children: ReactNode
  visible: boolean
}

function SectionOpacityWrapper({
  visible,
  children,
}: SectionOpacityWrapperProps) {
  const { curSpace } = useSpacesContext()
  const [renderSection, setRenderSection] = useState(visible)

  useEffect(() => {
    if (!visible && !curSpace) {
      setTimeout(() => {
        setRenderSection(false)
      }, 200)
    } else {
      setRenderSection(visible)
    }
  }, [visible])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        // delay the opacity changing to it can fade in the parent wrapper
        transition: !visible && !curSpace ? `opacity 0s ease-in-out 0.2s` : "",
      }}
    >
      {renderSection && children}
    </div>
  )
}
