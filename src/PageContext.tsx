import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { Page } from "./pageHelpers"

export const Pages = ["ABOUT", "CONTACT", "GEOGRAPHY"]

interface PageContextType {
  curPage?: Page
  curPageIndex: number // -1 - 2
  setCurPage: (page?: Page) => void
}

/**
 * Create the context
 */
const PageContext = createContext<PageContextType>({
  curPage: undefined,
  curPageIndex: 0,
  setCurPage: () => undefined,
})

interface Props {
  children: ReactNode
}

/**
 * Create the provider that everything that uses the context should be wrapped in
 */
export function PageContextProvider({ children }: Props) {
  const [curPage, setCurPage] = useState<Page>()
  const [curPageIndex, setCurPageIndex] = useState(0)

  return (
    <PageContext.Provider
      value={{
        curPageIndex,
        curPage,
        setCurPage: (page) => {
          if (page) {
            setCurPage(page)
            setCurPageIndex(Pages.indexOf(page))
          } else {
            setCurPage(undefined)
            setCurPageIndex(-1)
          }
        },
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

/**
 * Use the context
 */
export function usePageContext(): PageContextType {
  const context = useContext(PageContext)
  return context
}
