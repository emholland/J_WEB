import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Resources.css";

const resources = [
  {
    title: "Zine Starter Kit (PDF)",
    description: "A printable starter guide for creating your first political zine. Includes layout templates, collage tips, and sample slogans.",
    type: "Download",
    link: "#"
  },
  {
    title: "Design for Dissent: Font + Poster Pack",
    description: "A bundle of protest fonts and handmade poster textures. Great for creating that gritty DIY aesthetic.",
    type: "Toolkit",
    link: "#"
  },
  {
    title: "How to Start a Blog That Fights Back",
    description: "A quick-start guide for launching your own radical blog, including stack suggestions and anti-surveillance tips.",
    type: "Article",
    link: "#"
  },
  {
    title: "Voices from the Margins – Archive Vol. 1",
    description: "A curated PDF archive of underground writings from 2001–2010, remastered for digital reading.",
    type: "Download",
    link: "#"
  },
  {
    title: "Free Illustration Pack: Radicals & Rebels",
    description: "Custom SVG and PNG illustrations featuring fists, megaphones, and protest icons. Open license.",
    type: "Toolkit",
    link: "#"
  }
];

export default function ResourcePage() {

    const navigate = useNavigate();

  return (
    <div className="resource-page">
      <header className="resource-header">
        <h1 className="site-title">BOLD TITLE</h1>
        <nav className="nav-links">
          <span onClick={() => navigate('/')}>Home</span>
          <span onClick={() => navigate('/articles')}>Articles</span>
          <span onClick={() => navigate('/authorinfo')}>Author Info</span>
        </nav>
      </header>

      <div className="resource-grid">
        {resources.map((res, i) => (
          <div className="resource-card" key={i}>
            <h2 className="resource-card-title">{res.title}</h2>
            <p className="resource-description">{res.description}</p>
            <span className="resource-type">{res.type}</span>
            <a href={res.link} className="resource-link">View Resource →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
