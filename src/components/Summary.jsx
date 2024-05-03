import Header from "../components/UI/Header";
import ProfileImg from "../images/Profile.png";
import Resume from "../images/resume.png";

const Summary = () => {
  return (
    <div className="px-5 bg-violet-100 rounded-br-[70%] animate-whole" id="home">
      <Header />
      <div className="flex flex-row items-center ">
        <div className="top-3 left-8 w-1/4">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-[85%] relative left-[-20px] mirror-img"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <span className="text-3xl font-bold">
            Hello, Welcome to My Profile!
          </span>
          <div className="flex flex-col gap-1 max-w-[88%]">
            <span>
              Driven React - Python (Flask) and MERN Full Stack Developer with 2.75
              years of hands-on experience in crafting dynamic web applications.
            </span>
            <span>
              Proficient in React, adept at building responsive and engaging
              user interfaces.
            </span>
            <span>
              Passionate about contributing to innovative projects and
              collaborating effectively within cross-functional teams.
            </span>
          </div>
          <a href="https://drive.google.com/file/d/1VJlbKS6qQ0tKx0ATtjeOi_RFsJ3sjFe0/view?usp=sharing" className="w-fit">
            <button title="View Resume" className="flex flex-row gap-1 w-fit bg-violet-700 text-yellow-200 font-bold p-1.5 px-2.5 rounded-md align-middle items-center">
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
