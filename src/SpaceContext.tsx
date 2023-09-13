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

export type SpaceType = "IDEAS" | "FEELINGS" | "NOTES"

export function getSpaceColor(type: SpaceType, opacity?: number) {
  switch (type) {
    case "IDEAS":
      return opacity ? `rgba(0,151,254, ${opacity})` : "rgb(0,151,254)"
    case "FEELINGS":
      return opacity ? `rgba(125,91,235, ${opacity})` : "rgb(125,91,235)"
    case "NOTES":
      return opacity ? `rgba(232, 186,42, ${opacity})` : "rgb(232, 186,42)"
    default:
      return "gray"
  }
}

export function getSpaceName(type: SpaceType) {
  switch (type) {
    case "IDEAS":
      return "Ideas"
    case "FEELINGS":
      return "Feelings"
    case "NOTES":
      return "Notes"
    default:
      return ""
  }
}

export function getSpacePrompt(type?: SpaceType) {
  switch (type) {
    case "IDEAS":
      return "Thoughts?"
    case "FEELINGS":
      return "How are you doing?"
    case "NOTES":
      return "What's new?"
    default:
      return "What's on your mind?"
  }
}
