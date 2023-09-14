import { Space, getSpaceColor, useSpacesContext } from "@/SpaceContext"

export interface Item {
  first: string
  second: string
  link: string
}

interface Props {
  items: Item[]
  space: Space
}

export default function Section({ items, space }: Props) {
  return (
    <div
      className={`absolute w-full flex justify-center items-center h-[90%] 
      top-0 sm:text-xl text-normal p-24 text-center flex-col gap-4 `}
    >
      {items.map((item) => (
        <Item item={item} space={space} />
      ))}
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
    <div>
      <p
        className="absolute font-extralight"
        style={{ right: `calc(50% + 10px)` }}
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
        className="hover:underline absolute transition-all ease-in-out font-light select-none"
        style={{
          left: `calc(50% + 10px)`,
          color: getSpaceColor(space),
          textDecorationThickness: 1.5,
        }}
      >
        {`${second}`}
      </a>
    </div>
  )
}
