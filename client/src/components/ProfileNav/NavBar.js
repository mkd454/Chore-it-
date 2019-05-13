import React from 'react';

function NavBar(props) {
  return (
    <ul className='NavBar'>
      <li className='NavItem'>
        <a
          href="/dashboard/yourtasks"
          onClick={() => props.handlePageChange("yourtasks")}
          className={props.currentPage === "yourtasks" ? "nav-link active" : "nav-link"}
        >
          YOUR TASKS
        </a>
      </li>
      <li className='NavItem'>
        <a
          href="/dashboard/group"
          onClick={() => props.handlePageChange("group")}
          className={props.currentPage === "group" ? "nav-link active" : "nav-link"}
        >
          YOUR GROUP
        </a>
      </li>
    </ul>
  )
}

export default NavBar;
