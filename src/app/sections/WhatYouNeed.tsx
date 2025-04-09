import { Carousel } from "../components/Carousel"
interface SlideItem {
  metaTitle: string,
  title: string,
  image: string,
}

interface WhatYouNeedProps {
  title: string,
  description: string,
  items: SlideItem[],
}

export function WhatYouNeedSection({ title, description, items }: WhatYouNeedProps) {
  return (
    <section className="px-4 md:px-8 lg:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto mb-5">{description}</p>

      <Carousel items={[...items, ...items]} />
    </section>
  )
}
