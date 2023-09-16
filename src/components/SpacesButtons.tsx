import { useIsMobile } from "@/GlobalsContext"
import {
  Space,
  getSpaceColor,
  getSpaceName,
  useSpacesContext,
} from "@/SpaceContext"
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default function SpacesButtons() {
  const { curSpace } = useSpacesContext()
  const isMobile = useIsMobile()

  return (
    <div className="absolute w-full flex justify-start items-start sm:p-28 sm:pb-32 p-8 h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between sm:gap-3 gap-3 relative">
        {curSpace && (
          <div
            className="absolute right-full"
            style={{
              right: isMobile ? undefined : "calc(100% + .75rem)",
              left: isMobile ? "0" : undefined,
              top: isMobile ? "calc(100% + .75rem)" : undefined,
            }}
          >
            <BackSelectable />
          </div>
        )}
        <SpaceSelectable space="WORK" />
        <SpaceSelectable space="CONTACT" />
        <SpaceSelectable space="LOCATION" />
      </div>
    </div>
  )
}

function BackSelectable() {
  const { curSpace, setCurSpace } = useSpacesContext()

  const onPress = () => {
    setCurSpace()
  }

  return (
    <div
      className={`flex justify-start items-start sm:py-1.5 py-1 cursor-pointer relative 
      sm:w-10 w-10 text-sm sm:text-base group`}
      onClick={onPress}
    >
      <p
        className={`top-0 absolute h-full ${curSpace ? "w-full" : "w-0"}
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: "black" }}
      />
      <div className="flex h-full w-full justify-center items-center">
        <ArrowLeftIcon className="h-6 w-6" />
      </div>
    </div>
  )
}

interface SpaceSelectableProps {
  space: Space
}

function SpaceSelectable({ space }: SpaceSelectableProps) {
  const { curSpace, setCurSpace } = useSpacesContext()

  const onPress = () => {
    setCurSpace(space)
  }
  return (
    <div
      className={`text-center py-1.5 cursor-pointer relative 
      sm:w-28 w-20 :text-base group`}
      onClick={onPress}
    >
      <p
        className={`top-0 absolute h-full ${
          space === curSpace ? "w-0" : "w-full"
        }
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: getSpaceColor(space) }}
      />
      <p // TODO: find out why this shows up as below the background color when it's not absolute
        className="top-0 h-full w-full"
        style={{ color: "black" }}
      >
        {getSpaceName(space)}
      </p>
    </div>
  )
}
