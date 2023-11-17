import { title } from "@/components/primitives";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./components/project";

export default function ProjectsPage() {
	return (
    <div className="">
      <h1 className={title()}>Projects</h1>
      <div className="mt-4 md:mt-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
