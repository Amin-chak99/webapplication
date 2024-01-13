import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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
                <span class="text-primary">July 2023 - September 2022</span>
              </div>
            </div>
            
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
