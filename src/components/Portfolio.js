/** @format */

import React from "react";
import Anime, { anime } from "react-anime";
import PortfolioItem from "./helpers/PortfolioItem";

const Portfolio = ({ refs }) => {
	return (
		<div id="portfolio" className="flex flex-col w-full py-5" ref={refs}>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mt-[1.5in] mb-20">
				Portfolio
			</h1>
			<div className="flex justify-center items-center flex-wrap">
				<Anime
					translateX={anime.stagger(50, { from: "start" })}
					translateY={anime.stagger(50, { from: "center" })}
				>
					
					<PortfolioItem
						heading="UBER EATS CLONE"
						heading2="Responsive Mobile Application"
						type="uber eats"
						title=""
						description={["React Native based Uber Eats clone mobile application deployed and hosted via Expo Go for android and ios. Used Firebase for google authentication and database",]
						}
						link="https://expo.dev/@tvarun98/uber-eats-clone?serviceType=classic&distribution=expo-go"
					/>


					<PortfolioItem
						heading="DISNEY+ CLONE"
						heading2="Responsive Web Application"
						type="disney"
						title=""
						description={["JavaScript and React based Hotstar clone web application, responsive with Desktop, Mobile and Tablet.",
									"Google Authentication, Database and Hosting implemented through Firebase. Sign in/out powered by Redux.",
									"All UI animations and auto-play videos implemented.",]
						}
						link="https://disney-clone-9848f.web.app/"
					/>
					<PortfolioItem
						heading="RESEARCH PAPER"
						heading2="Published in TEST Engineering and Management"
						type="research"
						title=""
						description={
							"Comparative Study of Deep Learning Models on Air Pollution Forecasting"
						}
						link="http://testmagzine.biz/index.php/testmagzine/article/view/7462/5679"
					/>
					<PortfolioItem
						heading="LEETCODE PROFILE"
						heading2=""
						type="lc"
						title=""
						description={
							"Leetcode"
						}
						link="https://leetcode.com/Vanquish_x_SC/"
					/>
					
				</Anime>
			</div>
		</div>
	);
};

export default Portfolio;
