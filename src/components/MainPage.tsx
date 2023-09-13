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

  const workItems = [
    { first: "Founder", second: "Eve", link: "https://www.eve.space/" },
    {
      first: "Founding Engineer",
      second: "Avenue",
      link: "https://avenue.app/",
    },
    {
      first: "Co-writer",
      second: "Stamper",
      link: "https://paper.dropbox.com/doc/Stamper-An-Artboard-Oriented-Programming-Environment-QXtfMXshBFBNCu6iCtx2J",
    },
    {
      first: "Design & CS",
      second: "Carnegie Mellon",
      link: "https://www.cmu.edu/",
    },
  ]

  const contactItems = [
    {
      first: "Twitter",
      second: "_maayanster",
      link: "https://twitter.com/_maayanster",
    },
    {
      first: "Github",
      second: "maayanalbert",
      link: "https://github.com/maayanalbert",
    },
    {
      first: "Email",
      second: "maayan.albert",
      link: "mailto:maayan.albert@gmail.com",
    },
    {
      first: "Linkedin",
      second: "maayan-albert",
      link: "https://www.linkedin.com/in/maayan-albert/",
    },
  ]

  const locationItems = [
    {
      first: "Live",
      second: "New York",
      link: "https://www.google.com/maps/place/Manhattan,+New+York,+NY/@40.7591622,-74.0516318,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
    },
    {
      first: "Often in",
      second: "San Francisco",
      link: "https://www.google.com/maps/place/San+Francisco,+CA/@37.757807,-122.5200009,12z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu",
    },
    {
      first: "From",
      second: "Maryland",
      link: "https://www.google.com/maps/place/Bethesda,+MD/@38.9850764,-77.162964,12.73z/data=!4m6!3m5!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092!16zL20vMGJ4YnI?entry=ttu",
    },
  ]

  return (
    <>
      <OpacityWrapper visible={!curSpace}>
        <Title />
      </OpacityWrapper>
      <OpacityWrapper visible={!!curSpace}>
        {/* figure out how to anticipate unmout so we can have them transiton out too */}
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
        transition: `opacity 0.2s ease-in-out ${visible ? 0.2 : 0}s`,
      }}
    >
      {children}
    </div>
  )
}
