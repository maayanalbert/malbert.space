import {
  Page,
  getPageColor,
  getPageName,
  routerPathToPage,
  pageToRouterPath,
} from "@/pageHelpers"
import { useRouter } from "next/router"
import { useState } from "react"

export default function SpacesButtons() {
  const [hoverButton, setHoverButton] = useState<Page | undefined>()
  return (
    <div className="absolute w-full flex sm:justify-start justify-center sm:p-28 sm:pb-32 p-8 h-[20%] bottom-0">
      <div className="flex flex-row items-center justify-between relative sm:w-fit w-full">
        <HomeButton hoverButton={hoverButton} setHoverButton={setHoverButton} />
        <PageButton
          page="ABOUT"
          hoverButton={hoverButton}
          setHoverButton={setHoverButton}
        />
        <PageButton
          page="CONTACT"
          hoverButton={hoverButton}
          setHoverButton={setHoverButton}
        />
        <PageButton
          page="GEOGRAPHY"
          hoverButton={hoverButton}
          setHoverButton={setHoverButton}
        />
      </div>
    </div>
  )
}

interface HomeButtonProps {
  hoverButton?: Page
  setHoverButton: (page?: Page) => void
}

export function HomeButton({ hoverButton, setHoverButton }: HomeButtonProps) {
  const { route, push } = useRouter()

  const curPage = routerPathToPage(route)

  const onPress = () => {
    push("/")
  }

  return (
    <div
      className={`flex justify-start items-start sm:py-1.5 py-2 cursor-pointer relative 
      sm:w-9 w-full text-sm sm:text-base group`}
      onClick={onPress}
      onMouseEnter={() => setHoverButton("HOME")}
      onMouseLeave={() => setHoverButton()}
    >
      <p
        className={`top-0 absolute h-full ${
          curPage || (hoverButton && hoverButton !== "HOME") ? "w-full" : "w-0"
        }
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: "black" }}
      />
      <div className="flex h-full w-full justify-center items-center">M</div>
    </div>
  )
}

interface PageButtonProps {
  page: Page
  hoverButton?: Page
  setHoverButton: (page?: Page) => void
}

function PageButton({ page, hoverButton, setHoverButton }: PageButtonProps) {
  const { route, push } = useRouter()

  const curPage = routerPathToPage(route)

  const onPress = () => {
    push(pageToRouterPath(page))
  }

  return (
    <div
      className="pl-3"
      onMouseEnter={() => setHoverButton(page)}
      onMouseLeave={() => setHoverButton()}
    >
      <div
        className={`text-center py-1.5 cursor-pointer relative
      sm:w-28 w-full text-base group`}
        onClick={onPress}
      >
        <p
          className={`top-0 absolute h-full ${
            curPage === page ? "w-0" : "w-full"
          }
           transition-all ease-out group-hover:w-[50%]`}
          style={{
            backgroundColor: getPageColor(page),
          }}
        />
        <p // TODO: find out why this shows up as below the background color when it's not absolute
          className="top-0 h-full w-full"
          style={{
            color: "black",
          }}
        >
          {getPageName(page)}
        </p>
      </div>
    </div>
  )
}
