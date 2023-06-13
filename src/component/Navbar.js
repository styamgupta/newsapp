import React from 'react'                  
import { Link } from "react-router-dom";

const Navbar = ()=>{
 
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light" data-bs-theme="dark">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row mx-2">
              {/* <Link className="navbar-brand" to='/'>News</Link> */}
              <li className="nav-item mx-2"><Link className="nav-link" to="/">News</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/business">Business </Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/entertainment">Entertainment </Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/science">Science </Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/health">Health </Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/sports">Sports </Link></li>
              <li className="nav-item mx-2"><Link className="nav-link" to="/technology">Technology </Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }


export default Navbar