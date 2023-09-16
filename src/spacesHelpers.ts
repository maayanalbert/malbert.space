export type Space = "ABOUT" | "LOCATION" | "CONTACT"

export function getSpaceColor(type: Space, opacity?: number) {
  switch (type) {
    case "ABOUT":
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
    case "ABOUT":
      return "About"
    case "LOCATION":
      return "Location"
    case "CONTACT":
      return "Contact"
    default:
      return ""
  }
}

export function spaceToRouterPath(space: Space) {
  switch (space) {
    case "ABOUT":
      return "/about"
    case "LOCATION":
      return "/location"
    case "CONTACT":
      return "/contact"
    default:
      return ""
  }
}

export function routerPathToSpace(path: string) {
  switch (path) {
    case "/about":
      return "ABOUT"
    case "/location":
      return "LOCATION"
    case "/contact":
      return "CONTACT"
    default:
      return ""
  }
}
