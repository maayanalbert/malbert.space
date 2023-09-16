import {
  Space,
  getSpaceColor,
  getSpaceName,
  routerPathToSpace,
  spaceToRouterPath,
} from "@/spacesHelpers"
import { useRouter } from "next/router"

export default function SpacesButtons() {
  return (
    <div className="absolute w-full flex sm:justify-start justify-center sm:p-28 sm:pb-32 p-8 h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between gap-3 relative sm:w-fit w-full">
        <SpaceSelectable space="ABOUT" />
        <SpaceSelectable space="CONTACT" />
        <SpaceSelectable space="GEOGRAPHY" />
      </div>
    </div>
  )
}

interface SpaceSelectableProps {
  space: Space
}

function SpaceSelectable({ space }: SpaceSelectableProps) {
  const { route, push } = useRouter()

  const curSpace = routerPathToSpace(route)

  const onPress = () => {
    push(spaceToRouterPath(space))
  }
  return (
    <div
      className={`text-center py-1.5 cursor-pointer relative 
      sm:w-28 w-full :text-base group`}
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
