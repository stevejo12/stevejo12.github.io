import styles from "./page.module.css";

const backgroundUrl = "https://res.cloudinary.com/drrd7ai50/image/upload/v1754810884/Portfolio/lightmode-bg_vqgxfj.png"

export default function Home() {
  return (
    <div 
      className={styles.home_wrapper}
      style={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: "no-repeat"}}
    >
      <div
        className={styles.home_container}
      >
        {/* intro part */}
        <div className={styles.home_header}>
          <h2 className={styles.home_header_name}>
            Steve Vinsensius Jo
          </h2>
          <h1 className={styles.home_header_intro_title}>
            Hi! I&apos;m Steve -
          </h1>
          <div className={styles.home_header_description}>
            <p>a Frontend Developer</p>
            <p>transitioning into AI Engineering</p>
          </div>
          <div className={styles.home_header_overview}>
            I design intuitive user interface and now explore how intelligent system can understand users even better
          </div>
          <div className={styles.home_header_buttons}>
            <button className={`button button-primary`}>
              Explore My Work
            </button>
            <button className={`button button-secondary`}>
              View My Resume
            </button>
          </div>
        </div>
        {/* About me */}
        <div className={styles.home_aboutMe}>
          <h2 className={styles.home_aboutMe_name}>About Me</h2>
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
        </div>
        {/* footer */}
        <div className={styles.home_footer}>
          <h2>AI Projects</h2>
          <h2>Frontend Projects</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}
