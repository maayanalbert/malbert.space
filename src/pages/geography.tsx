import { useEffect } from "react"
import SpacesButtons from "@/components/NavButtons"
import Section, { Item, Row } from "@/components/Section"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const page = "GEOGRAPHY"

  const NY: Item = {
    first: "While I live in",
    second: "New York",
    link: "https://www.google.com/maps/place/Manhattan,+New+York,+NY/@40.7591622,-74.0516318,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
  }

  const SF: Item = {
    first: "I can often be found in",
    second: "San Francisco",
    link: "https://www.google.com/maps/place/Mission+District,+San+Francisco,+CA/@37.7516785,-122.4214165,13.85z/data=!4m6!3m5!1s0x808f7e3c5f803323:0x35800073de45189!8m2!3d37.7635614!4d-122.4173724!16zL20vMDJsbDdy?entry=ttu",
  }

  const MD: Item = {
    first: "and am originally from",
    second: "Maryland",
    link: "https://www.google.com/maps/place/Bethesda,+MD/@38.9850764,-77.162964,12.73z/data=!4m6!3m5!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092!16zL20vMGJ4YnI?entry=ttu",
  }

  return (
    <div
      className={`absolute flex-col h-full w-full sm:p-28 p-8 flex items-start justify-start 
      h-[90%] sm:text-2xl text-lg text-center flex-col sm:mt-[64px]`}
      style={{ top: 38 * 4 }}
    >
      <div className="flex sm:flex-row flex-col sm:gap-2 gap-12 w-full justify-start">
        <div className="flex flex-col sm:gap-4 gap-1">
          <Item item={NY} page={page} />
          <Item item={SF} page={page} />
        </div>
        <div className="flex flex-col sm:gap-4 gap-1">
          <div className="opacity-0 cursor-default pointer-events-none">
            <Item item={MD} page={page} />
          </div>
          <Item item={MD} page={page} />
        </div>
      </div>
    </div>
  )
}
