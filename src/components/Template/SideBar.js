import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h3>Md. Abdullah Al Sifat</h3>
        <h4>Full Stack Software Engineer</h4>
        <p>
          <a href="sifatabdullah386@gmail.com">sifatabdullah386@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m an IT professional with 4+ years of experience in software engineering.
        I graduated from
        <a href="https://jkkniu.edu.bd/" target="_blank" rel="noopener noreferrer">Jatiya Kabi Kazi Nazrul University, Trishal, Mymensingh, Bangladesh</a>,
        and I am currently working as Senior Officer-IT (AP) at
        <a href="https://www.jb.com.bd/" target="_blank" rel="noopener noreferrer">Janata Bank PLC</a>,
        where I manage and enhance banking applications while driving IT solutions across
        the organization. Previously, I worked as a Software Engineer at
        <a href="https://cistechltd.com" target="_blank" rel="noopener noreferrer">CIS Tech Ltd.</a>,
        gaining expertise in backend services, mobile applications, and Clean architecture
        including databases. My focus is on delivering efficient, scalable applications
        through a collaborative, solution-driven approach.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      {/* <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p> */}
    </section>
  </section>
);

export default SideBar;
