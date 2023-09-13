import { getSpaceColor, useSpacesContext } from "@/SpaceContext"

export interface Item {
  first: string
  second: string
  link: string
}

interface Props {
  items: Item[]
}

export default function Section({ items }: Props) {
  return (
    <div
      className={`absolute w-full flex justify-center items-center h-[90%] 
      top-0 text-xl p-24 text-center flex-col gap-4`}
    >
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  )
}

interface ItemProps {
  item: Item
}

function Item({ item }: ItemProps) {
  const { curSpace } = useSpacesContext()
  const { first, second, link } = item
  return (
    <div>
      <p
        className="absolute font-extralight"
        style={{ right: `calc(50% + 18px)` }}
      >
        {first}
      </p>
      <a
        style={{
          color: "transparent",
        }}
      >
        @
      </a>
      <a
        href={link}
        target="_blank"
        className="hover:font-medium absolute transition-all ease-in-out font-light"
        style={{
          left: `calc(50% - 10px)`,
          color: curSpace && getSpaceColor(curSpace),
        }}
      >
        {`@ ${second}`}
      </a>
    </div>
  )
}
