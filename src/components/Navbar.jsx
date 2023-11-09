import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.bgColor} `}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.text}`} to="/home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item`}>
                <Link className={`nav-link text-${props.text}`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link text-${props.text}`} to="/about">About</Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link text-${props.text}`} aria-disabled="true" to="/text">Text</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div >
        </div >
      </nav >
    </>
  )
}
