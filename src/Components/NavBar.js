import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import './NavBar.css';

export default function(props) {
  const path = useLocation().pathname;
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/data-structures",
      text: "Data Structures",
    },
    {
      path: "/algorithms",
      text: "Algorithms",
    },
    {
      path: "/about",
      text: "About",
    },
  ];

  return (
    <header className="NavBar">
      <nav>
        {links.map(link =>
          <Link
            key={link.path}
            to={link.path}
            className={
            matchPath(path, {
              path: `${link.path}/*`,
              strict: true,
              exact: true,
            })
            ||
            matchPath(path, {
              path: link.path,
              strict: true,
              exact: true,
            })
              ? "active"
              : ""
            }
          >
            {link.text}
          </Link>
        )}
      </nav>
    </header>
  )
}
