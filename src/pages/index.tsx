import { useEffect } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div className="h-[85%] w-full flex flex-col sm:items-start items-center justify-center sm:pl-28">
      <p
        className="font-semibold sm:text-9xl text-5xl sm:leading-normal leading-tight sm:text-left text-center"
        style={{ fontFamily: "Helvetica Neue" }}
      >
        Hi, I'm Maayan
      </p>
    </div>
  )
}
