import { Space, getSpaceColor } from "@/spacesHelpers"

export type Row = Item[]

export type Item = {
  first: string
  second: string
  link: string
}

interface Props {
  rows: Row[]
  space: Space
}

export default function Section({ rows, space }: Props) {
  return (
    <div
      className={`absolute top-0 flex-col h-full w-full sm:p-32 p-8 flex items-start justify-center 
      h-[90%] sm:text-2xl text-lg text-center flex-col `}
    >
      <div className="flex flex-col sm:gap-14 gap-12 items-start">
        {rows.map((row, index) => (
          <div className="flex flex-col sm:gap-2 gap-1" key={index}>
            {row.map((item, index) => (
              <Item key={index} item={item} space={space} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

interface ItemProps {
  item: Item
  space: Space
}

// can't use curSpace because of animation related delays
function Item({ item, space }: ItemProps) {
  const { first, second, link } = item
  return (
    <div className="flex sm:flex-row flex-col sm:gap-2 text-start">
      <p>{first}</p>
      <a
        href={link}
        target="_blank"
        className="hover:underline font-bold"
        style={{ color: getSpaceColor(space) }}
      >
        {second}
      </a>
    </div>
  )
}
