export type Space = "ABOUT" | "GEOGRAPHY" | "CONTACT"

export function getSpaceColor(type: Space, opacity?: number) {
  switch (type) {
    case "ABOUT":
      return opacity ? `rgba(252,50,88, ${opacity})` : "rgb(252,50,88)"
    case "GEOGRAPHY":
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
    case "GEOGRAPHY":
      return "Geography"
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
    case "GEOGRAPHY":
      return "/geography"
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
    case "/geography":
      return "GEOGRAPHY"
    case "/contact":
      return "CONTACT"
    default:
      return ""
  }
}
