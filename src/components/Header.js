import React from "react";
// import {  } from "react-router-dom";
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();


  const handleButtonClick = () => {
    // Update the state when the button is clicked
    

      navigate('/');

  };
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <Link class="navbar-brand js-scroll-trigger" to="/" >
          <span class="d-block d-lg-none">Amin Chakroun</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt="..."
            />
          </span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <Link class="nav-link js-scroll-trigger" to="/">
                About
              </Link> */}
              <button  onClick={handleButtonClick}>
                About
              </button>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/experience" type="button">
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/education">
                Education
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/skills">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/interests">
                Interests
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
