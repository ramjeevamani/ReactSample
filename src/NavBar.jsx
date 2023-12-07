import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto me-3" >
          <li class="nav-item active me-3">
            <Link to='/'>Home </Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/state'>Simple State </Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/users'>Users </Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/effect'>Effect </Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/child'>Child to Parent </Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/library'>UI Library</Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/context'>Context API</Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/redux'>Redux</Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/crud'>Crud Operations</Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/post'>Posts</Link>
          </li>
          <li class="nav-item dropdown me-3">
            <Link to='/reduxpost'>Redux Posts</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar;