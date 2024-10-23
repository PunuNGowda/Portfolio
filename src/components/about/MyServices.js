import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I have developed Web applications using HTML, CSS, JavaScript and React JS"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Java"
        subTitle="I have developed Backend Framework using Java Spring Boot"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Data Analytics"
        subTitle="Done Multiple project on Data Analytics"
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Database"
        subTitle="I have knowledge about MySQL, PostgreSQL and MongoDB"
      />
    </div>
  );
};

export default MyServices;
