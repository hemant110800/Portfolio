import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import gfg from "../images/gfg.png";
import hackerrank from "../images/hackerrank.png";

const Contact = () => {
  return (
    <div className="mt-2 px-5 py-3" id="Contact">
      <div className="text-2xl text-violet-700 font-bold">Contact</div>
      <div className="flex gap-4 w-full items-center flex justify-center mt-2">
        <a href="https://github.com/hemant110800/">
          <img src={github} alt="github" className="w-[30px]" />
        </a>
        <a href="https://www.linkedin.com/in/hemantbhati">
          <img src={linkedIn} alt="linkedin" className="w-[30px]" />
        </a>
        <a href="mailto:hemant110800@gmail.com">
          <img src={gmail} alt="mail" className="w-[30px]" />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/hemant110800/profile">
          <img src={gfg} alt="mail" className="w-[30px]" />
        </a>
        <a href="https://www.hackerrank.com/hemant110800">
          <img src={hackerrank} alt="mail" className="w-[30px]" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
