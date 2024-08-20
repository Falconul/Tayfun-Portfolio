import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './project.css';
import project1 from '../images/Creative-agency.png';
import project2 from '../images/Cooking-Book.png';
import project3 from '../images/To-Do-List.png';
import project4 from '../images/Restaurant.png';
import project5 from '../images/To-Do-List-2.png';
import project6 from '../images/Hacker-News.png';
import project7 from '../images/Whats-My-IP.png';
import project8 from '../images/Mini-Yelp.png';
import project9 from '../images/Food-Book-2.png';
import project11 from '../images/Game-Dev-Finder.png';
import { Link } from 'react-router-dom';

const frontendProjects = [
  {
    id: 1,
    title: "Frontend Project 1",
    imageUrl: project1,
    detailsUrl: "/project-details/frontend/1",
 
  },
  {
    id: 2,
    title: "Frontend Project 2",
    imageUrl: project2,
    detailsUrl: "/project-details/frontend/2",
  },
  {
    id: 3,
    title: "Frontend Project 3",
    imageUrl: project3,
    detailsUrl: "/project-details/frontend/3",
  },
  {
    id:4,
    title:"Frontend Project 4",
    imageUrl: project4,
    detailsUrl: "/project-details/frontend/4",
  },
  {
    id:5,
    title:"Frontend Project 5",
    imageUrl: project5,
    detailsUrl: "/project-details/frontend/5",
  },
  {
    id:6,
    title:"Frontend Project 6",
    imageUrl: project6,
    detailsUrl: "/project-details/frontend/6",
  },
  {
    id:7,
    title:"Frontend Project 7",
    imageUrl: project7,
    detailsUrl: "/project-details/frontend/7",
  },
  {
    id:8,
    title:"Frontend Project 8",
    imageUrl: project8,
    detailsUrl: "/project-details/frontend/8",
  },
];

const backendProjects = [
  {
    id: 9,
    title: "Backend Project 1",
    imageUrl: project9, 
    detailsUrl: "/project-details/backend/9",
  },
  {
    id:10,
    title: "Backend Project 3",
   
    detailsUrl: "/project-details/backend/10",
  },
  {
    id: 11,
    title: "Backend Project 4",
    imageUrl: project11,
    detailsUrl: "/project-details/backend/11",
  },


];

const Project = () => {
  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>

      {/* Frontend Projects Carousel */}
      <h2>FrontEnd</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {frontendProjects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <img src={project.imageUrl} alt={project.title} />
            <div className="carousel-caption">
              <h3>{project.title}</h3>
              <Link to={project.detailsUrl} className="view-details-button">View Details</Link>
            </div>
          </div>
        ))}
      </Carousel>
      <hr className="divider-end" />
      {/* Backend Projects Carousel */}
      <h2>BackEnd</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {backendProjects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <img src={project.imageUrl} alt={project.title} />
            <div className="carousel-caption">
              <h3>{project.title}</h3>
              <Link to={project.detailsUrl} className="view-details-button">View Details</Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Project;
