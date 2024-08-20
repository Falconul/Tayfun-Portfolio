import React from 'react';
import './projectdetail.css';
import { useParams } from 'react-router-dom';
import project1 from '../images/Creative-agency.png'; // Import your project images
import project2 from '../images/Cooking-Book.png';
import project3 from '../images/To-Do-List.png';
import project4 from '../images/Restaurant.png';
import project5 from '../images/To-Do-List-2.png';
import project6 from '../images/Hacker-News.png';
import project7 from '../images/Whats-My-IP.png';
import project8 from '../images/Mini-Yelp.png';
import project9 from '../images/Food-Book-2.png';
import project11 from '../images/Game-Dev-Finder.png';

const projects = {
  frontend: [
    {
      id: 1,
      title: 'Creative-Agency',
      description: 'This Project is my first project where I started learning Web Software.',
      imageUrl: project1,
      technologies: [
        { name: 'HTML', level: '36,4%' },
        { name: 'CSS', level: '63,6%' }
      
      ],
      learnings: 'I worked alone on this project and tried a lot of codes to learn Html Css in the project.',
      link:"https://github.com/Falconul/Creative-Agency",
    },
    {
      id: 2,
      title: 'Cooking-Book',
      description: 'This project is my second project in Web Software. My 1st cookbook project.',
      imageUrl: project2,
      technologies: [
        { name: 'HTML', level: '69,2%' },
        { name: 'CSS', level: '30,8%' }
      
      ],
      learnings: 'I worked with my coursemate on this project. In this project, I tried to learn how to use animation other than Html and Css.',
    
      link:"https://github.com/Falconul/Cook-book",
    },
    {
      id: 3,
      title: 'To-Do-List-1',
      description: 'I worked with 2 of my coursemate on this project.',
      imageUrl: project3,
      technologies: [
        { name: 'Html', level: '23,9%' },
        { name: 'Css', level: '48,4%' },
        { name: 'Javascript', level: '27,7%' }
      ],
      learnings: ' In this project, I tried to further my animation knowledge.',
      link:"https://github.com/Falconul/To-Do-List",
    },
    {
      id: 4,
      title: 'Restaurant',
      description: 'I worked with my coursemate on this project.',
      imageUrl: project4,
      technologies: [
        { name: 'Html', level: '27,6%' },
        { name: 'Css', level: '26,4%' },
        { name: 'Javascript', level: '46%' }
      ],
      learnings: ' I tried to learn Js and improve my knowledge.',
      link:"https://github.com/Falconul/Restaurant",
    },
    {
      id: 5,
      title: 'To-Do-List-2',
      description: 'I worked with a coursemate on this project.',
      imageUrl: project5,
      technologies: [
        { name: 'Html', level: '2,2%' },
        { name: 'Css', level: '26%' },
        { name: 'JavaScript', level: '71,8%' }
      ],
      learnings: ' This was our 2nd To-Do-List Project. From my perspective, I can say that this was the project where I realized that I started to learn something and improve myself.',
      link:"https://github.com/Falconul/To-Do-List-2",
    },
    {
      id: 6,
      title: 'Hacker-News',
      description: 'An Angular application with responsive design.',
      imageUrl: project6,
      technologies: [
        { name: 'Html', level: '1,1%' },
        { name: 'Css', level: '14,2%' },
        { name: 'JavaScript', level: '84,7%' }
      ],
      learnings: 'I worked with API for the first time in this project and it was quite challenging for me.',
      link:"https://github.com/Falconul/HackerNews",
    },
    {
      id: 7,
      title: 'Whats-My-IP',
      description: 'I worked with 2 of my course friends on this project. ',
      imageUrl: project7,
      technologies: [
        { name: 'Html', level: '4,4%' },
        { name: 'Css', level: '6,8%' },
        { name: 'JavaScript', level: '88,8%' }
      ],
      learnings: 'The fetching IP I used has expired. It was a very challenging project. But in this project, I learned a lot about APIs and Fetching.',
      link:"https://github.com/Falconul/whatsmyIP",
    },
    {
      id: 8,
      title: 'Mini-Yelp',
      description: 'I worked with my 2 course friends on this project.',
      imageUrl: project8,
      technologies: [
        { name: 'Html', level: '2,3%' },
        { name: 'Css', level: '0,6%' },
        { name: 'JavaScript', level: '97,1%' }
      ],
      learnings: 'In the MVP Mini Yelp project, my API and Fecthing knowledge improved and I started to feel a little more confident.',
      link:"https://github.com/Falconul/Mini_Yelp",
    },

  ],




  backend: [
    {
      id: 9,
      title: 'Food-Book',
      description: 'I worked with my one course friends on this project.',
      imageUrl: project9,
      technologies: [
        { name: 'Css', level: '3,6%' },
        { name: 'JavaScript', level: '96,4%' }
      ],
      learnings: 'It was very fun to work on both Backend and Frontend on this project. It was very satisfying to see that I was able to achieve something in this project and to see the results of what I did.',
      link:"https://github.com/Falconul/MongoDB-Cookbook",
    },
    {
      id: 10,
      title: 'crossover',
      description: 'In this project, we made a crossover with another class. ',
    
      technologies: [
        { name: 'JavaScript', level: '100%' },
 
      ],
      learnings: 'We wrote the Backend codes of the site, the other class wrote the Frontend part.',
      link:"https://github.com/Falconul/crossover",
    },
    {
      id: 11,
      title: 'Game-Dev-Finder',
      description: 'This project is my final project in the course. ',
      imageUrl: project11,
      technologies: [
        { name: 'Html', level: '0,5%' },
        { name: 'Css', level: '30,8%' },
        { name: 'JavaScript', level: '68,7%' }
      ],
      learnings: ' I did the project alone. Of course, I got a lot of help from ChatGpt, the internet and my course teacher. In this project, it was very nice and very satisfying to design the website I dreamed of and write the codes on my own.',
      link:"https://github.com/Falconul/GameFinder",
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