import { routerPathToSpace } from "@/spacesHelpers"
import { HomeIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export function HomeButton() {
  const { route, push } = useRouter()

  const curSpace = routerPathToSpace(route)

  const onPress = () => {
    push("/")
  }

  return (
    <div
      className={`flex justify-start items-start sm:py-1.5 py-1 cursor-pointer relative 
      sm:w-9 w-8 text-sm sm:text-base group h-9`}
      onClick={onPress}
    >
      <p
        className={`top-0 absolute h-full ${curSpace ? "w-full" : "w-0"}
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: "black" }}
      />
      <p // TODO: find out why this shows up as below the background color when it's not absolute
        className="top-0 h-full w-full"
        style={{ color: "black" }}
      >
        M
      </p>
    </div>
  )
}
