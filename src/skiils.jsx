import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { useNavigate } from "react-router";

export default function Skiils() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="head">
        <h1 className="text">My portfolio</h1>
        <div className="head_li">
          <a
            onClick={() => {
              navigate("/skill");
            }}
          >
            Skills
          </a>
          <a
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            About me
          </a>
          <a
            onClick={() => {
              navigate("/project");
            }}
          >
            Projects
          </a>
          <a
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            Contact
          </a>
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="hire"
        >
          Home
        </button>
      </div>
      <div className="color-p">
        <p className="color">What i work with</p>
      </div>
      <div className="all">
        <div className="list">
          <div className="reac">
            <FaReact size={"50px"} />
            <h1>React </h1>
          </div>
          <div className="ja">
            <TbBrandJavascript size={"50px"} />
            <h1>Javascript</h1>
          </div>
        </div>
        <div className="list-c">
          <div className="cs">
            <FaCss3Alt size={"50px"} />
            <h1>CSS</h1>
          </div>
          <div className="py">
            <FaPython size={"50px"} />
            <h1>Python</h1>
          </div>
        </div>
        <div className="list-b">
          <div className="git">
            <FaGithub size={"50px"} />
            <h1>Github</h1>
          </div>
          <div className="vs">
            <VscVscode size={"50px"} />
            <h1>VS code</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
