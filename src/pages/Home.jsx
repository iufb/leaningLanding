import { Button } from "@/shared/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { FileCard } from "@/shared/ui/file-card";
import { FormattedMessage } from "react-intl";
import { Link } from "wouter";
const slider = ["/333.JPG", "/555.jpg", "/1111.JPG", "/2222.JPG", "/4444.jpeg"];
export const HomePage = () => {
  return (
    <section className="container">
      <section className="flex  md:flex-row flex-col gap-4  ">
        <section className="shadow-2xl w-full md:w-1/3 border rounded-lg flex flex-col gap-4 p-4 ">
          <h2 className="mb-10 font-bold ">
            <FormattedMessage id="home.hero.left.title" />
          </h2>
          <a href="https://www.youtube.com/watch?v=GIneNYegXJg" target="_blank">
            <Button
              variant={"outline"}
              className={"w-full border-primary text-primary"}
            >
              YouTube
            </Button>
          </a>
          <a href="https://www.instagram.com/kdm_bokeikhan/" target="_blank">
            <Button
              variant={"outline"}
              className={"w-full border-primary text-primary"}
            >
              Instagram
            </Button>
          </a>

          <Button className={"w-full"}>
            <a
              className={"w-full"}
              href="https://forms.gle/abEFgD8P8J6mKC9g7 "
              target="_blank"
            >
              <FormattedMessage id="home.hero.left.reg" />
            </a>
          </Button>
        </section>
        <div className="w-full md:w-2/3 overflow-hidden ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="h-[317px] rounded-lg"
          >
            {slider.map((s) => (
              <SwiperSlide key={s} className="bg-red-200  h-[317px]">
                {s}
                {/* <img src={"/slider" + s} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <Carousel>
          <CarouselContent>
            {slider.map((s, index) => (
              <CarouselItem
                key={index}
                className={`  bg-slate-400 h-[317px] rounded-lg `}
              ></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </section>
    </section>
  );
};
