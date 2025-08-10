import styles from "./page.module.css";

const backgroundUrl = "https://res.cloudinary.com/drrd7ai50/image/upload/v1754810884/Portfolio/lightmode-bg_vqgxfj.png"

export default function Home() {
  return (
    <div 
      className={styles.home_wrapper} 
    >
      <div
        className={styles.home_container}
        style={{ backgroundImage: `url(${backgroundUrl})`}}
      >
        {/* intro part */}
        <div style={{ width: '50%' }}>
          <h2 className={styles.home_header_name}>
            Steve Vinsensius Jo
          </h2>
          <h1 className={styles.home_header_intro_title}>
            Hi! I'm Steve -
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
        {/* footer */}
      </div>
    </div>
  );
}
