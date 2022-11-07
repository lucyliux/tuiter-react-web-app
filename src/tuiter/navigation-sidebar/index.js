import React from "react";

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
        <div className="row">
          <i className="col-1 bi bi-house-door-fill"></i>
          <span class="col">Home</span>
        </div>
      </a>

      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        href="/tuiter/explore"
      >
        <div className="row">
          <i className="col-1 bi bi-hash"></i>
          <span className="col">Explore</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "labs" ? "active" : ""}`}
        href="/"
      >
        <div className="row">
          <i className="col-1 bi bi-asterisk"></i>
          <span className="col">Labs</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <div className="row">
          <i className="col-1 bi bi-bell"></i>
          <span className="col">Notifications</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <div className="row">
          <i className="col-1 bi bi-envelope"></i>
          <span className="col">Messages</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <div className="row">
          <i className="col-1 bi bi-bookmark"></i>
          <span className="col">Bookmarks</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        href="#"
      >
        <div className="row">
          <i className="col-1 bi bi-card-text"></i>
          <span className="col">Lists</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        href="#"
      >
        <div className="row">
          <i className="col-1 bi bi-person"></i>
          <span className="col">Profile</span>
        </div>
      </a>
      {/*eslint-disable-next-line*/}
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        href="#"
      >
        <div className="row">
          <i className="col-1 bi bi-three-dots"></i>
          <span className="col">More</span>
        </div>
      </a>
    </div>
  );
};
export default NavigationSidebar;
