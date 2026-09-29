import React from "react";
import "./App.css";
import profileImg from "./assets/images/tanvi-profile.png";

function App() {
  return (
    <div className="portfolio-container">

      {/* ================= NAVIGATION ================= */}
      <nav className="navbar">
        <div className="nav-logo">Tanvi</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#achievements">Achievements</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero-section">

        <div className="hero-content">

          <span className="welcome-pill">
            <i></i>
            Welcome to my portfolio
          </span>

          <h1 className="hero-title">
            Hi, I’m
            <br />
            <span className="highlight">Tanvi Khatu</span>
          </h1>

          {/* KEEPING THIS ONE BELOW YOUR NAME */}
          <h2 className="hero-subtitle">
            Computer Engineering Student
          </h2>

          <p className="hero-tagline">
            Building practical solutions through software, web development,
            and technology.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>

          </div>


          {/* Social Links */}
          <div className="hero-socials" aria-label="Social links">

            <a
              href="https://www.linkedin.com/in/tanvi-khatu-060640315/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/TanviKhatu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              ⌘
            </a>

            <a
              href="mailto:tanvikhatu05@gmail.com"
              aria-label="Email"
            >
              ✉
            </a>

          </div>

        </div>


        {/* Profile Image */}
        <div className="hero-image-container">

          <img
            src={profileImg}
            alt="Tanvi Khatu"
            className="profile-img"
          />

          <span className="hero-note">
            Better
            <br />
            Code
            <br />
            Bigger
            <br />
            Dreams <b>♡</b>
          </span>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="section">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <p>
            I am currently studying Computer Engineering and I am in my 3rd
            year at Vidyalankar Institute of Technology. My main areas of
            interest are Web Development, Software Development, and
            Programming. I am passionate about building practical software
            projects and continuously learning new technologies to solve
            real-world problems.
          </p>

          <div className="education-card">

            <h3>
              Education
            </h3>

            <p>
              <strong>
                Vidyalankar Institute of Technology
              </strong>
            </p>

            <p>
              Computer Engineering • 3rd Year
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="section">

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-container">

          {/* Programming */}
          <div className="skill-category">

            <h3>
              Programming
            </h3>

            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
            </div>

          </div>


          {/* Web Development */}
          <div className="skill-category">

            <h3>
              Web Development
            </h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

          </div>


          {/* Database */}
          <div className="skill-category">

            <h3>
              Database
            </h3>

            <div className="skill-tags">
              <span>MySQL</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="section">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <h3>
              Study Planner
            </h3>

            <p>
              A Python-based study planner designed to help students
              organize and manage their study activities.
            </p>

            <div className="tech-stack">
              <span>Python</span>
            </div>

            <a href="#" className="btn-link">
            </a>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <h3>
              Memory Mapping Game
            </h3>

            <p>
              A memory-based game developed using computer graphics
              concepts.
            </p>

            <div className="tech-stack">
              <span>Computer Graphics</span>
            </div>

            <a href="#" className="btn-link">
            </a>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <h3>
              Hybrid CPU Scheduler
            </h3>

            <p>
              A CPU scheduling project based on operating system concepts
              and hybrid CPU scheduling techniques.
            </p>

            <div className="tech-stack">
              <span>Operating Systems</span>
            </div>

            <a href="#" className="btn-link">
            </a>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS SECTION ================= */}
      <section
        id="achievements"
        className="section achievements-section"
      >

        <h2 className="section-title">
          Achievements & Certifications
        </h2>


        <div className="achievements-grid">

          {/* L&T IoT */}
          <div className="achievement-card">

            <div className="achievement-icon">
              ◈
            </div>

            <div className="achievement-content">

              <span className="achievement-type">
                CERTIFICATION
              </span>

              <h3>
                L&T IoT Course
              </h3>

              <p>
                Completed an IoT course conducted by L&T, gaining practical
                exposure to IoT concepts and technologies.
              </p>

              <div className="achievement-footer">

                <span className="achievement-status">
                  ✓ Completed
                </span>

              </div>

            </div>

          </div>


          {/* NPTEL Java */}
          <div className="achievement-card">

            <div className="achievement-icon">
              ☕
            </div>

            <div className="achievement-content">

              <span className="achievement-type">
                CERTIFICATION
              </span>

              <h3>
                NPTEL Java
              </h3>

              <p>
                Successfully completed an NPTEL course focused on Java
                programming and object-oriented programming concepts.
              </p>

              <div className="achievement-footer">

                <span className="achievement-status">
                  ✓ Completed
                </span>

              </div>

            </div>

          </div>


          {/* NPTEL Python */}
          <div className="achievement-card">

            <div className="achievement-icon">
              &lt;/&gt;
            </div>

            <div className="achievement-content">

              <span className="achievement-type">
                CERTIFICATION
              </span>

              <h3>
                NPTEL Python
              </h3>

              <p>
                Successfully completed an NPTEL course focused on Python
                programming and core programming concepts.
              </p>

              <div className="achievement-footer">

                <span className="achievement-status">
                  ✓ Completed
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="section">

        <h2 className="section-title">
          Get In Touch
        </h2>

        <div className="contact-container">

          <p>
            Feel free to reach out for collaborations, opportunities,
            or just to say hi!
          </p>

          <div className="contact-links">

            <a
              href="mailto:tanvikhatu05@gmail.com"
              className="contact-link"
            >
              tanvikhatu05@gmail.com
            </a>

            <a
              href="https://github.com/TanviKhatu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tanvi-khatu-060640315/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <p>
          &copy; {new Date().getFullYear()} Tanvi Khatu.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;