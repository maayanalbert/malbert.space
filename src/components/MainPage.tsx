import Title from "@/components/Title"
import Cloud from "@/components/Cloud"
import InfoCard from "@/components/InfoCard"
import AlphaCard from "@/components/AlphaCard"
import { CARD_HEIGHT } from "@/constants"
import { createGlobalStyle } from "styled-components"
import { getSpaceColor, useSpacesContext } from "@/SpaceContext"

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
  // color: black;
}
`

  return (
    <>
      <GlobalStyles />
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Title />
      </div>

      <div className="flex flex-col items-center" style={{ paddingTop: 0 }}>
        <div style={{ height: "7vh", width: "100vw" }} />

        <InfoCard />
        <div style={{ height: "7vh", width: "100vw" }} />
        <AlphaCard />
        {/* the bottom padding */}
        <div className="relative w-full">
          <div style={{ height: `calc(50vh - ${180}px)`, width: "100vw" }} />
        </div>
        {/* */}
      </div>
    </>
  )
}
