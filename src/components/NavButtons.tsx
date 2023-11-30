import { usePageContext } from "@/PageContext"
import {
  Page as Page,
  getPageColor,
  getPageName,
  routerPathToPage,
  pageToRouterPath,
} from "@/pageHelpers"
import { HomeIcon } from "@heroicons/react/24/outline"
import { set } from "lodash"
import { useRouter } from "next/router"

export default function NavButtons() {
  return (
    <div className="absolute w-full flex sm:justify-start justify-center sm:p-28 sm:pb-24 p-8 bottom-0">
      <div className="flex flex-row items-center justify-between relative sm:w-fit w-full">
        <HomeButton />
        <PageButton page="ABOUT" index={0} />
        <PageButton page="CONTACT" index={1} />
        <PageButton page="GEOGRAPHY" index={2} />
      </div>
    </div>
  )
}

export function HomeButton() {
  const { curPage, setCurPage, curHoverIndex, setCurHoverIndex } =
    usePageContext()

  const onPress = () => {
    setCurPage()
  }

  return (
    <div
      className={`flex justify-start items-start sm:py-1.5 py-2 cursor-pointer relative 
      sm:w-9 w-full text-sm sm:text-base group`}
      onClick={onPress}
      onMouseOver={() => setCurHoverIndex(-1)}
      onMouseOut={() => setCurHoverIndex()}
    >
      <p
        className={`top-0 absolute h-full ${curPage ? "w-full" : "w-0"}
           transition-all ease-out group-hover:w-0`}
        style={{ backgroundColor: "black" }}
      />
      <div className="flex h-full w-full justify-center items-center">M</div>
    </div>
  )
}

interface PageButtonProps {
  page: Page
  index: number
}

function PageButton({ page, index }: PageButtonProps) {
  const { curPage, setCurPage, setCurHoverIndex } = usePageContext()

  const onPress = () => {
    setCurPage(page)
  }
  return (
    <div
      className={`text-center py-1.5 cursor-pointer relative 
      sm:w-28 w-full text-base group`}
      onClick={onPress}
      onMouseOver={() => setCurHoverIndex(index)}
      onMouseOut={() => setCurHoverIndex()}
    >
      <p
        className={`top-0 absolute h-full ${page === curPage ? "w-0" : "w-full"}
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
