import { routerPathToSpace } from "@/spacesHelpers"
import { HomeIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export function HomeButton() {
  const { route, push } = useRouter()

  const curSpace = routerPathToSpace(route)

  const onPress = () => {
    push("/")
  }

  if (!curSpace) return null

  return (
    <div className="absolute top-0 right-0 sm:p-28 sm:pt-24 p-8">
      <div
        className={`flex justify-start items-start sm:py-1.5 py-1 cursor-pointer relative 
      sm:w-9 w-8 text-sm sm:text-base group`}
        onClick={onPress}
      >
        <p
          className={`top-0 absolute h-full ${curSpace ? "w-full" : "w-0"}
           transition-all ease-out group-hover:w-0`}
          style={{ backgroundColor: "black" }}
        />
        <div className="flex h-full w-full justify-center items-center">
          <HomeIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}
