import { useNavigate } from "react-router";
import { SiChatbot } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
export default function project() {
  let navigate = useNavigate();
  const [open, setopen] = useState(false);
  return (
    <>
      {" "}
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
        <div className="across">
          <p>A curated project that showcase my expertise</p>
          <p>across industries.</p>
        </div>
        <div className="border-[#5f55dc] border-1 w-[fit-content] ml-15 mt-5 rounded-[10px] pr-5 pl-5 pb-5">
          <div className="pro-b">
            <h1 className="pro-e"> MY-ChatBot</h1>
            <SiChatbot size={"50px"} className="AI" />
            <p className="pro-d">
              A fully functioning AI chatbot that <br /> interact with users
              Text powered by <br />
              GrOQ API{" "}
            </p>
            <button
              className="pro-a"
              onClick={() => {
                window.open(
                  "https://chat-bot-nine-lemon.vercel.app/",
                  "_blank",
                );
              }}
            >
              Go-to
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
