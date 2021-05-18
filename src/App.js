import React from "react";
import "./App.css";
import Foto from "./Media/Mask Group.png";
import Technologies from "./Components/Technologies";
import Carrousel from "./Components/Carrousel";
import Form from "./Components/Form";
import Links from "./Components/Links";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="item1">
          <h1 className="title" data-aos="fade-down" data-aos-duration="3000">
            MICAELA ALESSANDRA ALVAREZ
          </h1>
          <h3
            className="subtitle"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            FULL STACK DEVELOPER
          </h3>
          <Links />
          <img src={Foto} alt="" className="foto" />
        </div>
        <div className="aboutMe" data-aos="fade-right" data-aos-duration="3000">
          <p>ABOUT ME</p>
        </div>
        <div className="item2"></div>
      </div>
      <div className="textZone">
        <p className="text1">
          “I’M A FULL STACK DEVELOPER, WHO LOVES TO SOLVE CHALLENGES, TO FUSE,
          <br />
          CREATIVITY, INNOVATION, STRATEGY AND CRAFT. I LOVE TO LEARN SO I’M
          CURRENTLY
          <br />
          IMPROVING MY EXPERIENCE ON TYPESCRIPT, GRAPHQL, APOLLO AND MONGODB.
          <br />
          I HAVE ONE GOAL TO REACH, THAT IS TO DEVELOP AS A PROFESSIONAL <br />
          IN THE TECHNOLOGY WORLD, THAT IS WHY I’M LOOKING FOR AN <br />
          OPPORTUNITY TO TAKE MY EXPERIENCE <br />
          TO THE NEXT LEVEL”
        </p>
      </div>
      <div className="technologies">
        <Technologies />
      </div>
      <div className="skills" data-aos="fade-left" data-aos-duration="3000">
        <p>TECHNOLOGIES</p>
      </div>
      <div className="item3"></div>
      <div className="textZone1">
        <p className="text2">
          “I CONSIDER MYSELF A VERSATILE AND <br /> COLLABORATIVE PERSON, ALWAYS
          WILLING TO MOTIVATE THE TEAM,
          <br /> WITH GREAT CAPACITY TO COMMUNICATE AND ADAPT TO ANY
          ENVIRONMENT”
        </p>
      </div>
      <div className="item4"></div>
      <div className="projects" data-aos="fade-right" data-aos-duration="3000">
        <p>PROJECTS</p>
      </div>
      <div className="item6">
        <Carrousel />
      </div>
      <div className="item5"></div>
      <div className="contactMe" data-aos="fade-left" data-aos-duration="3000">
        <p>CONTACT ME</p>
      </div>
      <div
        id="contactSection"
        className="item7"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
