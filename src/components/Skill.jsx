import React from 'react';
import './skill.css';

const frontendSkills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 75 },
  { name: 'CSS', level: 80 },
  { name: 'HTML', level: 90 }
];

const backendSkills = [
  { name: 'Node.js', level: 70 },
  { name: 'Express', level: 65 },
  { name: 'MongoDB', level: 60 }
];

const gameDevSkills = [
  { name: 'C#', level: 40 },
  { name: 'Unity', level: 75 }
];

export default function Skill() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="horizontal-skills">
          <div className="skills-category">
            <h3>Frontend Skills</h3>
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill">
                <span className="skill-name">{skill.name}</span>
                <span className="learning-status">Learning in Progress</span>
                <div className="progress-bar">
                  <div
                    className="progress-green"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div
                    className="progress-red"
                    style={{ width: `${100 - skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="vertical-divider"></div>

          <div className="skills-category">
            <h3>Backend Skills</h3>
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill">
                <span className="skill-name">{skill.name}</span>
                <span className="learning-status">Learning in Progress</span>
                <div className="progress-bar">
                  <div
                    className="progress-green"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div
                    className="progress-red"
                    style={{ width: `${100 - skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="horizontal-divider"></div>

        <div className="skills-category full-width">
          <h3>Game Development Skills</h3>
          {gameDevSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <span className="learning-status">Learning in Progress</span>
              <div className="progress-bar">
                <div
                  className="progress-green"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div
                  className="progress-red"
                  style={{ width: `${100 - skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

