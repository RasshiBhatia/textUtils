import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light' ? 'light' : 'success'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? '#03321c' : 'white'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    home : PropTypes.string,
    about : PropTypes.string
}

Navbar.defaultProps = {
    title : "TextChanger",
    home : "Home",
    about : "About"
}