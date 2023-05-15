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
      <h4>Here are my qualifications</h4>
      <div className="skillsContainer">
        <div className="techSkills">
          <ul className="techSkillsList"><strong>Technical Skills</strong>
            {techSkillsArr.map((skill, i) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="softSkills">
          <ul className="softSkillsList"><strong>Soft Skills</strong>
            {softSkillsArr.map((skill, i) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="qualsLower">
        <div className="webappsLink">
            <Link to="/webapps">Web Apps</Link>
        </div>
        <div className="algosLink">
            <Link to="/algorithms">Algorithms</Link>
        </div>
      </div>
    </div>
  );
}
