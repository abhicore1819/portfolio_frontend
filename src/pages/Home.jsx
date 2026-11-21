import { useEffect, useState } from "react";
import { SendMail } from "../service/mail";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TerminalSquare,
  UserRound,
  UsersRound,
} from "lucide-react";
import profile from "../assets/profile.jpg";
const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: TerminalSquare,
    items: ["Python", "Django"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL"],
  },
  {
    title: "Development Tools",
    icon: Braces,
    items: ["Git", "GitHub", "Deployment"],
  },
];

const teachingFocus = [
  [
    "Web Development Fundamentals",
    ["HTML", "CSS", "JavaScript", "Responsive Design"],
  ],
  [
    "Frontend Development",
    ["React.js", "Components", "Props & State", "Tailwind CSS"],
  ],
  [
    "Programming Fundamentals",
    [
      "Python",
      "Programming Logic",
      "Problem Solving",
      "Basic Backend Concepts",
    ],
  ],
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        className="project-preview"
        aria-label="Apex Gym website preview placeholder"
      >
        <div className="preview-browser">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="preview-content">
          <small>APEX GYM</small>
          <strong>
            BUILD YOUR
            <br />
            STRONGEST SELF
          </strong>
          <span>Project preview</span>
        </div>
      </div>
      <div className="project-details">
        <p className="project-number">PROJECT 01</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="project-disclosure">{project.disclosure}</p>
        <div className="project-actions">
          <a
            className="button button-primary"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo <ArrowUpRight size={17} />
          </a>
          <a
            className="button button-secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={17} /> Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [form, SetForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data:-", form);
    console.log("someone clicked submit mail button !");
    const response = handleAPI(form)
    console.log("server response:-", response)
  };
  const handleChange = (event) => {

    const { name, value } = event.target;
    SetForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

const handleAPI = async (payload)=>{
  const server_response = await SendMail(payload);
  return server_response
}

  const apexProject = {
    title: "Apex Gym",
    description:
      "A modern and responsive gym website designed to showcase fitness services, membership plans, and a professional gym experience.",
    tech: ["React", "Tailwind CSS"],
    disclosure: "Frontend Demo Project — Built using React & Tailwind CSS.",
    live: "https://apexgym-ivory.vercel.app/",
    github: "https://github.com/abhicore1819",
  };

  return (
    <main>
      <section className="hero section" id="home">
        <div className="ambient ambient-one"></div>
        <div className="ambient ambient-two"></div>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="availability">
              <span></span> Available for Teaching Opportunities
            </div>
            <h1>
              Building the Web.
              <br />
              <em>Teaching the Logic.</em>
            </h1>
            <p className="hero-lead">
              Hi, I&apos;m Abhinav Chaudhary — a web developer and programming
              teacher passionate about building meaningful digital experiences
              and making programming easier to understand.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Let&apos;s Connect
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/abhicore1819"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={16} /> GitHub
              </a>
              <a href="mailto:abhicore1819@gmail.com">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div className="profile-stage reveal ">
            <div className="profile-glow "></div>
            <div className="profile-card ">
              <img
                src={profile}
                alt="Abhinav Chaudhary"
                className="profile-image"
              />
              {/*  */}
              {/* <div className="profile-placeholder"> */}
              {/* <UserRound size={92} strokeWidth={1} /> */}
              {/* <span>Profile photo</span> */}
              {/* </div> */}
            </div>
            <div className="floating-badge badge-one">
              <Code2 size={16} /> React Developer
            </div>
            <div className="floating-badge badge-two">
              <TerminalSquare size={16} /> Python &amp; Django
            </div>
            <div className="floating-badge badge-three">
              <UsersRound size={16} /> Programming Teacher
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">ABOUT ME</p>
            <h2>More Than Just Writing Code.</h2>
          </div>
          <div className="about-layout">
            <p className="about-description reveal">
              I&apos;m a BCA first-year student at Sri Guru Tegh Bahadur Khalsa
              College, Delhi, with a strong interest in web development,
              software engineering, and programming education.
              <br />
              <br />
              I&apos;ve been learning and building with modern web technologies,
              exploring both frontend and backend development. Alongside
              developing projects, I enjoy breaking down complex programming
              concepts into simple, understandable explanations.
              <br />
              <br />
              My goal is to become a better developer while helping others build
              a strong foundation in programming.
            </p>
            <div className="about-cards">
              <article className="glass-card reveal">
                <div className="icon-box">
                  <Code2 size={20} />
                </div>
                <h3>Developer</h3>
                <p>
                  Building responsive and interactive web experiences using
                  modern technologies.
                </p>
              </article>
              <article className="glass-card reveal">
                <div className="icon-box">
                  <UsersRound size={20} />
                </div>
                <h3>Programming Teacher</h3>
                <p>
                  Helping beginners understand programming through practical
                  examples and simplified explanations.
                </p>
              </article>
              <article className="glass-card reveal">
                <div className="icon-box">
                  <Sparkles size={20} />
                </div>
                <h3>Continuous Learner</h3>
                <p>
                  Exploring new technologies, improving problem-solving skills,
                  and building real-world projects.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="skills">
        <div className="container">
          <div className="section-heading centered reveal">
            <p className="eyebrow">SKILLS</p>
            <h2>My Technical Toolkit</h2>
            <p>
              Technologies I use to build, develop, and deploy applications.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article
                className="skill-category reveal"
                key={title}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <div className="skill-category-head">
                  <div className="icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">PROJECTS</p>
            <h2>Things I&apos;ve Built</h2>
            <p>Some projects that reflect my journey as a developer.</p>
          </div>
          <ProjectCard project={apexProject} />
        </div>
      </section>

      <section className="section section-tinted" id="teaching">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">TEACHING</p>
            <h2>Making Programming Easier to Understand.</h2>
            <p>
              I believe programming becomes easier when concepts are explained
              with clarity, practical examples, and the right learning approach.
              <br />I enjoy helping beginners understand the fundamentals of
              programming and web development.
            </p>
          </div>
          <div className="teaching-grid">
            {teachingFocus.map(([title, items], index) => (
              <article
                className="teaching-card reveal"
                key={title}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <span></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="teaching-cta reveal">
            <div>
              <p>Interested in Learning Programming?</p>
              <span>Let&apos;s discuss your learning goals.</span>
            </div>
            <a className="button button-primary" href="#contact">
              Contact Me <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">EDUCATION</p>
            <h2>My Education</h2>
          </div>
          <article className="education-card reveal">
            <div className="education-icon">
              <GraduationCap size={26} />
            </div>
            <div className="education-main">
              <p className="education-year">First Year · 2026</p>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>
                <MapPin size={15} /> Sri Guru Tegh Bahadur Khalsa College, Delhi
              </p>
            </div>
            <p className="education-description">
              Currently pursuing BCA with an interest in programming, software
              development, and computer science fundamentals.
            </p>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-heading centered reveal">
            <p className="eyebrow">CONTACT</p>
            <h2>Have an Idea? Let&apos;s Build Something.</h2>
            <p>
              Whether you&apos;re looking for a programming tutor, want to
              discuss a project, or simply want to connect, feel free to reach
              out.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-cards">
              <a
                className="contact-card reveal"
                href="mailto:abhicore1819@gmail.com"
              >
                <div className="icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span>Email Me</span>
                  <strong>abhicore1819@gmail.com</strong>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a className="contact-card reveal" href="tel:+919319824630">
                <div className="icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span>Call Me</span>
                  <strong>+91 9319824630</strong>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a
                className="contact-card reveal"
                href="https://github.com/abhicore1819"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-box">
                  <GitBranch size={20} />
                </div>
                <div>
                  <span>GitHub Profile</span>
                  <strong>abhicore1819</strong>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* ----- form ----- */}
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    value={form["name"]}
                    type="text"
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    value={form["email"]}
                    type="email"
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  name="subject"
                  value={form["subject"]}
                  type="text"
                  onChange={handleChange}
                  required
                  placeholder="What would you like to discuss?"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={form["message"]}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your idea or learning goals..."
                ></textarea>
              </label>
              <button className="button button-primary" type="submit">
                Send Message <ArrowUpRight size={17} />
              </button>
              {/* <p className="form-note">This form opens your email app. A direct form backend can be connected later.</p> */}
            </form>

            {/* ----- form ----- */}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <p>Designed &amp; Built by Abhinav Chaudhary</p>
          <nav aria-label="Footer navigation">
            {["Home", "About", "Skills", "Projects", "Teaching", "Contact"].map(
              (item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ),
            )}
          </nav>
          <div className="footer-social">
            <a
              href="https://github.com/abhicore1819"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a href="mailto:abhicore1819@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Abhinav Chaudhary. All rights reserved.</p>
          {showTop && (
            <a className="back-top" href="#home" aria-label="Back to top">
              <ArrowUp size={18} />
            </a>
          )}
        </div>
      </footer>
    </main>
  );
}
