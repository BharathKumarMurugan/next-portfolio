"use client";
import React from "react";
import { Timeline } from "./ui/Timeline";
import { skillBadgeList } from "@/data";

const Experience = () => {
  const data = [
    {
      title: "Mar 2023 - Present",
      content: (
        <div>
          <p className="uppercase text-neutral-800 dark:text-neutral-200 text-3xl md:text-sm font-bold mb-8">Tech Mahindra</p>
          <div className="mb-5">
            {skillBadgeList.techMItems.map((item) => (
              <span
                key={`techm-${item}`}
                className="mr-2 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Lead the design, development, and maintenance of scalable web applications.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborate with a UK-based team to understand project requirements and deliver high-quality software solutions.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Take ownership of project design and implementation, leading the development of new features and system improvements.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Conduct comprehensive code reviews to ensure adherence to coding standards, best practices, and security guidelines.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Identify and resolve performance bottlenecks and bugs, ensuring high performance and responsiveness of applications.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Create and maintain detailed documentation for code, APIs, and technical processes.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Mentor and guide junior developers
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Conducted vulnerability assessments on client microservices, improving security by mitigating critical vulnerabilities in npm
              packages.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2021 - Mar 2023",
      content: (
        <div>
          <p className="uppercase text-neutral-800 dark:text-neutral-200 text-3xl md:text-sm font-bold mb-8">Photon Interactive</p>
          <div className="mb-5">
            {skillBadgeList.photonItems.map((item) => (
              <span
                key={`techm-${item}`}
                className="mr-2 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed reusable React components for interactive and dynamic frontends, adhering to best practices.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Worked closely with cross-functional teams to ensure seamless integration of front-end components with backend APIs.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Conducted code reviews, provided technical design input, and trained junior developers to maintain code quality.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2020 - Nov 2021",
      content: (
        <div>
          <p className="uppercase text-neutral-800 dark:text-neutral-200 text-3xl md:text-sm font-bold mb-8">Mindtree</p>
          <div className="mb-5">
            {skillBadgeList.mindtreeItems.map((item) => (
              <span
                key={`techm-${item}`}
                className="mr-2 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed and managed automated cloud infrastructure using Terraform, Docker, and Kubernetes.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented cloud automation, reducing annual expenses by $1 million and ensuring compliance with FedRAMP guidelines.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed reusable UI components for internal project tracker applications and optimized performance.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2019 - May 2020",
      content: (
        <div>
          <p className="uppercase text-neutral-800 dark:text-neutral-200 text-3xl md:text-sm font-bold mb-8">DXC Technologies</p>
          <div className="mb-5">
            {skillBadgeList.dxcItems.map((item) => (
              <span
                key={`techm-${item}`}
                className="mr-2 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed an AWS serverless web application, providing real-time cloud usage insights.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Automated cloud cost optimization processes, reducing resource utilization by 10%.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2016 - Mar 2019",
      content: (
        <div>
          <p className="uppercase text-neutral-800 dark:text-neutral-200 text-3xl md:text-sm font-bold mb-8">Movate (formerly CSS Corp)</p>
          <div className="mb-5">
            {skillBadgeList.movateItems.map((item) => (
              <span
                key={`techm-${item}`}
                className="mr-2 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed a web application integrating CI/CD tools with cloud services.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Designed an e-learning portal, increasing user engagement by 75% through an optimized UI/UX approach.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="experience" className="w-full">
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
