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
        Currently employeed as Senior Officer-IT (AP) at
        <a href="https://www.jb.com.bd/" target="_blank" rel="noopener noreferrer"> Janata Bank PLC. </a>,
        developing banking softwares. Previously, I worked as a Software Engineer at
        <a href="https://cistechltd.com" target="_blank" rel="noopener noreferrer"> CIS Tech Ltd. </a>,
        gaining expertise in backend services, mobile applications etc.
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
