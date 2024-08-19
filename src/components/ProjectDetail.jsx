import React from 'react';
import './projectdetail.css';
import { useParams } from 'react-router-dom';
import project1 from '../images/Tayfun-Photo.png'; // Import your project images
import project2 from '../images/Tayfun-Photo.png';
import project3 from '../images/Tayfun-Photo.png';

const projects = {
  frontend: [
    {
      id: 1,
      title: 'Frontend Project 1',
      description: 'A modern web application built with React.',
      imageUrl: project1,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Learned about component-based architecture and state management in React.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
    {
      id: 2,
      title: 'Frontend Project 2',
      description: 'A dynamic website using Vue.js with SASS styling.',
      imageUrl: project2,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Gained experience with Vue.js and advanced CSS preprocessing with SASS.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
    {
      id: 3,
      title: 'Frontend Project 3',
      description: 'An Angular application with responsive design.',
      imageUrl: project3,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Explored Angular CLI and responsive design techniques.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
  ],
  backend: [
    {
      id: 1,
      title: 'Backend Project 1',
      description: 'A REST API developed with Node.js and Express.',
      imageUrl: project1,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Understanding of RESTful API design and MongoDB integration.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
    {
      id: 2,
      title: 'Backend Project 2',
      description: 'A Django-based application with PostgreSQL database.',
      imageUrl: project2,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Deepened knowledge of Django framework and relational databases.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
    {
      id: 3,
      title: 'Backend Project 3',
      description: 'A Spring Boot application using MySQL.',
      imageUrl: project3,
      technologies: [
        { name: 'Spring Boot', level: '80%' },
        { name: 'Java', level: '85%' },
        { name: 'MySQL', level: '75%' }
      ],
      learnings: 'Learned about Spring Boot’s conventions and MySQL database management.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
  ],
};

const ProjectDetail = () => {
  const { type, id } = useParams();
  const projectId = parseInt(id, 10);

  // Proje türüne göre verileri al
  const project = projects[type]?.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <div className="technologies-list">
        {project.technologies.map((tech, index) => (
          <div key={index} className="technology">
            <div className="technology-name">{tech.name}</div>
            <div className="progress-bar" data-progress={tech.level}>
              <span>{tech.level}</span>
            </div>
          </div>
        ))}
      </div>
      <h3>What I Learned:</h3>
      <p>{project.learnings}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;