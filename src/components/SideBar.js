import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hamburger from "./elements/Hamburger"

const Container = styled.div`
  color: #333;
  nav {
    width: 0em;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: width 0.6s ease;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    z-index: 5;
    color: #fff;
  }
  .sidebar-content {
    width: 80%;
    height: 100%;
    margin: 80px auto;
    font-size: 1.2em;
    letter-spacing: 2px;
  }
  .SideBar-active {
    width: 100%;
  }
  a {
    color: #333 !important;
    &:hover {
      text-decoration: none;
      color: #836755;
    }
  }
  p {
    font-weight: 600;
    margin: 20px 0px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    width: 100%;
    transition: all 0.6s;
    padding: 15px 15px;
    &:hover {
      a {
        color: #836755;
      }
      text-decoration: none;
      color: #836755;
      background: #fff;
    }
  }
  .sidebar-footer {
    width: 100%;
    position: absolute;
    bottom: 1.2em;
    display: flex;
    justify-content: space-evenly;
  }
  span {
    color: #fff;
  }
  a:hover {
    border: 0px !important;
  }
  svg {
    cursor: pointer;
    fill: #333;
    &:hover {
      fill: #836755;
    }
  }
`

const SideBar = ({ toggleSideBar, SideBarIsActive }) => {
  const closeSideBar = () => {
    toggleSideBar(false)
  }
  return (
    <Container>
      <nav className={SideBarIsActive ? `SideBar-active` : ``}>
        <div onClick={() => closeSideBar()}>
          <Hamburger />
        </div>
        <div className="sidebar-content">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="./portfolio">
            <p>Works</p>
          </Link>
          <Link to="./about">
            <p>About</p>
          </Link>
          <Link to="./contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="sidebar-footer">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>I</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>I</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>I</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>I</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </nav>
    </Container>
  )
}

export default SideBar
