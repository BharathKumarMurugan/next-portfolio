import React from "react";
import { Card, CardDescription, CardSkeletonContainer, CardTitle, Skeleton } from "./ui/Card";
import { Tabs } from "./ui/Tabs";

const Skills = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <TabContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <TabContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <TabContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <TabContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <TabContent />
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="w-full">
      {/* use Feature Sections from Aceternity UI */}
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-4 max-w-4xl">My Skills</h2>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    </section>
  );
};

const TabContent = () => {
  return (
    <Card>
    <CardSkeletonContainer>
      <Skeleton />
    </CardSkeletonContainer>
    <CardTitle>Damn good card</CardTitle>
    <CardDescription>
      A card that showcases a set of tools that you use to create your
      product.
    </CardDescription>
  </Card>
  );
};



export default Skills;
