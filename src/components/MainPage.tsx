import Title from "@/components/Title"
import InfoCard from "@/components/InfoCard"
import AlphaCard from "@/components/AlphaCard"
import { CARD_HEIGHT } from "@/constants"
import { createGlobalStyle } from "styled-components"
import { getSpaceColor, useSpacesContext } from "@/SpaceContext"
import SpacesButtons from "./SpacesButtons"

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

  return (
    <>
      <GlobalStyles />
      {/* <div className="flex flex-col justify-center items-center h-full w-full">
        <Title />
      </div> */}
      <SpacesButtons />
    </>
  )
}
