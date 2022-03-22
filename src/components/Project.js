import React, { Component } from 'react'

export class Project extends Component {
  

  render() {
    let PortfolioLink;
    if (this.props.inPortfolio) {
        PortfolioLink = <h5 className="d-inline-block mb-0"><a href={this.props.projectLink} class="card-link">View in Portfolio</a></h5>;
    } else {
        PortfolioLink = <p>Project not visible in portfolio</p>;
    }
    // todo: check for img prop and conditionally render it

    return (
        <div className="card project-card">
            <div className="card-body">
                <h3 className="card-title">{this.props.title}</h3>
                <hr style={{ color: "gray" }} />
                <p className="card-text mt-3 mb-1">{this.props.description}</p>
                <h5 className="d-inline-block card-github-link mb-0"><a href={this.props.link} class="card-link">View on Github&ensp;&ensp;</a></h5>
                {PortfolioLink}
            </div>
        </div>
    )
  }
}

export default Project