import { useEffect } from "react"
import SpacesButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div className="h-full w-full">
      <div
        className="absolute sm:pl-28 pl-8"
        style={{ bottom: `calc(50% - ${11 * 4}px)` }}
      >
        <div className="flex flex-col sm:gap-14 gap-12 items-start">
          <div className="flex flex-col sm:gap-2 gap-1" key={0}>
            <Item
              key={0}
              item={{
                first: "I studied Design & CS at",
                second: "Carnegie Mellon",
                link: "https://www.design.cmu.edu/user/967",
              }}
              page={"ABOUT"}
            />
            <Item
              key={1}
              item={{
                first: "where I wrote my thesis on",
                second: "Authoring Environments",
                link: "https://paper.dropbox.com/doc/Stamper-An-Artboard-Oriented-Programming-Environment-QXtfMXshBFBNCu6iCtx2J",
              }}
              page={"ABOUT"}
            />
          </div>
          <div className="flex flex-col sm:gap-2 gap-1" key={0}>
            <Item
              key={0}
              item={{
                first: "I scaled Avenue Ops as their",
                second: "Founding Engineer",
                link: "https://avenue.so/blog/avenue-launches-signal-views",
              }}
              page={"ABOUT"}
            />
            <Item
              key={1}
              item={{
                first: "and am now helping people understand themselves with",
                second: "Eve",
                link: "https://www.eve.space/",
              }}
              page={"ABOUT"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
