import { useEffect } from "react"
import SpacesButtons from "@/components/SpacesButtons"
import Section, { Row } from "@/components/Section"

export default function About() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const content: Row[] = [
    [
      {
        first: "I live in",
        second: "New York",
        link: "https://www.google.com/maps/place/Manhattan,+New+York,+NY/@40.7591622,-74.0516318,12z/data=!3m1!4b1!4m6!3m5!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488!16zL20vMGNjNTY?entry=ttu",
      },
      {
        first: "but am often in",
        second: "San Francisco",
        link: "https://www.google.com/maps/place/San+Francisco,+CA/@37.757807,-122.5200009,12z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu",
      },
    ],
    [
      {
        first: "Originally from",
        second: "Maryland",
        link: "https://www.google.com/maps/place/Bethesda,+MD/@38.9850764,-77.162964,12.73z/data=!4m6!3m5!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092!16zL20vMGJ4YnI?entry=ttu",
      },
    ],
  ]

  return <Section rows={content} space={"GEOGRAPHY"} />
}
