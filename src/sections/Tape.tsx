// Dependencies
import React from "react";

// Assets
import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div>
      <div className="py-16 overflow-x-clip lg:py-24">
        <div className="bg-gradient-to-r from-purple-200 to-blue-400 -rotate-3 -mx-1">
          <div
            className="flex"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s] ">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-small">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
