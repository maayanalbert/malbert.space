import { Space as Page, getPageColor } from "@/pageHelpers"

export type Row = Item[]

export type Item = {
  first: string
  second: string
  link: string
  third?: string
  fourth?: string
  link2?: string
  fifth?: string
}

interface Props {
  item: Item
  page: Page
}

// can't use curSpace because of animation related delays
export function Item({ item, page }: Props) {
  const { first, second, link, third, fourth, link2, fifth } = item
  return (
    <p
      className="flex sm:flex-row flex-col sm:gap-2 text-start sm:text-[22px] text-lg"
      style={{ color: "rgba(0, 0, 0, .85)" }}
    >
      {first}{" "}
      <a
        href={link}
        target="_blank"
        className="hover:underline"
        style={{ color: getPageColor(page) }}
      >
        {second}
      </a>{" "}
      {third && third}{" "}
      {fourth && (
        <a
          href={link2}
          target="_blank"
          className="hover:underline"
          style={{ color: getPageColor(page) }}
        >
          {fourth}
        </a>
      )}{" "}
      {fifth && fifth}
    </p>
  )
}
