import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './project.css';
import project1 from '../images/Tayfun-Photo.png';
import project2 from '../images/Tayfun-Photo.png';
import project3 from '../images/Tayfun-Photo.png';
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
];

const backendProjects = [
  {
    id: 1,
    title: "Backend Project 1",
    imageUrl: project1, // Kendi backend proje görsellerinizi buraya ekleyin
    detailsUrl: "/project-details/backend/1",
  },
  {
    id: 2,
    title: "Backend Project 2",
    imageUrl: project2,
    detailsUrl: "/project-details/backend/2",
  },
  {
    id: 3,
    title: "Backend Project 3",
    imageUrl: project3,
    detailsUrl: "/project-details/backend/3",
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
