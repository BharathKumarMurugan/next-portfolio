import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { skillAnimatedToolTip } from "@/data";

const Skills = () => {
  const projects = [
    {
      id: "core-tech",
      title: "Core Tech",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.coreTech} />
        </div>
      ),
      link: "#core-tech",
    },
    {
      id: "cloud-tech",
      title: "Cloud",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.cloudTech} />
        </div>
      ),
      link: "#cloud-tech",
    },
    {
      id: "web-dev-tech",
      title: "Web Dev",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.webDevTech} />
        </div>
      ),
      link: "#web-dev-tech",
    },
    {
      id: "db-tech",
      title: "Database",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.dbTech} />
        </div>
      ),
      link: "#db-tech",
    },
    {
      id: "devops-tech",
      title: "DevOps",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.devopsTech} />
        </div>
      ),
      link: "#devops-tech",
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      description: (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={skillAnimatedToolTip.softSkillTech} />
        </div>
      ),
      link: "#soft-skills",
    },
  ];
  return (
    <section id="skills" className="w-full">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-4 max-w-4xl">My Skills</h2>
      </div>
      <div
        className="max-w-5xl mx-auto px-auto mb-16
      "
      >
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Skills;
