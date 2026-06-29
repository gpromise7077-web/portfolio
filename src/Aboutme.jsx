import { useNavigate } from "react-router";
import { SiFrontendmentor } from "react-icons/si";
import { FaChartLine } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { useState } from "react";
export default function aboutme() {
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
        <div className="profile-text">
          <p className="profile">services</p>
          <h1 className="who">What I Do</h1>
          <p className="promise">
            Crafting digital solutions that merge <br /> aesthetics with
            engineering rigor.
          </p>
        </div>
        <div className="flex flex-col items-center pt-5 gap-5">
          <div className="p-15 pb-5 w-90 border-[#251c3d] border-1 rounded-[10px] ml-2 items-center pt-5 pl-5 bg-[#09090a]">
            <div className="com">
              <SiFrontendmentor size={"20px"} />
            </div>
            <div className="name">
              <h4>Frontend Architecture</h4>
            </div>
            <div className="pro">
              <p>
                I build clean, component-driven interfaces using React and
                Next.js
                <br />
                with pixel-perfect attention to detail.
              </p>
            </div>
          </div>
          <div className="p-15 pb-5 w-90 border-[#251c3d] border-1 rounded-[10px] ml-2 items-center pt-5 pl-5 bg-[#09090a]">
            <div className="web">
              <IoFlashOutline size={"20px"} />
            </div>
            <div>
              <h4 className="self">Backend Engineering</h4>
            </div>
            <div className="service">
              <p>
                Scalable APIs and microservices built with Node.js, Python, and
                <br />
                cloud-native technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 gap-5">
        <div className="p-15 pb-5 w-90 border-[#251c3d] border-1 rounded-[10px] ml-2 items-center pt-5 pl-5 bg-[#09090a]">
          <div className="wrap">
            <FaChartLine size={"20px"} />
          </div>
          <div className="clean">
            <h4>Performance Optimization</h4>
          </div>
          <div className="clean-1">
            <p>
              Core Web Vitals mastery — from lazy loading to CDN strategies that
              <br />
              push sub-second load times.
            </p>
          </div>
        </div>
        <div className="p-15 pb-5 w-90 border-[#251c3d] border-1 rounded-[10px] ml-2 items-center pt-5 pl-5 bg-[#09090a]">
          <div className="fly">
            <LuRocket size={"20px"} />
          </div>
          <div className="product">
            <h4>Product Strategy</h4>
          </div>
          <div className="think">
            <p>
              End-to-end product thinking, from wireframes to deployment, <br />{" "}
              across <br />
              Fintech, E-commerce, and SaaS.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-90 gap-5  pt-5 border-[#2d2d36] border-1 rounded-[10px] ml-5 mt-5 mr-5 p-15 bg-[#09090a] pl-5 pr-2">
        <div className="link1">
          <h1> About Me</h1>
          <div className="project-link">
            <p>
              I am a full-stack developer with over five years of experience{" "}
              <br />
              building production-grade web applications. My work spans <br />
              Fintech dashboards, E-commerce platforms, and Enterprise <br />{" "}
              SaaS products. <br /> <br />I believe in writing clean,
              maintainable code and designing <br />
              interfaces that users love. Every project I take on is an <br />
              opportunity to push the boundaries of what is possible on the web.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-100">
          <div className="flex w-50 gap-3 items-center pl-2 pr-2 ml-3">
            <div className="bg-[#1f1f20] rounded-[10px] p-15 pt-5 pb-2 text-center">
              <h1 className="project1">5+</h1>
              <p className="project2">Years</p>
            </div>
            <div className="bg-[#1f1f20] rounded-[10px] p-15 pt-5 pb-2 text-center">
              <h1 className="push">10+</h1>
              <p className="is">Projects</p>
            </div>
          </div>
          <div className="flex w-50 gap-3 items-center pl-2 pr-2 ml-3">
            <div className="bg-[#1f1f20] rounded-[10px] p-15 pt-5 pb-2 text-center">
              <h1 className="possible">25+</h1>
              <p className="take">Clients</p>
            </div>
            <div className="bg-[#1f1f20] rounded-[10px] p-15 pt-5 pb-2 text-center">
              <h1 className="an">99%</h1>
              <p className="platform">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
