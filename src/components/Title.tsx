import { useIsMobile } from "@/GlobalsContext"

export default function Title() {
  return (
    <div
      className={`absolute flex-col h-full w-full sm:p-28 p-8 flex items-start sm:justify-center
       justify-center`}
      style={{ fontFamily: "Helvetica Neue" }}
    >
      <p className="font-semibold sm:text-9xl text-5xl sm:leading-normal leading-tight">
        Hi, I'm Maayan.
      </p>

      {/* <p className="font-semibold text-xl" style={{ marginRight: 100 }}>
        I love computers. I love people. I love doing well by both.
      </p> */}
    </div>
  )
}
