import Tagline from "../design/Tagline";
import { projects } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import { check2, grid, loading1, smallSphere, stars } from "../assets";
import Button from "./Button";
import { Gradient } from "../design/Roadmap";
import { Link } from "react-router-dom";

const Projects = () => (
  <Section className="overflow-hidden" id="Projects">
    <div className="container md:pb-10">
      <Heading tag="See few of my cool Projects" title="Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {projects.map((item, index) => {
          const status = item.status === "done" ? "Done" : "In progress";
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem]  p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4  bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className=" mb-5 -my-10">
                    <img
                      className="w-5/6"
                      src={item.imageUrl}
                      width={400}
                      height={300}
                      alt={item.title}
                    />
                  </div>
                  <Link to={item.to && item.to}>
                    <h4 className="h4 mb-4 border-b-2 border-n-10 w-fit">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button> <a href="https://github.com/Lakshayatyagi12" target="_blank">More Projects</a></Button>
      </div>
    </div>
  </Section>
);

export default Projects;
