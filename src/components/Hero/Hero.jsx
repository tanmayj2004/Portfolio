import React from "react";
import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/tj.jpg";
import resume from "../../assets/resume/TanmayJain Resume.pdf";

import Styles from "./Hero.module.css";


export const Hero =()=>{
    return(
        <section className={Styles.container}>
            <div className={Styles.content}>
                <h1 className={Styles.title}>Hi, I'm Tanmay</h1>
                <p className={Styles.description}>I'm a full-stack developer with 2 years of experience using React & Node.js.
                     Reach out if you'd like to learn more! </p>
                     <a href={resume} className={Styles.resumeBtn}>My Resume</a>
            </div>
            <img src= {heroImage} alt="Hero image og me" className={Styles.heroImg} />
            <div  className={Styles.topBlur}/>
            <div  className={Styles.buttomBlur}/>
            
        </section>
    )
}