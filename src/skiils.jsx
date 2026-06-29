import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { RiNextjsLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useState } from "react";
export default function Skiils() {
  let navigate = useNavigate();
  const [open, setopen] = useState(false);
  return (
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
      <div className="flex items-center flex-col">
        <h1 className="text-white font-san text-2xl">What i work with</h1>
        <div className="mt-5">
          <p className="font-san text-[#727377]">
            My toolkit spans the full stack — from <br /> pixel-perfect
            interfaces to scalable cloud <br />
            <p className="text-[#727377] font-san ">infrastructure.</p>
          </p>
        </div>
      </div>
      <div className="all">
        <div className="flex items-center text-center justify-between gap-10">
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 items-center gap-2">
            <FaReact size={"50px"} className="text-white" />
            <h1 className="text-white">REACT</h1>
          </div>
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-40 gap-2">
            <TbBrandJavascript size={"50px"} className="text-white" />
            <h1 className="text-white">JAVASCRIPT</h1>
          </div>
        </div>
        <div className="flex items-center text-center justify-between gap-10">
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 items-center">
            <FaCss3Alt size={"50px"} className="text-white" />
            <h1 className="text-white font-san">CSS</h1>
          </div>
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 items-center gap-2">
            <FaPython size={"50px"} className="text-white" />
            <h1 className="text-white">PYTHON</h1>
          </div>
        </div>
        <div className="flex items-center text-center justify-between gap-10">
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 ites-center gap-2">
            <FaGithub size={"50px"} className="text-white" />
            <h1 className="text-white">GITHUB</h1>
          </div>
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 items-center">
            <VscVscode size={"50px"} className="text-white" />
            <h1 className="text-white">VSCODE</h1>
          </div>
        </div>
        <div className="flex items-center text-center justify-between gap-10">
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30 items-center gap-2">
            <FaNodeJs size={"50px"} className="text-white" />
            <h1 className="text-white">NODE.JS</h1>
          </div>
          <div className="flex p-3 border-[#5f55dc] border-1 rounded-[10px] w-30">
            <RiNextjsLine size={"50px"} className="text-white" />
            <h1 className="text-white">NEXT.JS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
