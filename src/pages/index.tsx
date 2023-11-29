import { useEffect } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div className="h-full w-full">
      <div
        className="absolute bottom-[50%] sm:bottom-[calc(50%-44px] sm:pl-28 pl-8"
      >
        <p
          className="font-semibold sm:text-9xl text-5xl sm:leading-normal leading-tight"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          Hi, I'm Maayan
        </p>
      </div>
    </div>
  )
}
