import { useIsMobile } from "@/GlobalsContext"
import { SpaceType, getSpaceColor, useSpacesContext } from "@/SpaceContext"
import { CARD_HEIGHT } from "@/constants"
import getOnIpad from "@/helpers/getOnIpad"
import { setCardScrollClass } from "@/helpers/setCardScrollClass"
import useEventListener from "@/hooks/useEventListener"
import { useRef } from "react"

/**
 * A chunk of text providing a bit of information about what the company does
 */
export default function InfoCard() {
  const isMobile = useIsMobile()
  const cardRef = useRef<HTMLDivElement>(null)

  // create an event listener for scrolling animation
  useEventListener(
    "scroll",
    () => {
      // disable scroll effects on ipad
      if (getOnIpad(navigator)) {
        // the title
        setCardScrollClass(0, 200, 200, `--scroll-card-0-title`)

        // the subtitle
        setCardScrollClass(0, 200, 200, `--scroll-card-0-body`)
        return
      }

      // get the current center of the card
      const cardTopPosition = cardRef.current?.getBoundingClientRect().top
      if (!cardTopPosition) return
      const cardCenter = cardTopPosition + CARD_HEIGHT / 2

      const screenCenter = window.innerHeight / 2

      const cardDistFromCenter = cardCenter - screenCenter
      const scrollDurationBase = (window.innerHeight * 4.25) / 5

      // the subtitle
      setCardScrollClass(
        cardDistFromCenter,
        scrollDurationBase * 0.3,
        scrollDurationBase * 0.3,
        `--scroll-card-0-body`
      )
    },
    [cardRef]
  )

  return (
    <div
      className="flex flex-col justify-center items-start w-[300px]"
      style={{
        height: CARD_HEIGHT,
        fontSize: 36,
      }}
      ref={cardRef}
    >
      <div
        className={`flex flex-col gap-2 scroll-card-0-body text-xl ${
          isMobile ? "font-normal" : "font-light"
        }`}
        style={{ color: "gray" }}
      >
        <p>Founder @ Eve</p>
        <p>Founding Engineer @ Avenue</p>
        <p>Co-writer @ Stamper</p>
        <p>Design & CS @ Carnegie</p>
      </div>
    </div>
  )
}

function ExampleContent() {
  const isMobile = useIsMobile()
  const { curSpace } = useSpacesContext()
  if (curSpace === "WORK" || !curSpace) {
    return (
      <>
        <div
          className={isMobile ? "font-bold" : "font-semibold"}
          style={{ color: "black" }}
        >
          <p>{`"Need to end presentation on a high note"`}</p>
        </div>
        <div style={{ color: "gray" }} className="relative">
          <p>{"Reference Macintosh 1984 ad?"}</p>
          <div
            className="animate-pulse absolute left-0 rounded-full"
            style={{
              height: 24,
              width: 2,
              top: -2,
              backgroundColor: curSpace ? getSpaceColor(curSpace) : "black",
            }}
          />
        </div>
      </>
    )
  } else if (curSpace === "PLACES") {
    return (
      <>
        <div
          className={isMobile ? "font-bold" : "font-semibold"}
          style={{ color: "black" }}
        >
          <p>{`"I'm overwhelmed, I want to run"`}</p>
        </div>
        <div style={{ color: "gray" }} className="relative">
          <p>Why?</p>
          <div
            className="animate-pulse absolute left-0 rounded-full"
            style={{
              height: 24,
              width: 2,
              top: -2,
              backgroundColor: curSpace ? getSpaceColor(curSpace) : "black",
            }}
          />
        </div>
      </>
    )
  } else if (curSpace === "HOBBIES") {
    return (
      <>
        <div
          className={isMobile ? "font-bold" : "font-semibold"}
          style={{ color: "black" }}
        >
          <p>{`"Groceries: eggs, boodles, broccoli"`}</p>
        </div>
        <div style={{ color: "gray" }} className="relative">
          <p>Chili oil?</p>
          <div
            className="animate-pulse absolute left-0 rounded-full"
            style={{
              height: 24,
              width: 2,
              top: -2,
              backgroundColor: curSpace ? getSpaceColor(curSpace) : "white",
            }}
          />
        </div>
      </>
    )
  } else {
    return null
  }
}
