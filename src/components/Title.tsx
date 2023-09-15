export default function Title() {
  return (
    <div
      className="absolute w-full text-center flex justify-center items-start h-[90%] top-0 p-16 flex-col"
      style={{ fontFamily: "Helvetica Neue" }}
    >
      <p className="font-semibold sm:text-9xl text-3xl">Hi, I'm Maayan.</p>
      <div className="relative">
        <p
          className="font-semibold sm:text-xl text-base absolute whitespace-nowrap pt-2"
          style={{ marginLeft: 200 }}
        >
          I build things for humans with computers
        </p>
      </div>
    </div>
  )
}
