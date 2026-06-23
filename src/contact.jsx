import { useNavigate } from "react-router";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
export default function contact() {
  let navigate = useNavigate();
  return (
    <>
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
        <div className="touch">
          <h1>Get in Touch</h1>
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
