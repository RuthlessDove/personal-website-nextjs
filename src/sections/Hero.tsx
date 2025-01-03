// Dependencies
import Image from "next/image";

// Assets
import memojiImage from "@/assets/images/memoji.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

// Components
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:pb-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute -top-10 inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className=" animate-spin [animation-duration:40s] size-28 text-purple-200 " />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <StarIcon className=" animate-spin [animation-duration:40s] size-12 text-purple-200 " />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <StarIcon className=" animate-spin [animation-duration:40s] size-8 text-purple-200 " />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className=" animate-spin [animation-duration:40s] size-8 text-purple-200/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className=" animate-spin [animation-duration:40s] size-5 text-purple-200/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className=" animate-spin [animation-duration:40s] size-10 text-purple-200/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className=" animate-spin [animation-duration:30s] size-14 text-purple-200/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={85}>
          <div className="size-3 bg-purple-200/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit size={520} rotation={41}>
          <div className="size-2 bg-purple-200/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-purple-200/20 rounded-full"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center lg:-mt-20">
          <div className="-mb-2">
            <Image
              src={memojiImage}
              className="size-[100px] object-contain "
              alt="Person peeking from behind laptop"
            />
          </div>

          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping"></div>
            </div>
            <div className="text-small font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-purple-200 text-4xl text-center mt-8 tracking-wide md:text-6xl">
            Grace
          </h1>
          <h2 className="font-serif text-3xl text-center mt-6 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h2>
          <p className="mt-4 text-center text-white-60 md:text-lg">
            I specialise in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-0">
        <a
          className="z-10"
          href="#projects"
        >
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4 animate-bounce" />
          </button></a>
          <a
            className="z-10"
            href="https://www.linkedin.com/in/grace-royle-uwumagbe"
            target="_blank"
          >
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
