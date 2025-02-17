import React from "react";
import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import styles from "./Contact.module.css";




export const Contact=()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text} >
            <h2>Contact</h2>
            <p>Feel free to Reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="Email Icon"></img>
                    <a href="mailto:tanmayj1011@gmail.com" >tanmayj1011.gmail.com</a>
                </li >
                <li className={styles.link}>
                    <img src={githubIcon} alt="Github Icon"></img>
                    <a href="https://github.com/tanmayj2004">github.com/tanmayjain</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="Linkedin Icon"></img>
                    <a href="https://www.linkedin.com/in/tanmay-kumar-jain">linkedin.com/tanmayjain</a>
                </li>
            </ul>
        
    </footer>
}