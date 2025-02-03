import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";
import styles from "./About.module.css" 

export const About=()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={aboutImage} alt="Me sitting with a Laptop"  className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="cursorIcon"/>
                    <div className={styles.aboutItemText}>
                       <h3>Frontend Developer</h3>
                       <p>I'm a frontend developer with experience in
                         building responsive and optimize sites</p> 
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="serverIcon"/>
                    <div className={styles.aboutItemText}>
                       <h3>Backend Developer</h3>
                       <p>I have experience developing fast and 
                        optimised back-end system and APIs</p> 
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={uiIcon} alt="UI Icon"/>
                    <div className={styles.aboutItemText}>
                       <h3>UI Designer</h3>
                       <p>I have designed multiple landing pages
                        and created design system as well</p> 
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}