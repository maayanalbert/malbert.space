import {
  Space,
  getSpaceColor,
  getSpaceName,
  useSpacesContext,
} from "@/SpaceContext"

export default function SpacesButtons() {
  return (
    <div className="absolute w-full flex justify-start items-start h-[20%] bottom-0 p-16">
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

  const accentColor = getSpaceColor(space)

  const onPress = () => {
    if (curSpace === space) {
      setCurSpace()
    } else {
      setCurSpace(space)
    }
  }
  return (
    <div className="hover:scale-105 transition ease-in-out">
      <div
        className={`rounded text-center border py-[5px] cursor-pointer 
      transition ease-in-out sm:w-[110px] w-[80px] duration-500 text-sm sm:text-base`}
        style={{
          color: curSpace === space ? "white" : accentColor,
          borderColor: accentColor,
          borderRadius: 7,
          backgroundColor: curSpace === space ? accentColor : "white",
        }}
        onClick={onPress}
      >
        {getSpaceName(space)}
      </div>
    </div>
  )
}
