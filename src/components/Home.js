/** @format */

import React from "react";
import {
	Facebook,
	Linkedin,
	Instagram,
	Discord,
	CaretDownFill,
	Github,
} from "react-bootstrap-icons";
import TerminalBlock from "../components/helpers/TerminalBlock";
import Typewriter from "typewriter-effect";
import ProImg from "../assests/DSC_021.png";
import Anime from "react-anime";
import personalcv from "../assests/personalcv.pdf";
import BackgroundPulse from "./helpers/BackgroundPulse";


const Home = ({ refs }) => {
	return (
		<div
			id="home"
			className="flex flex-col items-center h-screen relative w-full"
			ref={refs}
		>
			<TerminalBlock
				width="325px"
				height="110px"
				data={
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("> const newInstance = new Portfolio();<br>")
								.pauseFor(1500)
								.typeString("> console.log(newInstance.name);<br>")
								.pauseFor(1500)
								.pasteString("> Varun Taneja")
								.start();
						}}
					/>
				}
				x={428}
				y={120}
			/>

			<div className="relative flex flex-col gap-3 items-center justify-center mt-24 xl:mt-0">
				<div className="absolute">
					<BackgroundPulse />
				</div>
				<div className="w-[50px] xl:w-[400px]">
					<img src={ProImg} className="w-full" />
				</div>
				<div className="text-center">
					<h3 className="text-primaryTxt">Hello, I'm</h3>
					<h1 className="text-primaryTxt text-2xl xl:text-1xl my-1.3">
						Varun Taneja
					</h1>
					<h3 className="text-primaryTxt text-md opacity-70">
						A Software Engineer
					</h3>
					<h3 className="text-primaryTxt text-xs mb-2 flex items-center justify-center my-1">
						<div className="opacity-50 inline-block">Based in Waterloo, Canada</div>
						<div className="opacity-100 inline-block mx-2">
							{/* <div className="bg-[#f77f00] w-5 h-1"></div>
							<div className="bg-primaryTxt w-5 h-1"></div>
							<div className="bg-[#38b000] w-5 h-1"></div> */}
						<option value="Canada"> { '\uD83C\uDDE8\uD83C\uDDE6' } </option>
					
						</div>
					</h3>
				</div>

				
				<div className="flex gap-3 justify-center">
					<a
						href={personalcv}
						className="text-primaryTxt text-sm border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
						target="_blank"
					>
						Download Resume
					</a>
					<a
						href="#aboutme"
						className="text-[#212121] text-sm border-2 border-[#f1faee] bg-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-primaryBg hover:text-primaryTxt mt-2"
					>
						Know More
					</a>
					<a
						href="https://www.credly.com/badges/ded5ee6d-ea96-4a74-abda-bc98656d3b90"
						className="text-primaryTxt text-sm border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
						target="https://www.credly.com/badges/ded5ee6d-ea96-4a74-abda-bc98656d3b90"
					>
						Verify Certification
					</a>
				</div>
			</div>

			<div className="bottom-28 absolute">
				<Anime
					translateY={15}
					duration={1000}
					direction={"alternate"}
					loop={true}
					easing={"easeInOutQuad"}
				>
					<a href="#aboutme">
						<CaretDownFill size={18} color="#f1faee" />
					</a>
				</Anime>
			</div>

			<div className="absolute top-1/4 -left-20 xl:-left-10 -rotate-90">
				<h4 className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt">
					<a href="tel:+91 8447 307873">+91 84473 07873</a>
				</h4>
			</div>

			<div className="absolute bottom-1/3 -left-[90px] xl:-left-[65px] -rotate-90">
				<h4 className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt">
					<a href="mailto:vtaneja@uwaterloo.ca">
					vtaneja@uwaterloo.ca
					</a>
				</h4>
			</div>

			{/* <div className="absolute -right-10 xl:right-5 top-10 rotate-90">
				<h4
					className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt"
					title="Total Views"
				>
					105320
				</h4>
			</div> */}

			<div className="absolute -right-5 xl:right-10 bottom-40 flex flex-col gap-10 items-center justify-center">
				<a
					href="https://www.linkedin.com/in/varun-taneja0503/"
					className="transition duration-300 ease-in-out hover:opacity-60"
					target="_blank"
				>
					<Linkedin size={18} color="#f1faee" />
				</a>
				{/* <a
					href="https://leetcode.com/Vanquish_x_SC/"
					className="transition duration-300 ease-in-out hover:opacity-60"
					target="_blank"
				>
					<Github size={20} color="#f1faee" />
				</a> */}
				<a
					href="https://www.instagram.com/_varun_taneja"
					className="transition duration-300 ease-in-out hover:opacity-60"
					target="_blank"
				>
					<Instagram size={18} color="#f1faee" />
				</a>
				<a
					href="https://discordapp.com/users/varun0503"
					className="transition duration-300 ease-in-out hover:opacity-60"
					target="_blank"
				>
					<Discord size={18} color="#f1faee" />
				</a>
				<a
					href="https://www.facebook.com/varun.taneja.9847/"
					className="transition duration-300 ease-in-out hover:opacity-60"
					target="_blank"
				>
					<Facebook size={18} color="#f1faee" />
				</a>
				<div className="border h-24 w-0 border-[#f1faee]"></div>
			</div>
		</div>
	);
};

export default Home;
