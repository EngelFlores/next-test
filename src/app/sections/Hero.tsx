import Image from "next/image"
import Link from "next/link"

import { Button } from "../components/Button"

interface ButtonItem {
  label: string
  link: string
  type?: 'light' | 'dark'
}

interface HeroSectionProps {
  src: string,
  title: string,
  description: string,
  buttons: ButtonItem[]
}

export function HeroSection({ src, title, description, buttons }: HeroSectionProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white rounded-2xl overflow-hidden lg:mx-10">
      <Image
        src={src}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
      />

      <div className="absolute inset-0 bg-[#4F46E599] z-10" />

      <div className="relative z-20 text-center max-w-2xl px-4">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight [&_em]:text-indigo-200"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mt-4 text-base md:text-lg text-gray-200">
          {description}
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {buttons?.map((btn, index) => {
            return (
              <Button key={index} variant={btn.type} tabIndex={0} className="w-full sm:w-auto">
                <Link
                  href={btn.link}
                >
                  {btn.label}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
