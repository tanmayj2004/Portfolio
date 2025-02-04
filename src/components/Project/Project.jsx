import React from "react";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import styles from "./Project.module.css"



const projects =
  [
    {
      "title": "Wondarlust",
      "imageSrc": project1,
      "description": " A project to learn modern web technologies by building a travel platform.",
      "skills": ["MongoDb", "Express", "Node"],
      "demo": "https://wanderlust-dvx2.onrender.com/",
      "source": "https://github.com/tanmayj2004/Wanderlust"
    },
    {
      "title": "Chatbot",
      "imageSrc": project2,
      "description": "Designed and developed an AI-powered chatbot to simulate conversational interactions.",
      "skills": ["HTML", "CSS", "JavaScript"],
      "demo": "https://www.example.com",
      "source": "https://github.com/tanmayj2004/Elara-chatbot"
    },
    {
      "title": "Portfolio",
      "imageSrc": project3,
      "description": "A personal portfolio built with React to showcase my skills, projects, and experience.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://tanmayjain.vercel.app",
      "source": "https://github.com/tanmayj2004/Portfolio"
    }
  ]

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <div className={styles.containerr} key={id}>
            <img src={project.imageSrc} alt={`Image of ${project.title}`} className={styles.image} />
            <h3 className={styles.title2}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
              {project.skills.map((skill, id) => (
                <li className={styles.skill} key={id}>{skill}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <a href={project.demo} className={styles.link}>Demo</a>
              <a href={project.source} className={styles.link}>Source</a>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}