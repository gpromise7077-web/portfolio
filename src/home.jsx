import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
export default function Home() {
  let navigate = useNavigate();
  const [open, setopen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between bg-[#2d2d36] rounded-[35px] p-5 mt-2 ml-2 mr-2">
        <div className="port">
          <h1 className="text">PORTFOLIO</h1>
        </div>
        <GiHamburgerMenu
          onClick={() => setopen(true)}
          size={"30px"}
          className="text-white"
        />
        <button onClick={() => setopen(false)}>
          <FiX size={"30px"} className="text-white" />
        </button>
      </div>
      <div>
        {open && (
          <div className="flex flex-col items-center gap-2 bg-[black] border-1 border-[#251c3d] mr-5 ml-5 pt-5 pb-5 mt-3 text-[#727377] rounded-[15px]">
            <a
              onClick={() => {
                navigate("/skill");
              }}
            >
              SKILLS
            </a>
            <a
              onClick={() => {
                navigate("/aboutme");
              }}
            >
              ABOUT ME
            </a>
            <a
              onClick={() => {
                navigate("/project");
              }}
            >
              PROJECTS
            </a>
            <a
              onClick={() => {
                navigate("/contact");
              }}
            >
              CONTACT
            </a>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </a>
            <div className="flex items-center bg-[#a186f1] pl-10 pr-10 rounded-[5px]">
              <button
                className="hire"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                HIRE ME
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="remote">
        <div>
          {" "}
          <div className="flex items-center border-[#5f55dc] border-1 w-[fit-content] rounded-[25px] pl-2 pr-5 gap-5 ml-2">
            <div className="bg-[#7c3aed] rounded-[50%] w-3 h-3"></div>
            <p className="text-[#6961e0] text-2xl">Available for remote Job</p>
          </div>
          <div className="mt-10 ml-2">
            <p className="text-[60px] font-extrabold font-san text-white ">
              {" "}
              I Build Clean
            </p>
            <p className="font-san font-extrabold text-[#ababad] text-[60px] ">
              Digital Experiences.
            </p>
          </div>
          <div className="ml-2 mt-10">
            <p className="text-[#727377] font-san -text-2xl">
              I specialize in architecting high-performance web applications
              with a focus <br /> on Fintech, E-commerce, and Enterprise SaaS.{" "}
              <br />
              Precision in every pixel, performance in every line.
            </p>
          </div>
          <div className="flex mt-10 gap-3 ml-2">
            <button
              onClick={() => {
                navigate("/project");
              }}
              className="see"
            >
              see my work
            </button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="contact"
            >
              contact me
            </button>
          </div>
        </div>
        <div className="my-pic">
          <img src="my-pic.jpg" alt="" className="picture" />
        </div>
      </div>
      <div className="ml-2 flex gap-3 mt-10">
        <div>
          <h1 className="yrs">5+</h1>
          <p className="exp">Years Experience</p>
        </div>
        <div>
          <h1 className="pr">10+</h1>
          <p className="del">projects delivered</p>
        </div>
        <div>
          <h1 className="ha">25+</h1>
          <p className="cus">Happy customers</p>
        </div>
      </div>
    </div>
  );
}
