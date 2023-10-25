export type Space = "ABOUT" | "GEOGRAPHY" | "CONTACT"

export function getPageColor(type: Space) {
  switch (type) {
    case "ABOUT":
      return "rgb(252,50,88)"
    case "GEOGRAPHY":
      return "#EDC500"
    case "CONTACT":
      return "rgb(0,151,254)"
    default:
      return "gray"
  }
}

export function getPageName(type: Space) {
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

export function pageToRouterPath(page: Space) {
  switch (page) {
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

export function routerPathToPage(path: string) {
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
