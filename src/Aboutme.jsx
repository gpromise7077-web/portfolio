import { useNavigate } from "react-router";
export default function aboutme() {
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
        <div className="profile-text">
          <p className="who">WHO I AM</p>
        </div>
        <div className="superior-all">
          <div className="all-profile">
            <div className="profile">
              <img src="my-pic.jpg" alt="" className="man" />
              <div>
                <div className="promise">
                  <h1 className="name">Godwin</h1>
                  <h1 className="pro">Promise</h1>
                </div>
                <p className="about">Front-end Developer. Nigeria</p>
                <p className="com">Computer science, University of delta</p>
              </div>
              <div className="clean">
                <div className="service">
                  <h1>My services</h1>
                </div>
                <div className="clean_1">
                  <p className="web">
                    Web development i buid clean responsive interactive website
                    with cool UI design...E-commerce ,Fintech,Education,
                    HTML5,CSS,JS
                  </p>

                  <p className="wrap">
                    I help businesses and creators build stunning websites, edit
                    professional videos, and design motion graphics that capture
                    attention and drive engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self">
          <p>
            self-taught front-end Developer from Nigeria.i build <br />
            React-Apps,AI-Powered tools,and clean UI that actually <br />
            work. Passionate about solving real problems for real <br />
            poeple_especially Africa.
          </p>
        </div>

        <br />
      </div>
    </>
  );
}
