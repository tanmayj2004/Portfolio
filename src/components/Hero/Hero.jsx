import React from "react";
import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/heroImage.png";
import Styles from "./Hero.module.css";


export const Hero =()=>{
    return(
        <section className={Styles.container}>
            <div className={Styles.content}>
                <h1 className={Styles.title}>Hi, I'm Tanmay</h1>
                <p className={Styles.description}>I'm a full-stack developer with 2 years of experience using React & Node.js.
                     Reach out if you'd like to learn more! </p>
                     <a href="mailto:tanmayj1011@gmail.com" className={Styles.contactBtn}>Contact Me</a>
            </div>
            <img src= {heroImage} alt="Hero image og me" className={Styles.heroImg} />
            <div  className={Styles.topBlur}/>
            <div  className={Styles.buttomBlur}/>
            
        </section>
    )
}