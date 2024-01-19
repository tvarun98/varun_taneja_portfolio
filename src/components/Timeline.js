/** @format */

import React from "react";
import TimelineItem from "./helpers/TimelineItem";
import timelineOne from "../assests/timelineOne.svg";
import timelineTwo from "../assests/timelineTwo.svg";
import timelineThree from "../assests/timelineThree.svg";


const Timeline = ({ refs }) => {
	return (
		<div
			id="timeline"
			className="relative flex flex-col items-center w-full py-5 mt-[2.5in]"
			ref={refs}
		>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Timeline
			</h1>
			<div className="flex gap-3 xl:gap-5 absolute xl:right-20 top-40">
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#06d6a0] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Employment
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FF9704] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Projects
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FFF] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Education
					</span>
				</div>
			</div>
			<div className="flex justify-between flex-col w-full xl:w-[70%] mt-20">
				{/* article start*/}
				<div className="flex items-center gap-40 border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 rounded-full w-14 h-14 flex items-center justify-center -top-[10px] -left-[30px]">
						<h4 className="text-primaryTxt">7</h4>
					</div>
					<div className="py-10 xl:px-16 xl:w-[45%]">
						<TimelineItem
							type="Waterlooeducation"
							duration={"Sep 2023 - May 2025"}
							title={"University of Waterloo"}
							designation={"Masters in Computer Engineering"}
							description={[
								"Specialization: Software"
							]}
						/>

						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] bottom-[36%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">6</h4>
						</div>
						<div className="mt-20 text align center">
							
							<TimelineItem
								type="ZSemployment"
								duration={"Jan 2022 - May 2023"}
								title={
									"ZS Associates"
								}
								designation={"Business Technology Solutions Associate"}
								description={[
									"Client: Roche Genentech",
									"Domain: Pharma",
									"Developed a scalable Match-Merge ML Automation framework that can predict whether two Reltio Master Data Management entities can be resolved as a single entity by comparing fuzzy scores of various attributes.",
									"This framework has reduced the effort of operations team from 15 days to just 10 minutes.",
									//"Libraries Used: Pandas, Scikit learn, & Geo-Code",
									//"Trained model via various supervised models (KNN, XG-Boost, RandomForest) and performed hyper parameter tuning, eventually achieving an accuracy of ~94%.",
									"Worked as a Data Quality Analyst - generated SQL scripts to extract data from AWS Data Lake and Redshift and ingested data to Tableau Dashboards.",
									"Successfully provided data quality insights to senior leadership team across affiliates on the dimensions of completeness, uniqueness, validity and accuracy."
								]}
							/>
						</div>
					</div>
					<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
					<div className="hidden xl:block w-[500px]">
						<img src={timelineTwo} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}

				{/* article start*/}
				<div className="flex gap-40 items-center justify-end border-r-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="hidden xl:block w-[500px]">
						<img src={timelineOne} alt="Timeline Img" />
					</div>
					<div className="z-50 absolute border-t-4 border-r-4 rounded-tr-3xl w-[100px] h-[100px] -right-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] top-[10%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] top-56">
						<h4 className="text-primaryTxt">5</h4>
					</div>
					<div className="absolute w-[100px] h-[100px] bg-primaryBg -bottom-[50px] left-0"></div>

					<div className="xl:px-14 py-10 xl:w-[45%] float-right">
						<TimelineItem
							type="Accemployment"
							duration={"Feb 2021 - Dec 2021"}
							title={"Accenture"}
							designation={"Application Development Associate"}
							description={[
								"Client: Natwest",
								"Domain: Credit Risk and Finance",
								"Responsible for Data Sourcing and Data Ingestion from multiple source systems to AWS, using S3 buckets, Athena, Hive and EMR and deployed on production environments.",
								"Performed Data Stewarding with expertise spanning across global regions such as APAC, EMEA and LATAM. ",
			
							]}
						/>

						<div className="z-50 absolute bg-primaryBg border-[#06d6a0] bottom-[25%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] bottom-24">
							<h4 className="text-primaryTxt">4</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="IPeducation"
								duration={"2016 - 2020 (India)"}
								title={"Guru Gobind Singh Indraprastha University"}
								designation={"Bachelor of Technology in Computer Science"}
								description={[
								]}
								link=""
							/>
						</div>
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
				<div className="flex gap-40 items-center border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="z-50 absolute border-t-4 border-l-4 rounded-tl-3xl w-[100px] h-[100px] -left-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 top-[10%] rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
						<h4 className="text-primaryTxt">3</h4>
					</div>
					<div className="xl:px-14 py-10 xl:w-[45%]">


						<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2020"}
								title={
									"Comparative Study of Deep Learning Models on Air Pollution Forecasting"
								}
								designation={"Engineering Project"}
								description={[
									"In  this  study,  various  state  of  the  art  models  were studied and compared to provide a clear view on the progress of air quality prediction in literature. Out of various machine learning and deep learning models, LSTM which is a deep learning model seems to give more promising results.",
								]}
								link="http://testmagzine.biz/index.php/testmagzine/article/view/7462/5679"
							/>
						</div>
					</div>
					<div className="hidden xl:block w-[500px]">
						<img src={timelineThree} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
				<div className="border-r-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="absolute w-[100px] h-[100px] bg-primaryBg -bottom-[50px] left-0"></div>
					<div className="z-50 absolute border-t-4 border-r-4 rounded-tr-3xl w-[100px] h-[100px] -right-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] top-1/3 border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] top-56">
						<h4 className="text-primaryTxt">2</h4>
					</div>
					<div className="xl:px-14 py-10 xl:w-[45%] float-right">
						<TimelineItem
							type="CBSEeducation"
							duration="2015 - 2016"
							title="HSC - 12th Grade"
							designation="Central Board of Secondary Education, India"
						/>
					</div>
				</div>
				{/* article end */}

				{/* article start*/}
				<div className="border-l-4 border-[#06d6a0] rounded-tl-3xl w-[98%] relative">
					<div className="z-50 absolute border-t-4 border-l-4 rounded-tl-3xl w-[100px] h-[100px] -left-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="z-50 absolute bg-primaryBg border-[#06d6a0] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px] bottom-0">
						<h4 className="text-primaryTxt">1</h4>
					</div>
					<div className="xl:px-14 py-10 xl:w-[45%]">
						<TimelineItem
							type="CBSEeducation"
							duration="2013 - 2014"
							title="SSC - 10th Grade"
							designation="Central Board of Secondary Education, India"
						/>
					</div>
				</div>
				{/* article end */}
			</div>
		</div>
	);
};

export default Timeline;
