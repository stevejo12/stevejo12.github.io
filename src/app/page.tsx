import Header from "@/components/header";
import styles from "./page.module.css";

const backgroundUrl = "https://res.cloudinary.com/drrd7ai50/image/upload/v1754810884/Portfolio/lightmode-bg_vqgxfj.png"

export default function Home() {
  return (
    <div 
      className={styles.home_wrapper}
      style={{ backgroundImage: `url(${backgroundUrl})`}}
    >
      <Header />
      <div
        className={styles.home_container}
      >
        {/* intro part */}
        <div className={styles.home_header}>
          <h1 className={styles.home_header_intro_title}>
            Hello! I&apos;m Steve -
          </h1>
          <div className={styles.home_header_description}>
            <h3>AI Engineer / Data Scientist</h3>
          </div>
          <div className={styles.home_header_overview}>
            <h4>When the opportunity presents itself, try to grab it wholeheartedly and give 100% effort everytime.</h4>
          </div>
        </div>
        {/* About me */}
        <section id="aboutMe" className={styles.section_margin}>
          <h2 className="title">About Me</h2>
          <div className={styles.home_aboutMe_description}>
            <p>
              I started my journey in tech as a frontend developer, building responsive and user-friendly web interfaces using React, Redux and JavaScript. Over time, I became fascinated by the intelligence behind digital systems - from learning the information fed into the system to reasoning / chain of thought when answering - leading me to dive deeper into data science and AI.
            </p>
            <ul>
              <li>Bachelor&apos;s in Computer Science</li>
              <li>1+ year experience in Frontend Engineering</li>
              <li>Learning AI through online videos and personal projects</li>
              <li>Currently Studying Master&apos;s in Applied Data Science at University of Victoria</li>
            </ul>
          </div>
        </section>
        <section id="projects" className={styles.section_margin}>
          <h2 className="title">Projects</h2>
          <ul className="list-wrapper-template-1 noMarginNoPadding">
            <li className="square-template-1 noDecoration-list">
              Skeleton 1
            </li>
            <li className="square-template-1 noDecoration-list">
              Skeleton 2
            </li>
          </ul>
        </section>
        <section id="education" className={styles.section_margin}>
          <h2 className="title">Education</h2>
          <ul className="list-wrapper-template-1 noMarginNoPadding">
            <li className="square-template-1 noDecoration-list">
              <div className="middle-spacing">
                <span><h3><strong>University of Victoria</strong></h3></span>
                <span>Jan 2026 - Dec 2026 (Expected)</span>
              </div>
              <span>Masters in Applied Data Science</span>
            </li>
            <li className="square-template-1 noDecoration-list">
              <div className="middle-spacing">
                <span><h3><strong>Bina Nusantara University</strong></h3></span>
                <span>Sep 2016 - Jun 2020</span>
              </div>
              <span>Bachelor of Computer Science</span>
            </li>
          </ul>
        </section>
        <section id="contact" className={styles.section_margin}>
          <h2>Contact</h2>
          <h4>If you want to collaborate, please contact me through:</h4>
          <ul>
            <li>
              Email: {" "}
              <a 
                href="mailto:steve.v.jo@gmail.com" target='_blank' rel="noreferrer noopener"
              >
                steve.v.jo@gmail.com
              </a>
            </li>
            <li>
              Github: {" "}
              <a href="http://www.github.com/stevejo12" target="_blank" rel="noreferrer noopener">
                Steve's Github
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
