import { useIsMobile, useLowColor } from "@/GlobalsContext"
import {
  SpaceType,
  getSpaceColor,
  getSpaceName,
  getSpacePrompt,
  useSpacesContext,
} from "@/SpaceContext"
import { CARD_HEIGHT } from "@/constants"
import useEventListener from "@/hooks/useEventListener"
import { useEffect, useState } from "react"

/**
 * The title text (your space)
 */
export default function Title() {
  const isMobile = useIsMobile()
  const { curSpace } = useSpacesContext()

  const [prompt, setPrompt] = useState<string>("")
  const [text, setText] = useState<string>("")

  const defaultPromptText = "What's on your mind?"

  // create an event listener for scrolling animation
  useEventListener(
    "scroll",
    () => {
      const scrollHeight = window.scrollY / (window.innerHeight + 1)

      // flashes when it hits 1 so bound at .99
      const boundedScrollHeight = Math.max(Math.min(scrollHeight, 0.99), 0)

      document.documentElement.style.setProperty(
        "--scroll-title",
        `${boundedScrollHeight}` // the % of the way you have scrolled to the second page
      )
    },
    []
  )

  useEffect(() => {
    typeCharacter(0)
  }, [])

  const typeCharacter = (i: number) => {
    setPrompt(defaultPromptText.substring(0, i))
    if (i < defaultPromptText.length) {
      const timeoutLen =
        defaultPromptText[i] === "?"
          ? 500
          : defaultPromptText[i] === " "
          ? 300
          : 100

      const iInc =
        defaultPromptText[i + 1] === " " || defaultPromptText[i + 1] === "?"
          ? 1
          : 2

      setTimeout(() => typeCharacter(i + iInc), timeoutLen)
    }
  }

  return (
    <div
      className="leading-normal flex
    justify-center items-center h-full w-full"
      style={{
        paddingBottom: isMobile ? CARD_HEIGHT / 3 : 0,
      }}
    >
      <div
        className={`lg:w-[490px] w-[305px] relative lg:text-5xl text-3xl`}
        style={{ width: curSpace ? "fit-content" : undefined }}
      >
        <p
          className={` ${
            isMobile ? "font-normal" : "font-light"
          } select-none cursor-default scroll-title bg-black`}
          style={{
            color: text ? "transparent" : "rgb(100, 100, 100)",
          }}
        >
          {prompt}
        </p>
        <input
          className={`${
            isMobile ? "font-normal" : "font-light"
          } w-full h-full absolute top-0 bg-transparent text-black`}
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={{
            caretColor:
              text.length === 0
                ? "transparent"
                : !curSpace
                ? "white"
                : getSpaceColor(curSpace),
            caretShape: "bar",
          }}
        />
        {!text && (
          <div className="animate-pulse">
            <div
              className={`scroll-cursor rounded-full absolute
            lg:h-[80px] lg:w-[4px] lg:top-[-20px] lg:left-[0px]
            h-[45px] w-[3px] top-[-7px] left-[0px]`}
              style={{
                backgroundColor: curSpace ? getSpaceColor(curSpace) : "black",
              }}
            />
          </div>
        )}
      </div>

      <div className="absolute w-full flex justify-center items-center h-[20%] bottom-0">
        <div className="flex flex-row items-center justify-between gap-[12px]">
          <SpaceSelectable space="PLACES" setTitle={setPrompt} />
          <SpaceSelectable space="WORK" setTitle={setPrompt} />
          <SpaceSelectable space="HOBBIES" setTitle={setPrompt} />
        </div>
      </div>
    </div>
  )
}

interface SpaceSelectableProps {
  space: SpaceType
  setTitle: (title: string) => void
}

function SpaceSelectable({ space, setTitle }: SpaceSelectableProps) {
  const { curSpace, setCurSpace } = useSpacesContext()

  const accentColor = getSpaceColor(space)

  const onPress = () => {
    if (curSpace === space) {
      setCurSpace()
      setTitle("What's on your mind?")
    } else {
      setCurSpace(space)
      setTitle(getSpacePrompt(space))
    }
  }
  return (
    <div className="hover:scale-105 transition ease-in-out">
      <div
        className={`rounded text-base text-center border px-[20px] py-[5px] cursor-pointer 
      transition ease-in-out w-[110px] duration-300`}
        style={{
          color: accentColor,
          borderColor: accentColor,
          borderRadius: 7,
          backgroundColor:
            curSpace === space ? getSpaceColor(space, 0.2) : "white",
        }}
        onClick={onPress}
      >
        {getSpaceName(space)}
      </div>
    </div>
  )
}
