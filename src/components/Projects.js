import React, { Component } from 'react'
import ProjectList from './ProjectList';

export class Projects extends Component {
  render() {
    return (
        <div className="container-fluid mt-2 ml-1">
            <h3>Projects</h3>
            <div className="row">
                <ProjectList />
            </div>
        </div>
    )
  }
}

export default Projects