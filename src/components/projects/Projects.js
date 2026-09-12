import React from "react";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import main from "../../assets/work/main-project.png"
import workImgOne from "../../assets/work/dashboard-image.png"
import madhavStore from "../../assets/work/Madhav-store-dashboard.png"
import creditCardCustomer from "../../assets/work/Credit Card Customer Report_Dashboard.png"
import creditCardTransaction from "../../assets/work/Credit Card Transaction Report_Dashboard.png"
import workImgThree from "../../assets/work/hr-analytics-dashboard.png"

const Projects = () => {
  return (
    <div className="w-full">
      <Title title="Professional" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 gap-5 px-6 mt-4">
        <ProjectsCard
          title="Quantitative Algorithmic Trading System"
          category="Full Stack · Independently built"
          description="Multi-market quant trading system covering NSE/BSE equities, Binance crypto and Forex — end-to-end from a microservices-based signal engine (MA Crossover, RSI, Bollinger Bands confluence) over Redis Streams and TimescaleDB, to a live React + Recharts dashboard."
          techStack={["Java", "Spring Boot", "Redis Streams", "TimescaleDB", "React", "Recharts", "Tailwind CSS"]}
        />
        <ProjectsCard
          title="AI Tools — Code Analyser Web Platform"
          category="Full Stack · Live"
          description="Production web app (FastAPI ASGI on Vercel + Postgres) that maps source code to functional and technical specs across 20+ languages, with Excel compliance reports, full account lifecycle and an admin Ops dashboard with live health probes."
          techStack={["Vite", "Alpine.js", "FastAPI", "PostgreSQL", "Resend", "Vercel"]}
        />
        <ProjectsCard
          title="OneCIAM — Healthcare Identity Platform"
          category="Professional · TCS"
          description="Backend services for a healthcare identity and integration platform: REST APIs and MuleSoft integration flows enabling secure identity data exchange between SAP CDC and downstream systems, with Redis caching and zero-defect migrated customer data."
          techStack={["Java", "Spring Boot", "SAP CDC", "MuleSoft", "Redis", "REST APIs"]}
        />
      </div>

      <Title title="Data" subTitle="Analytics" />
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
            image={madhavStore}
            link="https://github.com/PunuNGowda/Madhav-Store-Sales"
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Credit Card Financial Project"
            category="Data Analytics using PowerBI"
            images={[creditCardCustomer, creditCardTransaction]}
            link="https://github.com/PunuNGowda/Credit-Card-Financial-Dashboard"
          />
          <ProjectsCard
            title="HR Analytics"
            category="Data Analytics using PowerBI"
            image={workImgThree}
            link="https://github.com/PunuNGowda/HR-Analytics"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;