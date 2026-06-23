import { useNavigate } from "react-router";
import { SiChatbot } from "react-icons/si";

export default function project() {
  let navigate = useNavigate();
  return (
    <>
      {" "}
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
        <div className="across">
          <p>A curated project that showcase my expertise</p>
          <div className="expert">
            <p>across industries.</p>
          </div>
        </div>
        <div className="pro-c">
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
