import { useNavigate } from "react-router";
export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="head">
        <div className="port">
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
      <div className="remote">
        <div>
          {" "}
          <div className="ava">
            <div className="for"></div>
            <p>Available for remote Job</p>
          </div>
          <div className="body-text">
            <h1 className="i"> i Build Clean</h1>
            <div className="fast_text">
              <h1 className="digi">Digital Experiences.</h1>
            </div>
          </div>
          <div className="front">
            <p>
              I specialize in architecting high-performance web applications
              with a focus <br /> on Fintech, E-commerce, and Enterprise SaaS.{" "}
              <br />
              Precision in every pixel, performance in every line.
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
      <div className="years">
        <div>
          <h1 className="yrs">5+</h1>
          <p className="exp">Years Experience</p>
        </div>
        <div>
          <h1 className="pr">10+</h1>
          <p className="del">projects delivered</p>
        </div>
        <div>
          <h1 className="ha">25+</h1>
          <p className="cus">Happy customers</p>
        </div>
      </div>
    </div>
  );
}
