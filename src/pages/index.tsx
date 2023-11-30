import { usePageContext } from "@/InfoContext"
import { AboutInfo } from "@/components/AboutInfo"
import ContactInfo from "@/components/ContactInfo"
import { GeographyInfo } from "@/components/GeographyInfo"
import NavButtons from "@/components/NavButtons"
import { ReactNode, useEffect } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  const { curPage } = usePageContext()

  return (
    <>
      <div className="h-[85%] w-full flex flex-col justify-center sm:pl-28">
        <p
          className="font-semibold sm:mt-0 sm:p-0 pl-8 -mt-56 sm:text-9xl text-5xl sm:leading-normal leading-tight"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          Hi, I'm Maayan
        </p>
        <div className="relative w-full sm:ml-[10px] flex sm:justify-start justify-center">
          <div
            className="absolute w-full text-lg sm:px-0 px-8 sm:pt-0 pt-8"
            style={{ color: "rgb(40, 40, 40)" }}
          >
            {curPage === "ABOUT" ? (
              <AboutInfo />
            ) : curPage === "CONTACT" ? (
              <ContactInfo />
            ) : curPage === "GEOGRAPHY" ? (
              <GeographyInfo />
            ) : undefined}
          </div>
        </div>
      </div>
      <NavButtons />
    </>
  )
}
