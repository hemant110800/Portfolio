import skillsData from "../jsons/skills.json";
import { useState } from "react";
import fullstar from "../images/full-rating.png";
import nostar from "../images/no-rating.png";
import halfstar from "../images/half-rating.png";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [hoverClass, setHover] = useState("");

  const hoverOnSkillHandler = (e, skill) => {
    // console.log("hover", e, skill);
    setSelectedSkill(skill);
    setHover("animate-skill")
  };
  const hoverOutSkillHandler = () => {
    setSelectedSkill("");
    setHover("");
  };
  // console.log(skillsData);
  return (
    <div className="mt-2 lg:px-3.5 md:px-2.5 px-2.5 py-3 animate-whole" id="Skills">
      <div className="text-violet-900 font-bold animate-whole lg:text-2xl md:text-xl text-lg">Skills</div>
      <ul className="flex flex-row flex-wrap gap-3 mt-2 px-9 justify-center">
        {skillsData.map((skill, ind) => {
          return (
            <li key={ind}>
              <div
                className={`p-0.5 px-4 rounded-full border-2 border-violet-700 text-violet-700 font-bold cursor-pointer flex flex-col items-center ${selectedSkill["language"] === skill["language"] && hoverClass}`}
                onMouseOver={e => hoverOnSkillHandler(e, skill)}
                onMouseOut={hoverOutSkillHandler}
              >
                <span className="lg:text-base text-sm">{skill["language"]}</span>
                {selectedSkill["language"] === skill["language"] && (
                  <div className="flex pb-1">
                    {Array.from(Array(5), (e, i) => {
                      if (i + 1 <= selectedSkill["rate"]) {
                        return (
                          <img key={i} className="w-4 h-4" alt="fill" src={fullstar} />
                        );
                      } 
                      else if(i+1 - selectedSkill["rate"] === 0.5){
                        return (
                            <img key={i} className="w-4 h-4" alt="half" src={halfstar} />
                          );
                      }
                      else {
                        return (
                          <img key={i} className="w-4 h-4" alt="empty" src={nostar} />
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
