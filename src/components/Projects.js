import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sentimental from "../assets/img/sentimental.svg";
import bracket from "../assets/img/bracket.svg";
import search from "../assets/img/search.svg";
import database from "../assets/img/database.svg";
import expense from "../assets/img/expense.svg";
import job from "../assets/img/job.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sentimental Analysis",
    imgUrl: sentimental,
    content: (
      <div>
        This project involves analyzing sentiment from Twitter data using machine learning techniques. It aims to process large volumes of tweets in real-time, extracting valuable insights and sentiments from social media conversations. By leveraging machine learning algorithms, the project identifies patterns and trends in Twitter data to understand public opinion, sentiment shifts, and emerging topics. The goal is to provide actionable insights for businesses, marketers, and researchers to make informed decisions and understand public sentiment on various topics and brands.
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  {
    title: "Bracket Checker",
    imgUrl: bracket,
    content: (
      <div>
        This project is a tool designed to help check for mistakes in opening and closing brackets in code. It utilizes a stack data structure to analyze a given string of code and identify any mismatched or incorrectly placed brackets. The tool provides detailed feedback, indicating the location of the error and offering suggestions for correction.
        <br />
        <br />
        To use the Bracket Checker, simply input your code snippet into the tool, and it will quickly identify any bracket-related errors, helping you ensure the integrity and correctness of your code.
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  {
    title: "Search Engine",
    imgUrl: search,
    content: (
      <div>
        This project is a smaller-scale version of Google, designed to provide users with the ability to search for related articles by entering a query. It implements a basic search engine with indexing and querying capabilities, utilizing data structures such as AVL trees, maps, and more.
        <br />
        <br />
        The Search Engine allows users to input their search query, and it quickly retrieves relevant articles based on the indexed data. The project's indexing mechanism organizes the articles efficiently, allowing for fast and accurate search results.
        <br />
        <br />
        To use the Search Engine, simply enter your search query into the provided search bar, and the tool will return a list of relevant articles, helping you find the information you need quickly and effectively.
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  {
    title: "University Staff Adding",
    imgUrl: database,
    content: (
      <div>
        This project allows users to manage university staff data using SQL databases. Users can add, remove, and check staff records, as well as manage courses and departments.
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  {
    title: "Sorting Visualizer",
    imgUrl: expense,
    content: (
      <div>
        This project is designed to visualize different sorting processes, including merge sort, quick sort, heap sort, and bubble sort. It provides a clear representation of how each sorting algorithm operates, allowing users to understand the efficiency and performance characteristics of each method. 
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  {
    title: "InstaJob Agency",
    imgUrl: job,
    content: (
      <div>
        InstaJob Agency serves as an intermediary platform connecting job seekers with employers seamlessly. It functions as a third-party software, facilitating the automatic matching of job opportunities with professionals based on their skills and preferences. Additionally, it provides tools for managing job applications efficiently, streamlining the hiring process for both employers and job seekers.
        <br />
        <br />
        Visit my website: <a href="https://master.d3bzjn1cpskicc.amplifyapp.com/?fbclid=IwAR2DX_oB35pdd3Ec_9qfwAnlr5PHDa3WoTklE-qFwwUcyzr0NwN-_GoMqTg">Website Link</a>
      </div>
    ),
  },
  ];

  const ProjectModal = ({ project, onClose }) => {
    return (
      <Modal show={!!project} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'black' }}>{project.content}</Modal.Body>        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
<section className="project" id="projects" >
        <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                  {
                    projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        onClick={() => handleProjectClick(index)}
                      />
                    ))
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  )
}