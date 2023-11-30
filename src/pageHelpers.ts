export type Page = "ABOUT" | "GEOGRAPHY" | "CONTACT"

export function getPageColor(type: Page, text?: boolean) {
  switch (type) {
    case "ABOUT":
      return "rgb(255,70,100)"
    case "GEOGRAPHY":
      return text ? "#D9AE00" : "#EBC737"
    case "CONTACT":
      return "rgb(0,151,254)"
    default:
      return "gray"
  }
}

export function getPageName(type: Page) {
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

export function pageToRouterPath(page: Page) {
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
