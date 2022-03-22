import React, { Component } from 'react'
import Project from './Project'

// import images for project cards here to send them as props

export default class ProjectList extends Component {


  render() {
    return (
      <div className="col-4">
        <Project 
          title="Matrix Game"
          link="https://github.com/Cakecrook/MatrixGame"
          description="My Java interpretation of the Matrix Game"
          projectLink=""
          inPortfolio="false"
        />
      </div>
    )
  }
}
