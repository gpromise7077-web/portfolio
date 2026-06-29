import { useNavigate } from "react-router";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
export default function contact() {
  let navigate = useNavigate();
  const [open, setopen] = useState(false);
  return (
    <>
      <div>
        <div className="flex items-center justify-between bg-[#2d2d36] rounded-[35px] p-5 mt-2 ml-2 mr-2">
          <div className="port">
            <h1 className="text">PORTFOLIO</h1>
          </div>
          <GiHamburgerMenu
            onClick={() => {
              if (open === true) {
                setopen(false);
              } else {
                setopen(true);
              }
            }}
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
        <div className="touch">
          <h1 className="open">Get in Touch</h1>
          <div className="creative">
            <p>
              I am always open to discussing new projects, creative ideas, or{" "}
              <br />
              <div className="creat">
                <p>opportunities to be part of your vision.</p>
              </div>
            </p>
          </div>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/godwin-promise-1540b339a"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaLinkedin size={"50px"} />
            <p className="linked">LinkedIn: godwin-promise</p>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/gpromise7077-web"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaGithub size={"50px"} />
            <p className="cl">Github: gpromise7077-web</p>
          </a>
        </div>
        <div className="loca">
          <CiLocationOn size={"50px"} />
          <p>Location: Delta State, Nigeria</p>
        </div>
      </div>
    </>
  );
}
