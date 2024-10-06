"use client";
import React from "react";
import { Timeline } from "./ui/Timeline";
import { experienceContent, skillBadgeList } from "@/data";

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
                className="mr-2 mt-1 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10 hover:border-blue-900"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            {experienceContent.techm.map((item, index) => (
              <div className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm" key={`techm-${index}`}>
                👉 {item}
              </div>
            ))}
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
                key={`photon-${item}`}
                className="mr-2 mt-1 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            {experienceContent.photon.map((item, index) => (
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm" key={`photon-${index}`}>
                👉 {item}
              </div>
            ))}
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
                key={`mindtree-${item}`}
                className="mr-2 mt-1 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            {experienceContent.mindtree.map((item, index) => (
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm" key={`mindtree-${index}`}>
                👉 {item}
              </div>
            ))}
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
                key={`dxc-${item}`}
                className="mr-2 mt-1 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            {experienceContent.dxc.map((item, index) => (
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm" key={`dxc-${index}`}>
                👉 {item}
              </div>
            ))}
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
                key={`movate-${item}`}
                className="mr-2 mt-1 inline-flex items-center rounded-md border border-blue-500 px-2 py-1 text-xs text-blue-500 ring-1 ring-inset ring-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-8">
            {experienceContent.movate.map((item, index) => (
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm" key={`movate-${index}`}>
                👉 {item}
              </div>
            ))}
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
