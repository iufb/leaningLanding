import { Button } from "@/shared/ui/button";
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
      <section className="grid grid-rows-2 lg:grid-cols-[1fr_2fr] gap-4  ">
        <section className="shadow-2xl border rounded-lg flex flex-col gap-4 p-4 ">
          <h2 className="mb-10">Title</h2>
          <Link>
            <Button
              variant={"outline"}
              className={"w-full border-primary text-primary"}
            >
              Вступите
            </Button>
          </Link>
          <Link>
            <Button
              variant={"outline"}
              className={"w-full border-primary text-primary"}
            >
              Вступите
            </Button>
          </Link>
          <Link className={"w-full"}>
            <Button className={"w-full"}>Вступите</Button>
          </Link>
        </section>
        <Carousel>
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
        </Carousel>
      </section>
    </section>
  );
};
