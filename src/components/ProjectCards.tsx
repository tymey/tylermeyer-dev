import Image from "next/image";
import { m } from "motion/react";
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
	techStack: string[];
	features: string[];
    image: StaticImageData;
    sourceCodeLink: string;
    demoLink: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  techStack,
  features,
  image,
  sourceCodeLink,
  demoLink,
}: ProjectCardProps) => {
  return (
	<m.div
		variants={fadeIn("up", "spring", index * 0.5, 0.75)}
	>
		<Tilt
			className="backdrop-blur-[2px] bg-primary-400/30 border-primary-200/50 border-2 shadow-2xl p-5 rounded-xl sm:w-[500px] w-full"
		>
			{/* Project Logo & GitHub */}
			<div className="relative">
				<div className="flex h-[200px] items-center justify-center">
					<Image
						src={image.src}
						alt={name}
						width={250}
						height={250}
						className="max-w-full h-auto object-cover rounded-lg relative"
					/>
				</div>
				<div className="absolute inset-0 flex justify-end m-3">
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
				<h3 className="text-primary-200 font-bold text-2xl">{name}</h3>
				<div className="h-[250px]">
					<p className="mt-2 text-primary-600 text-[14px] leading-snug">
						{description}
					</p>
					<p className="mt-2 text-primary-600 text-[14px] leading-snug">
						<b>Tech Stack: </b>{techStack.join(', ')}
					</p>
				</div>
			</div>
			<div className="mt-2 flex flex-wrap gap-1"></div>
			<div className="mt-3 flex justify-center items-center">
				<a
					className={`shadow-md shadow-primary p-2 bg-primary-400 rounded-lg flex justify-center hover:bg-green-900 ${demoLink ? '' : 'pointer-events-none'}`}
					href={demoLink}
					target="_blank"
				>
					{demoLink ? 'See the Demo' : 'Demo Unavailable'}
				</a>
			</div>
      	</Tilt>
    </m.div>
  );
};

function ProjectCards() {
    return (
        <div className="flex flex-wrap justify-center gap-6 text-primary-600 w-full">
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectCards;
