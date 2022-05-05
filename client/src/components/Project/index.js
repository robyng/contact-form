import React from 'react';

function Project(props) {
    // destrcutured props. same as const project = props.project but allows one vs multiple lines
    const { project } = props
    return (
    
<div className="card col-lg-5 col-md-10">
  <img className="card-img-top" src={project.image} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">{project.title}</h5>
    <p className="card-text">{project.description}</p>
    <br/>
    <a href={project.repo} className="btn btn-primary" target="_blank" rel='noreferrer'>Git Repo</a>
    <br />
    <a href={project.deployed} className="btn btn-success" target="_blank" rel='noreferrer' >See in Action</a>
  </div>
</div>



    )
}

export default Project;
