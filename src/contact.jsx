import { useNavigate } from "react-router";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function contact() {
  let navigate = useNavigate();
  return (
    <>
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
                navigate("/contact");
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
            className="hire"
          >
            Home
          </button>
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
        <div className="align">
          <a
            href="mailto:gpromise7077@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AiOutlineMail size={"50px"} />
            <p className="email">gpromise7077@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  );
}
