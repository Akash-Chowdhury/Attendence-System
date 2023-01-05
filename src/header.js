import React from 'react';
 import { Link } from "react-router-dom";


export default function header(props) {
  
  return (
    <nav id='nav' className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link class="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
header.defaultProps = {   // function_name.defaultprops....
  title: "Title"
}
