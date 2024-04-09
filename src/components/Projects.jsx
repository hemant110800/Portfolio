import projectData from "../jsons/projects.json";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("");

  const hoverOnProjectHandler = (e, project) => {
    // console.log("hover", e, project);
    setSelectedProject(project);
  };
  const hoverOutProjectHandler = () => {
    setSelectedProject("");
  };
  return (
    <div className="mt-2 px-5 py-3 animate-whole" id="Projects">
      <div className="text-2xl text-violet-700 font-bold">Projects</div>
      <ul className="flex flex-row flex-wrap gap-4 mt-4 px-5 justify-center">
        {projectData.map((proj, ind) => {
          return (
            <li key={ind}>
              <a href={proj["proj_link"]}>
                {/* <div className="flex flex-col gap-2 items-center"> */}
                  <div
                    className="w-[300px]  items-center p-1 border-2 border-violet-700 rounded-md text-violet-700 font-bold cursor-pointer flex flex-col gap-0.5"
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
                  {selectedProject["project_name"] === proj["project_name"] && (
                    <div className="h-[50%] bg-violet-50 text-black text-center p-4 font-medium">{proj["proj_description"]}</div>
                  )}
                  </div>
                {/* </div> */}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
