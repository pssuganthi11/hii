
import { useState } from "react";
import './Portfolio.scss'

import ltor from "../Assets/ltor.png";
import rtol from "../Assets/rtol.png";


function portfolio() {
  return (
    <div classname="container">
      <header>
        <div>
          <span className="logo"> SUGANTHI PATTAPPAN</span>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="./#About_section">About</a>
            </li>
            <li>
              <a href="#">SKills</a>
            </li>
            <li>
              <a href="./#MyWork-section">My Work</a>
            </li>
            <li>
              <a href="./#Contact-section">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-outlined">Download CV</button>
        </div>
      </header>
      <main>
        <section className="imagecontainer">
          <div>
            <h4 title="Helo!">Hi there!</h4>
            <h2 className="namecon">
              I'm <span> Suganthi</span>
            </h2>
            <p className="description">
              A goal-oriented Entry Level Frontend Developer with knowledge of
              HTML, CSS, JavaScript, React, Angular, and Vue seeking to use
              technical proficiency and creativity to develop engaging user
              experiences and advance in a professional career. Looking to
              leverage effective debugging, code optimization and project
              collaboration capabilities to produce applications that exceed
              user expectations.
            </p>
            <div className="socialicons">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/suganthi_pattappan/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/suganthi-pattappan-b7a3921b7/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button className="btn btn-primary">Know Me</button>
              <button className="btn btn-outlined">Download CV</button>
            </div>
          </div>
          <div>
            <img src={rtol} alt="Suganthi" width="300px" />
          </div>
        </section>
        <section className="about-section" id="About_section">
          <img src={ ltor} />
          <div className="description">
            <h4>
              I'm <span>Web Developer</span>
            </h4>

            <ul>
              <li>
                <strong>Experience:</strong> 1.8 years
              </li>
              <li>
                <strong>Skills:</strong> React
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:pssuganthi11@gmail.com"> pssuganthi11@gmail.com
                   
                </a>
              </li>
              <li>
                <strong>Contact No:</strong>
                <a href="tel:+91 7603992425"> +91 7603992425</a>
              </li>
              <li>
                <strong>Address:</strong> Salem
              </li>
            </ul>
            <div>
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </section>
        <section className="my-works-section" id="MyWork-section">
          <div className="my-works-section-title">
            <h4>My<span> Works</span></h4>
          </div>
          <div className="workcontainer">
            <div className="my-works-section-box">
              <span className="my-works-section-box__icons">
                <i class="fa-brands fa-figma"></i>
              </span>
              <div className="my-works-section-box__decs">
                <h4>UI/UX Design</h4>
                <p>
                  worked few UI design project on learning purpose like basics
                </p>
              </div>
              <a href="#">See My Work here...</a>
            </div>
            <div className="my-works-section-box">
              <span className="my-works-section-box__icons">
                <i class="fa-solid fa-laptop-code"></i>
              </span>
              <div className="my-works-section-box__decs">
                <h4>Frontend Development</h4>
                <p>worked in React,Material UI,Bootstrap,SASS/LESS</p>
              </div>
              <a href="#">See My Work here...</a>
            </div>
            <div className="my-works-section-box">
              <span className="my-works-section-box__icons">
                <i class="fa-duotone fa-solid fa-server"></i>{" "}
              </span>
              <div className="my-works-section-box__decs">
                <h4>BackEnd</h4>
                <p>
                  worked in CRUD operation,Jwt token using Nodejs,Express.js and
                  MongoDB
                </p>
              </div>
              <a href="#">See My Work here...</a>
            </div>
          </div>
        </section>
        <section className="contact-section" id="Contact-section">
          <h4>Contact <span>Me</span></h4>
          <form>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
            <input   type="email" placeholder="Email" />
            </div>
            <div>
              <textarea placeholder="your Notes!" rows={8} coloumn={5}/>
            </div>
            <button className="btn btn-primary" >Send</button>
          </form>
        </section>
      </main>
      <footer><h4>Copyrights  &copy; - <a href="https://www.linkedin.com/in/suganthi-pattappan-b7a3921b7"  target="-blank">Suganthi Pattappan</a> -All Rights Reserved.</h4></footer>
    </div>
  );
}

export default portfolio;
   
