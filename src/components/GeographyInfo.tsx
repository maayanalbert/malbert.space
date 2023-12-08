import { getPageColor } from "@/pageHelpers"
import { useEffect } from "react"

export function GeographyInfo() {
  return (
    <p>
      While I live in{" "}
      <a
        href="https://www.google.com/maps/place/Midtown+Manhattan,+New+York,+NY/@40.7504859,-74.0045233,14z/data=!3m1!4b1!4m6!3m5!1s0x89c25901a4127ca9:0xbecdcc9081d6cfdb!8m2!3d40.7549309!4d-73.9840195!16s%2Fg%2F11f3jdv3d9?entry=ttu"
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY", true) }}
      >
        New York
      </a>
      , I can often be found in{" "}
      <a
        href="https://www.google.com/maps/place/Mission+District,+San+Francisco,+CA/@37.759062,-122.4243592,15z/data=!3m1!4b1!4m6!3m5!1s0x808f7e3c5f803323:0x35800073de45189!8m2!3d37.7635614!4d-122.4173724!16zL20vMDJsbDdy?entry=ttu"
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY", true) }}
      >
        San Francisco
      </a>{" "}
      and am originally from{" "}
      <a
        href="https://www.google.com/maps/place/Bethesda,+MD/@38.9816027,-77.1597764,13z/data=!3m1!4b1!4m6!3m5!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092!16zL20vMGJ4YnI?entry=ttu"
        target="_blank"
        className="hover:underline cursor-pointer"
        style={{ color: getPageColor("GEOGRAPHY", true) }}
      >
        Maryland
      </a>
    </p>
  )
}
