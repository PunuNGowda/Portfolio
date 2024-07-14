import React from "react";
import {
  
  
  
 
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import main from "../../assets/work/main-project.png"

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
          {/* <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          /> */}
          {/* <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          /> */}
          {/* <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
          {/* <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={}
          /> */}
          {/* <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          /> */}
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
