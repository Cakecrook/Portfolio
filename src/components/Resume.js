import React, { Component } from 'react'
import '../styles/Resume.css';

export default class Resume extends Component {
  render() {
    return (
        <div className="container-fluid resume-wrapper h-100 mb-3 mt-0">
            <div className="row m-0 p-0">
                <div className="col-4 m-0 p-0">
                    <div className="container-fluid h-100 personal-sidebar d-inline-block mt-2 mb-3 p-0">
                        <div className="row m-0 p-0">
                            <div className="col-12 profile-side mt-3 d-inline-block">
                                {/* <img className="profile-picture d-inline-block" 
                                    src="ProfilePicture.jpg" /> */}
                                <h2 className="text-center text-uppercase mb-1 pb-0">Robert "Will" Taylor</h2>
                                <h4 className="text-center mb-3 pb-0">Full Stack Web Developer</h4>
                            </div>
                            <div className="col-10 offset-1">
                                <hr />
                                <h3 className="text-left mt-3 pb-0">Contact Information</h3>
                                <ul className="contact-list">
                                    <li>(270) 991-8158</li>
                                    <li>robertwtaylor116@gmail.com</li>
                                    <li><a className="resume-a-tag" href="https://github.com/Cakecrook">https://github.com/Cakecrook</a></li>
                                    <li><a className="resume-a-tag" href="https://www.linkedin.com/in/will-taylor-a9ba62207/">https://www.linkedin.com/in/will-taylor-a9ba62207/</a></li>
                                    <li>Bowling Green KY, USA</li>
                                </ul>
                            </div>
                            <div className="col-10 offset-1 mt-2">
                                <h3 className="text-left mt-2 pb-0">Education</h3>
                                <h5 className="education-tag mb-0">2017-2021 University of Kentucky</h5>
                                <h4 className="mt-0 mb-0"><strong>Bachelor's of Science in Computer Science</strong></h4>
                                <h4 className="mt-0">Cybersecurity Certificate</h4>
                            </div>
                            <div className="col-10 offset-1 mt-2">
                                <h3 className="text-left mt-2 pb-0">Goal</h3>
                                <p>I'm looking to work on a small, friendly team on a full stack application so that I can best use my skills.</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="col-8 m-0 p-0">
                    <div className="container-fluid main-body mt-2 mb-3 p-0">
                        <div className="row m-0 p-0">
                            <div className="col-12 profile-main">
                                <h2 className="header-body">Profile</h2>
                            </div>
                            <div className="col-12">
                                <p>Hi there, I'm Will. I'm a full stack developer most experienced in React, Java Spring Boot, and SQL. My best qualities are that I'm a fast learner, I work well in small teams, I write clean, readable code, and I excel at writing. I'm a firm believer that programmers should take the time to finish a program correctly rather than hastily deploy a buggy product.</p>
                            </div>
                        </div>
                        <div className="row experience m-0 p-0">
                            <div className="col-12">
                                <h2 className="header-body">Experience</h2>
                            </div>
                            <div className="col-4">
                                <h5 className="mb-0 experience-timestamp">January 2022-Present</h5>
                                <h4 className="mt-0 mb-0 experience-company">Burly Brandz</h4>
                            </div>
                            <div className="col-8">
                                <h4 className="mt-0 mb-0 experience-title">Web Developer</h4>
                                <p>I developed the website for Burly Brandz, a startup company. As of now it is a React-only e-commerce application that has an embedded shopify buy button which handles the shopping functionality. It was deployed via AWS S3 and CloudFront.</p>
                            </div>
                            <div className="col-4">
                                <h5 className="mb-0 experience-timestamp">June 2021-March 2022</h5>
                                <h4 className="mt-0 mb-0 experience-company">JP Morgan Chase via MThree</h4>
                            </div>
                            <div className="col-8">
                                <h4 className="mt-0 mb-0 experience-title">Software Engineering Consultant</h4>
                                <p>At JP Morgan Chase I worked on a large international team (USA, UK, and India) on in-house applications related to SWIFT, the global messaging network banks utitlize to handle international payments and transfers. I primarily completed tasks related to database upkeep while learning more about the applications.</p>
                            </div>
                            <div className="col-4">
                                <h5 className="mb-0 experience-timestamp">April 2021-March 2022</h5>
                                <h4 className="mt-0 mb-0 experience-company">MThree</h4>
                            </div>
                            <div className="col-8">
                                <h4 className="mt-0 mb-0 experience-title">Java Developer</h4>
                                <p>Before I began consulting for JP Morgan Chase, MThree put me and other new hires through a five week full-stack development training boot camp through The Software Guild focusing on using React and Spring Boot. In this Boot camp, I learned more about Java, Spring Boot, JavaScript, React JS, Relational Databases, SQL, MySQL, 
                                    Linux, jQuery, REST APIs, MVC design, Github, Thymeleaf, and Maven.</p>
                            </div>
                        </div>
                        <div className="row skills m-0 p-0 mb-2">
                            <div className="col-12">
                                <h2 className="header-body">Professional Skills</h2>
                            </div>
                            <div className="col-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="pro-skills-col-name">Coding Languages</h4>
                                            <ul className="pro-skills-list">
                                                <li>React JS</li>
                                                <li>Java</li>
                                                <li>HTML/CSS</li>
                                                <li>SQL</li>
                                                <li>Python</li>
                                                <li>JavaScript</li>
                                                <li>C++</li>
                                                <li>C#</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <h4 className="pro-skills-col-name">Software</h4>
                                            <ul className="pro-skills-list">
                                                <li>Github</li>
                                                <li>Bash/zsh Terminals</li>
                                                <li>VSCode</li>
                                                <li>IntelliJ</li>
                                                <li>AWS</li>
                                                <li>MySQL/MySQL Workbench</li>
                                                <li>Node.js</li>
                                                <li>Slack</li>
                                                <li>Jira</li>
                                                <li>Clickup</li>    
                                                <li>Microsoft Office Suite</li>
                                                <li>Google Drive</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
