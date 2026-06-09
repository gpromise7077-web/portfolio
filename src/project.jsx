import { useNavigate } from "react-router";
import { SiChatbot } from "react-icons/si";

export default function project() {
  let navigate = useNavigate();
  return (
    <>
      {" "}
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
        <div className="project2">
          <div className="project1">
            <SiChatbot size={"50px"} className="icon" />
            <h1 className="link1"> MY-ChatBot</h1>
            <p className="fully">
              A fully functioning AI chatbot that interact with users Text
              powered by GrOQ API{" "}
            </p>
            <button
              className="project-link"
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
