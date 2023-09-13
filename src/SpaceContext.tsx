import exp from "constants"
import { createContext, ReactNode, useContext, useState } from "react"

interface SpaceContextType {
  curSpace?: Space
  setCurSpace: (space?: Space) => void
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
  const [curSpace, setCurSpace] = useState<Space | undefined>()

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

export type Space = "WORK" | "LOCATION" | "CONTACT"

export function getSpaceColor(type: Space, opacity?: number) {
  switch (type) {
    case "WORK":
      return opacity ? `rgba(252,50,88, ${opacity})` : "rgb(252,50,88)"
    case "LOCATION":
      return opacity ? `rgba(232, 186,42, ${opacity})` : "rgb(232, 186,42)"
    case "CONTACT":
      return opacity ? `rgba(0,151,254, ${opacity})` : "rgb(0,151,254)"
    default:
      return "gray"
  }
}

export function getSpaceName(type: Space) {
  switch (type) {
    case "WORK":
      return "Work"
    case "LOCATION":
      return "Location"
    case "CONTACT":
      return "Contact"
    default:
      return ""
  }
}
