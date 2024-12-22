import Header from "../components/UI/Header";
import ProfileImg from "../images/Profile.png";
import Resume from "../images/resume.png";

const Summary = () => {
  // rounded-br-[70%]
  return (
    <div className="lg:px-3.5 md:px-2.5 px-2.5 bg-violet-100 animate-whole" id="home">
      <Header />
      <div className="flex flex-row items-start lg:items-center py-2 gap-2">
        <div className="top-3 left-8 animate-whole pb-2">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-[50%] p-1 relative mirror-img"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <span className="lg:text-3xl md:text-2xl text-[14px] font-bold w-fit ">
            Hello, Welcome to My Profile!
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="text-justify animate-whole lg:text-base md:text-base text-sm">
              Driven React - Python (Flask) and MERN Full Stack Developer with 3.5
              years of hands-on experience in crafting dynamic web applications.
            </span>
            <span className="text-justify animate-whole lg:text-base md:text-base text-sm">
              Proficient in React, adept at building responsive and engaging
              user interfaces.
            </span>
            <span className="text-justify animate-whole lg:text-base md:text-base text-sm">
              Passionate about contributing to innovative projects and
              collaborating effectively within cross-functional teams.
            </span>
          </div>
          <a href="https://drive.google.com/file/d/1VJlbKS6qQ0tKx0ATtjeOi_RFsJ3sjFe0/view?usp=sharing" className="w-fit animate-whole" target="_blank" rel="noreferrer">
            <button title="View Resume" className="flex flex-row gap-1 w-fit bg-violet-900 text-yellow-200 font-bold p-1.5 px-2.5 rounded-md align-middle items-center lg:text-base md:text-base text-sm">
              View Resume
              <span>
                <img alt="View Resume" src={Resume} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
