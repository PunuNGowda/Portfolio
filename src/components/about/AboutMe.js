import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! My Name is Punu N Gowda</h2>
          <p className="text-base leading-6 text-justify">
          I am Punu N Gowda, an MCA graduate with expertise in data analysis, visualization, and machine learning. 
          I’ve worked on projects like building ML models for social media analysis and creating interactive dashboards using Power BI and SQL. 
          With hands-on experience as a Data Analyst intern, I’m skilled in Python, Java, and SQL databases, and I thrive on using data to drive insights.
</p>

        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            23
          </li>
          
          
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bengaluru,India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
