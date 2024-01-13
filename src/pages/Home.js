import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Chakroun
              <span class="text-primary mr-2">Amin</span>
            </h1>
            <div class="subheading mb-5">
              Rue Gremda km 1.5 , Sfax, 
              <a href="mailto:name@email.com">Amine.Chakroun@ipsas.com</a>
            </div>
            <p class="lead mb-5">
                  Well-qualified Computer engineer familiar with a wide range of programming utilities and languages.
                  Knowledgeable of backend and frontend development requirements. Handles any part of the process
                  with ease. Collaborative team player with excellent technical abilities.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/amin-chakroun-979730223/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Amin-chak99">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://www.facebook.com/mimou.chakroun.5">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Web Developer</h3>
                <div class="subheading mb-3">Incendo-IT, Sfax </div>
                <p>
                
                                    Développement des solution Web multiplateforme avec SPRINGBOOT & VUEJS
                    & POSTGRESQL

                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">November 2023 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Summer Internship</h3>
                <div class="subheading mb-3">ZetaBOX</div>
                <p>
                Développement d’un application Mobile de Communication (messagerie interne
                  d’une entreprise Team On The Run) avec KOTLIN & FLUTTER
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2023 - September 2023</span>
              </div>
            </div>
            
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">private institute of advanced sciences</h3>
                <div class="subheading mb-3">Engineer Degree</div>
                <div>software engineering</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 -Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">ISGI</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2018 - May 2021</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />

       
      </div>
    </>
  );
};

export default Home;
