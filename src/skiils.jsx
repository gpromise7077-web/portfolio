import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { useNavigate } from "react-router";

export default function Skiils() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="head">
        <div className="port">
          <div className="circle"></div>
          <h1 className="text">PORTFOLIO</h1>
        </div>
        <div className="head_li">
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
        </div>
        <div className="hi">
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
      <div className="color-p">
        <h1 className="color">What i work with</h1>
        <div className="co">
          <p className="colo">
            My toolkit spans the full stack — from pixel-perfect interfaces to
          </p>
          <div className="col">
            <p>scalable cloud infrastructure.</p>
          </div>
        </div>
      </div>
      <div className="all">
        <div className="list">
          <div className="reac">
            <FaReact size={"50px"} />
            <h1>REACT</h1>
          </div>
          <div className="ja">
            <TbBrandJavascript size={"50px"} />
            <h1>JAVASCRIPT</h1>
          </div>
        </div>
        <div className="list-c">
          <div className="cs">
            <FaCss3Alt size={"50px"} />
            <h1>CSS</h1>
          </div>
          <div className="py">
            <FaPython size={"50px"} />
            <h1>PYTHON</h1>
          </div>
        </div>
        <div className="list-b">
          <div className="git">
            <FaGithub size={"50px"} />
            <h1>GITHUB</h1>
          </div>
          <div className="vs">
            <VscVscode size={"50px"} />
            <h1>VSCODE</h1>
          </div>
        </div>
        <div className="list-a">
          <div className="node">
            <FaNodeJs size={"50px"} />
            <h1>NODE.JS</h1>
          </div>
          <div className="next">
            <RiNextjsLine size={"50px"} />
            <h1>NEXT.JS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
