/** @format */

import React from "react";
import leetDEV from "../assests/leet_svg.svg";

const Stats = ({ refs, leetcode, wakatime }) => {
	return (
		<div
			className="flex flex-col gap-20 items-center mt-[1.5in] w-[80%] y-5"
			id="stats"
			ref={refs}
		>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-10">
				Stats
			</h1>

			<div className="w-full p-10 flex flex-col xl:flex-row items-center justify-around rounded-3xl bg-secondaryBg">
				<h1 className="text-secondaryTxt mb-4 text-2xl xl:text-5xl font-bold">
					LEETCODE STATS
					
				</h1>
				<img
						src={leetDEV}
						className="w-[90px] opacity-70"
						style={{ alignSelf: 'center' }}
					/>
				{/* <a href={`https://github.com/${github}`}>
					<img
						src={`https://github-readme-stats.vercel.app/api?username=${github}&count_private=true&show_icons=true&bg_color=141517&icon_color=e6e6e6&title_color=e6e6e6&text_color=999999&border_color=141517`}
						alt="LeetCode Stats"
					/>
				</a> */}

				<a href={`https://leetcode.com/${leetcode}`}>

					<img
						src={`https://leetcode-stats.vercel.app/api?username=${leetcode}&theme=Dark`}
						alt="LeetCode Stats"
						// &theme=<THEME></THEME>
					/>
				</a>
			</div>

			
		</div>
	);
};

export default Stats;
