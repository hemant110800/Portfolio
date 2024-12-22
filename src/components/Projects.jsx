import projectData from "../jsons/projects.json";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [hoverClass, setHover] = useState("");

  const hoverOnProjectHandler = (e, project) => {
    // console.log("hover", e, project);
    setHover("animate-project");
    setSelectedProject(project);
  };
  const hoverOutProjectHandler = () => {
    setHover("");
    setSelectedProject("");
  };
  return (
    <div className="mt-2 lg:px-3.5 md:px-2.5 px-2.5 py-3 animate-whole" id="Projects">
      <div className=" text-violet-900 font-bold animate-whole lg:text-2xl md:text-xl text-lg">Projects</div>
      <ul className="flex flex-row flex-wrap gap-4 mt-2 px-5 justify-center">
        {projectData.map((proj, ind) => {
          return (
            <li key={ind}>
              <a href={proj["proj_link"]} target="_blank" rel="noreferrer">
                <div
                  className={`w-[300px] items-center p-1 border-2 border-violet-700 rounded-md text-violet-700 font-bold cursor-pointer flex flex-col gap-0.5 ${selectedProject[
                    "project_name"
                  ] === proj["project_name"] && hoverClass}`}
                  onMouseOver={e => hoverOnProjectHandler(e, proj)}
                  onMouseOut={hoverOutProjectHandler}
                >
                  <img
                    className="h-[162px] w-[200px] pt-2"
                    src={proj["img"]}
                    alt="food app"
                  ></img>
                  <span className="w-full text-center">
                    {proj["project_name"]}
                  </span>
                  <div
                    title={proj["proj_description"]}
                    className="h-[210px] overflow-hidden bg-violet-50 text-black text-center p-4 font-medium vertical-ellipsis"
                  >
                    {proj["proj_description"]}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
