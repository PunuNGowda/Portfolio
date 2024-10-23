import React from "react";
import {
  
  
  
 
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import main from "../../assets/work/main-project.png"
import workImgOne from "../../assets/work/dashboard-image.png"
import workImgTwo from "../../assets/work/Credit Card Customer Report_Dashboard.png"
import workImgThree from "../../assets/work/hr-analytics-dashboard.png"

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Data Analytics in StreamLit"
            category="Sentiment Analysis from Tweets"
            image={main}
            link="https://sentiment-analysis-using-twitter.streamlit.app/"
          />
          <ProjectsCard
            title="Vrinda Store Data Analysis"
            category="Data Analytics using Excel"
            image={workImgOne}
            link="https://github.com/PunuNGowda/Vrinda-Store"
          />
          <ProjectsCard
            title="Madhav Store"
            category="Data Analytics using PowerBI"
            image={workImgTwo}
            link="https://github.com/PunuNGowda/Madhav-Store-Sales"
          />
          {/* <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Credit Card Financial Project"
            category="Data Analytics using PowerBI"
            image={workImgTwo}
            link="https://github.com/PunuNGowda/Credit-Card-Financial-Dashboard"
          />
          <ProjectsCard
            title="HR Analytics"
            category="Data Analytics using PowerBI"
            image={workImgThree}
            link="https://github.com/PunuNGowda/HR-Analytics"
          />
          {/* <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          /> */}
          {/* <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
