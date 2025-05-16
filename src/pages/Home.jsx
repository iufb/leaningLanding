import { fileUrl } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { FormattedMessage } from "react-intl";

import "swiper/css";
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
const slider = [
    { img: '1.jpg', label: 'home.slider.studdom', href: 'https://studdom.abu.edu.kz' },
    { img: '2.jpg', label: '', href: '' },
    { img: '3.jpg', label: '', href: '' },
    { img: '4.jpg', label: '', href: '' },
    { img: '5.jpg', label: '', href: '' },
];
export const HomePage = () => {
    return (
        <section className="container">
            <section className="flex  md:flex-row flex-col gap-4  ">
                <section className="shadow-2xl w-full md:w-1/3 border rounded-lg flex flex-col  gap-4 p-4 ">
                    <h2 className="mb-24 font-bold ">
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
                        modules={[Pagination]}
                        pagination={{ clickable: true }}

                        className=" rounded-lg"
                    >
                        {slider.map((s) => (
                            <SwiperSlide key={s} className="bg-red-200 relative  ">
                                {s.label && <a href={s.href} target="_blank" className="inset-0 bg-black/40 absolute p-5 flex items-end " >
                                    <span className="text-white text-3xl"><FormattedMessage id={s.label} /></span>
                                </a>}
                                <img src={fileUrl + `/home/${s.img}`} />
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
