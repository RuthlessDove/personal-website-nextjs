// Dependencies
import Image from "next/image";

// Assets
import felixImg from "@/assets/images/felix-profile-pic.jpeg";
import zareenImg from "@/assets/images/zareen-profile-pic.jpeg";

// Components
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Felix de Grey",
    position: "COO & Co-founder @ Cogs",
    text: "Grace was a delight to work with. In her month with us she consistently produced great work, but more importantly she contributed to our team culture, asking questions and prompting discussion. Grace is very quick to learn (picking up a new software language easily) and keen to contribute, and we’re hoping she’ll come back in the future.",
    avatar: felixImg,
  },
  {
    name: "Zareen Ali",
    position: "CEO & Co-founder @ Cogs",
    text: "Grace produced impressive work during her time with us, including design suggestions that we then implemented into our main product, creating real value for the company and our users. She asks excellent questions, pushing forward team discussions. Was also wonderful to work with on a personal level, we always had interesting things to speak about! Can’t recommend her highly enough.",
    avatar: zareenImg,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Collaborators Say about Me"
          description="Don't just take my word for it. Here's what my clients have to say about
        my work."
        />

        <div
          className="mt-16 lg:mt-24 flex overflow-x-clip"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex flex-none gap-8 animate-move-left [animation-duration:30s] ">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 p-6"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center  justify-center flex-shrink-0 ">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full rounded-full border border-gray-700"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
