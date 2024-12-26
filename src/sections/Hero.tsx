import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="Person peeking from behind laptop"
        />
        
        <div>
          <div></div>
          <div>Available for new projects</div>
          <h1>Building Exceptional User Experiences</h1>
          <p>
            I specialise in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
          
          <div>
            <button>
              <span>Explore My Work</span>
              <ArrowDown />
            </button>
            <button>
              <span>👋</span>
              <span>Let's connect</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
