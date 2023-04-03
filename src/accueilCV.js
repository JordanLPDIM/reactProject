import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { FirebaseAuth } from 'react-firebaseui';
import app from './firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Navigation from "./navigation";


const data = {
  name: "Jordan GODDE",
  title: "Développeur .NET ",
  email: "goddejordan@gmail.com",
  phone: "06.15.11.16.65",
  summary:
    "Je suis actuellement alternant en Licence pro DIM à l'IUT de Calais, avec l'entreprise ArcelorMittal, afin de me former au métier de Développeur.",
  skills: ["C#", "HTML, CSS", "JS", "jQuery", "MySQL"],
  experience: [
    {
      title: "Alternant Développeur .NET",
      company: "ArcelorMittal",
      location: "Desvres",
      startDate: "Septembre 2022",
      endDate: "Aujourd'hui",
      description:
        "Développement d'une application Web en ASP.NET",
    },
    {
      title: "Stagiaire",
      company: "Eiffage Energie",
      location: "Lens",
      startDate: "Juin 2020",
      endDate: "Décembre 2020",
      description:
        "Electricien",
    },
  ],
  education: [
    {
      degree: "Licence pro DIM",
      institution: "ULCO",
      location: "Calais",
      startDate: "Septembre 2022",
      endDate: "Aujourd'hui",
    },
  ],
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    //maxWidth: 800,
    margin: "auto",
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap:20,
    //backgroundColor: "#f2f2f2",
  },
  name: {
    fontSize: 30,
    marginBottom: 30,
    //marginTop: 10,
  },
  contentProfil: {
    //height:'100%',
    borderRight: '1px solid grey',
    paddingRight: '20px',
    //width:'100%'
  },

  contentPage: {
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    //paddingLeft:50,
    paddingTop:2,
    fontWeight:600,

  },
  flexpage:{
    display: 'flex',
    flexDirection: 'row',
  },
  separator:{
    width:'70%',
    border:'1px dashed grey',
  },
  contact: {
    marginBottom: 10,
  },
  summary: {
    marginBottom: 20,
    fontSize:18
  },
  skills: {
    marginBottom: 20,
    fontSize:22,
    color:'blue',
  },
  experience: {
    marginBottom: 20,
    fontSize:22,
    color:'blue',
  },
  education: {
    marginBottom: 20,
    fontSize:22,
    color:'blue',
  },
  
};

function CvReact() {
  return (
    

    // <><Navigation></Navigation>
    
    <div style={styles.container}>
      <div style={styles.contentProfil}>
        <span style={styles.flex}>
          <h1 style={styles.name}>{data.name}</h1>
          <h2 style={styles.title}>{data.title}</h2>
        </span>
        <p style={styles.contact}>
          <strong>Email:</strong> {data.email}
        </p>
        <p style={styles.contact}>
          <strong>Téléphone:</strong> {data.phone}
        </p>
      </div>

      <div style={styles.contentPage}>

        <p style={styles.summary}>{data.summary}</p>
        <div style={styles.separator}></div>
        <h3 style={styles.experience}>Expériences professionnelles</h3>
        {data.experience.map((exp) => (
          <div key={exp.company}>
            <h4>
              <h4>
                {exp.title} - {exp.company}
              </h4>
            </h4>
            <p>{exp.location}</p>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
        <div style={styles.separator}></div>
        <h3 style={styles.education}>Formation</h3>
        {data.education.map((edu) => (
          <div key={edu.institution}>
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
            <p>{edu.location}</p>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
        <div style={styles.separator}></div>
        <h3 style={styles.skills}>Compétences</h3>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

      </div>

      {/* <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}


    </div>



);
}

export default CvReact;
