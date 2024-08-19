import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import images from '../images/Tayfun-Photo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={images} alt="Profil Resmi" className="profile-image" />
      </div>
      <h2 className='name'>Tayfun Deniz</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skill">Skills</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;


