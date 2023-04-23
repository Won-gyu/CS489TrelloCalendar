import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/manager.css";
import { useHistory } from "react-router-dom";

function ProjectManager() {
  const [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const history = useHistory();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const newProject = () => {
    if (name && desc) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          title: name,
          content: desc,
        },
      ]);
      setName("");
      setDesc("");
    } else {
      console.log("please enter a name and description");
    }
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div>
      <div className="project-list">
        {projects.map((project) => {
          return (
            <div className="card" key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.content}</p>
              <Button className="manager" variant="primary" onClick={() => history.push("/")}>View Project</Button>
              <Button className="manager" variant="danger" onClick={() => handleDelete(project.id)}>Delete Project</Button>
            </div>
          );
        })}
      </div>
      <div className="project-form">
        <label htmlFor="name">Please Enter New Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="1"
          maxLength="30"
          size="10"
          value={name}
          onChange={handleName}
        ></input>
        <label htmlFor="story">Please Enter a Project Description</label>
        <input
          type="text"
          id="story"
          name="story"
          required
          minLength="1"
          maxLength="100"
          size="20"
          value={desc}
          onChange={handleDesc}
        ></input>
        <Button className="manager" variant="primary" onClick={newProject}>
          Add New Project!
        </Button>
      </div>
    </div>
  );
}

export default ProjectManager;