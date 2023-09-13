import exp from "constants"
import { createContext, ReactNode, useContext, useState } from "react"

interface SpaceContextType {
  curSpace?: SpaceType
  setCurSpace: (space?: SpaceType) => void
}

/**
 * Create the context
 */
const SpaceContext = createContext<SpaceContextType>({
  curSpace: undefined,
  setCurSpace: () => undefined,
})

interface Props {
  children: ReactNode
}

/**
 * Create the provider that everything that uses the context should be wrapped in
 */
export function SpaceContextProvider({ children }: Props) {
  const [curSpace, setCurSpace] = useState<SpaceType | undefined>()

  return (
    <SpaceContext.Provider
      value={{
        curSpace,
        setCurSpace,
      }}
    >
      {children}
    </SpaceContext.Provider>
  )
}

export function useSpacesContext(): SpaceContextType {
  const context = useContext(SpaceContext)
  return context
}

export type SpaceType = "WORK" | "PLACES" | "HOBBIES"

export function getSpaceColor(type: SpaceType, opacity?: number) {
  switch (type) {
    case "WORK":
      return opacity ? `rgba(252,50,88, ${opacity})` : "rgb(252,50,88)"
    case "PLACES":
      return opacity ? `rgba(0,151,254, ${opacity})` : "rgb(0,151,254)"
    case "HOBBIES":
      return opacity ? `rgba(232, 186,42, ${opacity})` : "rgb(232, 186,42)"

    // `rgba(252,50,88, ${opacity})` : "rgb(252,50,88)"
    default:
      return "gray"
  }
}

export function getSpaceName(type: SpaceType) {
  switch (type) {
    case "WORK":
      return "Work"
    case "PLACES":
      return "Places"
    case "HOBBIES":
      return "Hobbies"
    default:
      return ""
  }
}

export function getSpacePrompt(type?: SpaceType) {
  switch (type) {
    case "WORK":
      return "Thoughts?"
    case "PLACES":
      return "How are you doing?"
    case "HOBBIES":
      return "What's new?"
    default:
      return "What's on your mind?"
  }
}
