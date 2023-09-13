import {
  Space,
  getSpaceColor,
  getSpaceName,
  useSpacesContext,
} from "@/SpaceContext"

export default function SpacesButtons() {
  return (
    <div className="absolute w-full flex justify-center items-center h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between gap-[12px]">
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
        className={`rounded text-base text-center border px-[20px] py-[5px] cursor-pointer 
      transition ease-in-out w-[110px] duration-500`}
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
