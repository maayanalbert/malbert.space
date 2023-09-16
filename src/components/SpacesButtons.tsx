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
        <SpaceSelectable space="WORK" />
        <SpaceSelectable space="CONTACT" />
        <SpaceSelectable space="LOCATION" />
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
