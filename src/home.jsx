import { useNavigate } from "react-router";
export default function Home() {
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
              navigate("/contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="remote">
        <div>
          {" "}
          <div className="ava">
            <p>Available for remote Job</p>
          </div>
          <div className="body-text">
            <h1> i build clean</h1>
            <div className="fast_text">
              <h1>fast</h1>
              <h1 className="react_text">React</h1>
              <h1>Web-apps.</h1>
            </div>
          </div>
          <div className="front">
            <p>
              Front-end developer from Nigeria. I turn ideas into real products
              <p>Available for freelance full-time Role</p>
            </p>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                navigate("/project");
              }}
              className="see"
            >
              see my work
            </button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="contact"
            >
              contact me
            </button>
          </div>
        </div>

        <div className="my-pic">
          <img src="my-pic.jpg" alt="" className="picture" />
        </div>
      </div>
    </div>
  );
}
