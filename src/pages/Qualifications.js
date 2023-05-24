import { Link } from "react-router-dom";


export default function Qualifications() {
  const techSkillsArr = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Express.js",
    "Mongoose.js",
    "JSX",
    "MongoDB",
    "noSQL Database",
    "Node.js",
  ];
  const softSkillsArr = [
    "Communication",
    "Teamwork",
    "Leadership",
    "Customer Service",
    "Adaptability",
    "Creativity",
    "Problem Solving",
    "Conflict Resolution",
    "Dedication",
    "Patience",
    "Critical Thinking",
  ];

  return (
    <div className="qualificationsPage">
      {/* <h4>Here are my qualifications</h4> */}
      <div className="skillsContainer">
        <div className="techSkills">
          <ul className="techSkillsList">
            <strong>Technical Skills</strong>
            {techSkillsArr.map((skill, i) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="softSkills">
          <ul className="softSkillsList">
            <strong>Soft Skills</strong>
            {softSkillsArr.map((skill, i) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="qualsLower">
        <p>Let's be honest, though...a list of skills can only provide you with a certain amount of insight. If you want to see what I'm really able to do, check out my work below. My web applications show off my overall skills, while the algorithms focus primarily on my critical thinking, problem solving, and logic.</p>

        <h2>Web Applications</h2>
        <div id="webappsLinkCont">
          <Link to="/webapps" id="webappsLink">
            <img src="RoadTripCentralHome--Screenshot.PNG" alt="Screenshot of RoadTripCentral's home page." width="100%" className="imgLink"/>
          </Link>
          
        </div>

        <h2>Algorithms</h2>
        <div className="algosCont">
        <Link to="/algorithms" id="algosLink" >
          <img src="luhn-algo-screenshot.PNG" alt="The Luhn algorithm, various forms." width="100%" className="imgLink"/>
          </Link>
          
          
        </div>
      </div>
    </div>
  );
}
