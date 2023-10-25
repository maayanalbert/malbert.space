import {
  Space as Page,
  getPageColor,
  getPageName,
  routerPathToPage,
  pageToRouterPath,
} from "@/pageHelpers"
import { HomeIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export default function SpacesButtons() {
  return (
    <div className="absolute w-full flex sm:justify-start justify-center sm:p-28 sm:pb-32 p-8 h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between gap-3 relative sm:w-fit w-full">
        <HomeButton />
        <PageButton page="ABOUT" />
        <PageButton page="CONTACT" />
        <PageButton page="GEOGRAPHY" />
      </div>
    </div>
  )
}

export function HomeButton() {
  const { route, push } = useRouter()

  const curSpace = routerPathToPage(route)

  const onPress = () => {
    push("/")
  }

  return (
    <div
      className={`flex justify-start items-start sm:py-1.5 py-2 cursor-pointer relative 
      sm:w-9 w-full text-sm sm:text-base group`}
      onClick={onPress}
    >
      <p
        className={`top-0 absolute h-full ${curSpace ? "w-full" : "w-0"}
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: "black" }}
      />
      <div className="flex h-full w-full justify-center items-center">M</div>
    </div>
  )
}

interface PageButtonProps {
  page: Page
}

function PageButton({ page }: PageButtonProps) {
  const { route, push } = useRouter()

  const curSpace = routerPathToPage(route)

  const onPress = () => {
    push(pageToRouterPath(page))
  }
  return (
    <div
      className={`text-center py-1.5 cursor-pointer relative 
      sm:w-28 w-full text-base group`}
      onClick={onPress}
    >
      <p
        className={`top-0 absolute h-full ${
          page === curSpace ? "w-0" : "w-full"
        }
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: getPageColor(page) }}
      />
      <p // TODO: find out why this shows up as below the background color when it's not absolute
        className="top-0 h-full w-full"
        style={{ color: "black" }}
      >
        {getPageName(page)}
      </p>
    </div>
  )
}
