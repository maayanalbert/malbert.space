export type Space = "ABOUT" | "GEOGRAPHY" | "CONTACT"

export function getSpaceColor(type: Space) {
  switch (type) {
    case "ABOUT":
      return "rgb(252,50,88)"
    case "GEOGRAPHY":
      return "#F6CD00"
    case "CONTACT":
      return "rgb(0,151,254)"
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
