/** @format */

import React, { useEffect } from "react";
import Anime, { anime } from "react-anime";
import { Award, Folder, Users } from "react-feather";
import aboutme from "../assests/aboutme.svg";

const AboutMe = ({ refs }) => {
	return (
		<div
			id="aboutme"
			className="flex flex-col xl:flex-row items-center justify-around mt-[1.5in] py-5"
			ref={refs}
		>
			<div className="xl:w-[35%] flex flex-col gap-5">
				<h1 className="text-primaryTxt text-5xl	xl:text-7xl font-medium text-center mb-10">
					About Me
				</h1>
				<div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center mb-10">
					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">EXPERIENCE</h3>
						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Award color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]">2.5+ Years</h3>
					</div>

					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">PROJECTS</h3>
						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Folder color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]">4+</h3>
					</div>
					<div className="w-[13rem] h-[13rem] bg-secondaryBg rounded-3xl flex flex-col items-center justify-between p-5 m-2">
						<h3 className="text-primaryTxt">CERTIFICATIONS</h3>
						<Anime
							scale={{
								value: 1.1,
								easing: "linear",
								duration: anime.random(500, 1000),
							}}
							loop={true}
							direction={"alternate"}
							delay={300}
						>
							<Users color="#06d6a0" size={42} />
						</Anime>
						<h3 className="text-[#9ca3af]">2+ Active</h3>
					</div>
				</div>
				<div className="flex flex-col gap-5 justify-center">
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						Here's a gist, I'm a Computer Engineering graduate student at the{" "}
						<em className="text-[#f77f00] font-medium">
							University of Waterloo and a Software Engineer by Profession
						</em>
						. As an undergraduate, I hold a Bachelors Degree in Computer Science and
						Engineering from Guru Gobind Singh Indraprastha University, New Delhi.
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						I've worked on several projects throughout years which includes Data Migration, Data Analysis, Data Science, Web
						Development and ETL.
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						I believe in qualitative work rather than quantitative and believe
						that my skills will support your brand and/or you to succeed in your
						business and objectives.
					</p>
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						Feel free to get in touch.
					</p>
					<a
						href="#contact"
						className="text-primaryTxt border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
					>
						Let's Talk
					</a>
				</div>
			</div>
			<div className="xl:w-[500px]">
				<img src={aboutme} alt="About Varun" />
			</div>
		</div>
	);
};

export default AboutMe;
