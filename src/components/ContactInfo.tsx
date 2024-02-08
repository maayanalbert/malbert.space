import { useEffect } from "react"
import NavButtons from "@/components/NavButtons"
import { Item, Row } from "@/components/Item"
import { getPageColor } from "@/pageHelpers"

export default function ContactInfo() {
  return (
    <div className="flex sm:flex-row flex-col gap-5">
      <p>
        Email:{" "}
        <a
          href="mailto:maayan@eve.space"
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("CONTACT") }}
        >
          maayan@eve.space
        </a>
      </p>
      <p>
        Twitter:{" "}
        <a
          href="https://twitter.com/_maayanster"
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("CONTACT") }}
        >
          @_maayanster
        </a>
      </p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/maayanalbert"
          target="_blank"
          className="hover:underline cursor-pointer"
          style={{ color: getPageColor("CONTACT") }}
        >
          @maayanalbert
        </a>
      </p>
    </div>
  )
}
