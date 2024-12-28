// Dependencies
import Image from "next/image";

// Assets
import communifyUI from "@/assets/images/communify-app.png";
import moneyMentorImg from "@/assets/images/money-mentor-bg.png";
import bubbleAppImg from "@/assets/images/bubbles-app.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
//Icons
import FigmaIcon from "@/assets/icons/figma.svg";
import ApiIcon from "@/assets/icons/api.svg";
import CssIcon from "@/assets/icons/css-3-blue.svg";
import HtmlIcon from "@/assets/icons/html-5-orange.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import SQLlite from "@/assets/icons/sqlite.svg";
import PythonIcon from "@/assets/icons/python.svg";
import JavascriptIcon from "@/assets/icons/javascript-yellow.svg";

// Components
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ProjectTechIcons } from "@/components/ProjectTechIcons";

const portfolioProjects = [
  {
    company: "WCIT Hackathon",
    year: "2023",
    title: "Communify App",
    results: [
      { title: "Created an app to aid displaced people" },
      { title: "Utilised APIs to allow for live translation" },
      { title: "Developed the UI for a wearable device" },
    ],
    link: "#",
    image: communifyUI,
    text: "",
    icon: [FigmaIcon, ApiIcon, HtmlIcon, CssIcon],
  },
  {
    company: "Financial Education",
    year: "2024",
    title: "Money Mentor",
    results: [
      { title: "Gamify Financial Education" },
      { title: "Create adaptive goals for users" },
      { title: "Utilise AI to enhance learning" },
    ],
    link: "https://devpost.com/software/whackjobs?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional#app-team",
    image: moneyMentorImg,
    text: "View Devpost",
    icon: [FigmaIcon, PythonIcon, ApiIcon, SQLlite, HtmlIcon, CssIcon, JavascriptIcon, FlaskIcon
    ],
  },
  {
    company: "WCIT Hackathon",
    year: "2023",
    title: "Bubbles App",
    results: [
      { title: "Created as social media app" },
      { title: "Catered to the neurodiverse" },
      { title: "Allowed users to create custom channels" },
    ],
    link: "#",
    image: bubbleAppImg,
    text: "",
    icon: [FigmaIcon],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-200 to-blue-400 inline-flex font-bold uppercase tracking-widest text-small gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li className="flex gap-2 text-small text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" key={index} />
                        <span key={index}>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {project.text != "" ? (
                    <>
                      <div className="pt-2 -mb-2 mt-6">
                        <ProjectTechIcons iconList={project.icon} />
                      </div>
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                          <span>{project.text}</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="pt-2 sm:pt-0 -mb-2 mt-8">
                        <ProjectTechIcons iconList={project.icon} />
                      </div>
                    </>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-tl-2xl rounded-t-2xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
