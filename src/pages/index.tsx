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
        className="absolute sm:pl-28 pl-8"
        style={{ bottom: `calc(50% - ${11 * 4}px)` }}
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
