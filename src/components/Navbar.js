import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0 app-header">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Will Taylor's Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/Resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Projects">Projects</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">More About Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar