import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Md. Abdullah AL Sifat">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <div className="about-description">
          {/* <Markdown>{markdown}</Markdown> */}
          <section>
            <h2>Intro</h2>
            <p>
              Hi, I am an IT professional with 6+ years of experience in software engineering.
              I graduated from <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer"> Jatiya Kabi Kazi Nazrul Islam University, Mymensingh, Bangladesh. </a> ,
              and I am currently working as Senior Officer-IT (AP) at <a href="https://www.jb.com.bd/" target="_blank" rel="noopener noreferrer"> Janata Bank PLC. </a>,
              where I manage and enhance banking applications while driving IT solutions across
              the organization. Previously, I worked as a Software Engineer at
              <a href="https://cistechltd.com" target="_blank" rel="noopener noreferrer"> CIS Tech Ltd. </a>, gaining expertise in backend services, mobile applications, and clean architecture including databases. My focus is on delivering efficient, scalable applications
              through a collaborative, solution-driven approach with high social impact.
              If you think I can be helpful to you or your cause, or if you are interested
              in collaborating, feel free to get in touch.
            </p>
            <h2>I Like</h2>
            <ul>
              <li>Learning</li>
              <li>Coding</li>
              <li>Listening</li>
              <li>Reading</li>
              <li>Writing</li>
              <li><a href="https://instagram.com/flintstone360" target="_blank" rel="noopener noreferrer"> Photography </a></li>
              <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"> Videography </a></li>
              <li>Graphic Design</li>
              <li>Cooking</li>
              <li>AI Enthusiasts</li>
            </ul>
            <h2>I Dream Of</h2>
            <ul>
              <li>Inspiring others while staying open to inspiration</li>
              <li>Empowering a brighter future for all, regardless of socioeconomic background.</li>
              <li>Treating every person with genuine kindness, respect, and empathy.</li>
              <li>Embracing curiosity and a lifelong love of learning.</li>
              <li>Committing to constant growth and self-improvement.</li>
            </ul>
          </section>
        </div>
      </article>
    </Main>
  );
};

export default About;
