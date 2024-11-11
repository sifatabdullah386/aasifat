import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ProjectContainer from '../components/Projects/ProjectContainer';
import { projects, categories } from '../data/projects';

const sections = {
  ProjectContainer: () => <ProjectContainer projects={projects} categories={categories} />,
};

const Projects = () => (
  <Main title="Projects" description="Learn about Md. Abdullah Al Sifat projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A few of my projects that I&apos;m not too shy to share</p>
          {Object.entries(sections).map(([name, Section]) => (
            <Section key={name} />
          ))}
        </div>
      </header>
      {/* {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))} */}
    </article>
  </Main>
);

export default Projects;
