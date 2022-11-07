import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      {/*eslint-disable-next-line*/}
      <a className="list-group-item">Tuiter</a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        href="/tuiter/home"
      >
        Home
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        href="/tuiter"
      >
        Explore
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        Notifications
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        Messages
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        Bookmarks
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        href="#"
      >
        Lists
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        href="#"
      >
        Profile
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        href="#"
      >
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
