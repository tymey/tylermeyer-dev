import Image from "next/image";
import { m } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants/constants";
import { githubIcon } from "../assets";
import { StaticImageData } from "next/image";

export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};

export const textVariant = (delay: number) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const zoomIn = (delay: number, duration: number) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    image: StaticImageData;
    sourceCodeLink: string;
    demoLink: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  image,
  sourceCodeLink,
  demoLink,
}: ProjectCardProps) => {
  return (
      <Tilt
        //   options={{
        //       max: 40,
        //       scale: 1,
        //       speed: 450,
        //   }}
          className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
      >
          <m.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
              <div className="relative">
                  <Image
                      src={image.src}
                      alt={name}
					  width={500}
					  height={500}
                      className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <div
                          onClick={() => window.open(sourceCodeLink, "_blank")}
                          className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                          <Image
                              src={githubIcon.src}
                              alt="github"
							  width={50}
							  height={50}
                              className="w-full h-full object-contain"
                          />
                      </div>
                  </div>
              </div>

              <div className="mt-3">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
                  <p className="mt-2 text-secondary text-[14px] leading-snug">
                      {description}
                  </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
              <div className="mt-3 flex justify-center items-center">
                  <a
                      className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
                      href={demoLink}
                      target="_blank"
                  >
                      See the Demo
                  </a>
              </div>
          </m.div>
      </Tilt>
  );
};

function ProjectCards() {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectCards;
