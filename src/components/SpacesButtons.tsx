import {
  Space,
  getSpaceColor,
  getSpaceName,
  useSpacesContext,
} from "@/SpaceContext"

export default function SpacesButtons() {
  return (
    <div className="absolute w-full flex justify-start items-start sm:p-16 p-8 h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between sm:gap-[12px] gap-[6px]">
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
    if (curSpace === space) {
      setCurSpace()
    } else {
      setCurSpace(space)
    }
  }
  return (
    <div
      className={`text-center py-[5px] cursor-pointer relative 
      sm:w-[110px] w-[80px] text-sm sm:text-base group`}
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
        className="top-0 h-full transition-all ease-in-out w-full"
        style={{ color: "black" }}
      >
        {getSpaceName(space)}
      </p>
    </div>
  )
}
