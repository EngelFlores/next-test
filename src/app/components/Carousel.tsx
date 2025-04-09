'use client'

import { useRef, useState } from "react"
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"
import { Play } from "../icons/Play"
import { Pause } from "../icons/Pause"
import { ArrowBackward } from "../icons/ArrowBackward"
import { ArrowForward } from "../icons/ArrowForward"
import { NavButtonSecondary } from "../components/NavButtonSecondary"

import "swiper/css"
import "swiper/css/navigation"
import "./Carousel.css"

type CarouselItem = {
  image: string,
  metaTitle: string,
  title: string,
}

type CarouselProps = {
  items: CarouselItem[]
}

export const Carousel = ({ items }: CarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = useState(true)
  const [realIndex, setRealIndex] = useState(0)

  const toggleAutoplay = () => {
    if (!swiperRef.current) return

    if (isPlaying) {
      swiperRef.current.autoplay.stop()
    } else {
      swiperRef.current.autoplay.start()
    }

    setIsPlaying((prev) => !prev)
  }

  const onAutoplayTimeLeft = (_swiper: SwiperType, time: number) => {
    const percentage = 100 - (time / 7000) * 100
    if (progressRef.current) {
      progressRef.current.style.width = `${percentage}%`
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto relative" aria-label="Carrossel of images" aria-roledescription="carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
        }}
        centeredSlides={true}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setRealIndex(swiper.realIndex)
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="rounded-xl" aria-hidden={index !== realIndex}>
            <div
              aria-live="polite"
              className="sr-only"
            >
              Slide {realIndex + 1} de {items.length}
            </div>
            <div className="relative w-full h-[300px] md:h-96 rounded-xl"
              onMouseEnter={() => {
                swiperRef.current?.autoplay?.stop()
                setIsPlaying(false)
              }}
              onMouseLeave={() => {
                swiperRef.current?.autoplay?.start()
                setIsPlaying(true)
              }}
            >
              <Image
                src={item.image}
                alt={item.metaTitle ?? `Slide ${index + 1}`}
                fill
                className="object-cover object-center rounded-xl"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-end text-left bg-black/30 text-white text-xl font-bold rounded-xl p-4">
                <span className="font-medium text-[10px] md:text-[12px] leading-[16px] tracking-[0.05em] uppercase">{item.metaTitle}</span>
                <span className="font-bold text-[24px] md:text-[36px] lg:text-[48px] leading-[125%] tracking-[0em]">{item.title}</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-10 rounded-xl hidden md:flex">
                <div
                  ref={(el) => {
                    if (index === realIndex && el) {
                      progressRef.current = el
                    }
                  }}
                  className="h-full bg-indigo-600 transition-all duration-75 rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 right-0 mt-4 justify-around items-center px-4 z-20 hidden md:flex">
        <NavButtonSecondary
          onClick={toggleAutoplay}
          tabIndex={0}
          className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
          aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
        >
          {isPlaying ? (
            <Pause aria-label="Stop autoplay" className="w-6 h-6 text-[#4F46E5]" />
          ) : (
            <Play aria-label="Start autoplay" className="w-6 h-6 text-[#4F46E5]" />
          )}
        </NavButtonSecondary>

        <div className="gap-2 hidden md:flex">
          <NavButtonSecondary aria-label="Previous slide"
            tabIndex={0}
            className="swiper-button-prev-custom w-9 h-9 bg-gray-100 p-2 rounded-full shadow focus-visible:outline-nonefocus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <ArrowBackward className="w-5 h-5 text-indigo-600" />
          </NavButtonSecondary>
          <NavButtonSecondary aria-label="Next slide" className="swiper-button-next-custom w-9 h-9 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition">
            <ArrowForward className="w-5 h-5 text-indigo-600" />
          </NavButtonSecondary>
        </div>
      </div>
    </div>
  )
}
