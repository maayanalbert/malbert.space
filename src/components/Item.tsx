import { Space as Page, getPageColor } from "@/pageHelpers"

export type Row = Item[]

export type Item = {
  first: string
  second: string
  link: string
}

interface Props {
  item: Item
  page: Page
}

// can't use curSpace because of animation related delays
export function Item({ item, page: space }: Props) {
  const { first, second, link } = item
  return (
    <div className="flex sm:flex-row flex-col sm:gap-2 text-start sm:text-[22px] text-lg">
      <p style={{ color: "rgba(0, 0, 0, .85)" }}>{first}</p>
      <a
        href={link}
        target="_blank"
        className="hover:underline"
        style={{ color: getPageColor(space) }}
      >
        {second}
      </a>
    </div>
  )
}
