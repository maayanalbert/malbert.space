import { useEffect } from "react"

/**
 * A wrapper for the main page
 */
export default function Home() {
  useEffect(() => {
    document.title = "Maayan"
  }, [])

  return (
    <div
      className={`absolute flex-col h-full w-full sm:p-28 p-8 flex items-start
       justify-start`}
      style={{ top: 38 * 4 }}
    >
      <p
        className="font-semibold sm:text-9xl text-5xl sm:leading-normal leading-tight"
        style={{ fontFamily: "Helvetica Neue" }}
      >
        Hi, I'm Maayan
      </p>
    </div>
  )
}
