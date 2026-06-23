import { useNavigate } from "react-router";
import { SiFrontendmentor } from "react-icons/si";
import { FaChartLine } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import { LuRocket } from "react-icons/lu";
export default function aboutme() {
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
        <div className="profile-text">
          <p className="profile">services</p>
          <h1 className="who">What I Do</h1>
          <p className="promise">
            Crafting digital solutions that merge <br /> aesthetics with
            engineering rigor.
          </p>
        </div>
        <div className="development">
          <div className="about">
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
          <div className="help">
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
      <div className="align">
        <div className="get">
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
        <div className="carry">
          <div className="fly">
            <LuRocket size={"20px"} />
          </div>
          <div className="product">
            <h4>Product Strategy</h4>
          </div>
          <div className="think">
            <p>
              End-to-end product thinking, from wireframes to deployment, <br />{" "}
              across Fintech, E-commerce, and SaaS.
            </p>
          </div>
        </div>
      </div>
      <div className="icon">
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
        <div className="fin">
          <div className="grid">
            <div className="fully">
              <h1 className="project1">5+</h1>
              <p className="project2">Years</p>
            </div>
            <div className="push1">
              <h1 className="push">10+</h1>
              <p className="is">Projects</p>
            </div>
          </div>
          <div className="take1">
            <div className="on">
              <h1 className="possible">25+</h1>
              <p className="take">Clients</p>
            </div>
            <div className="the">
              <h1 className="an">99%</h1>
              <p className="platform">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
