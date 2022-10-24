import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return (
    <>
      <div className="row mb-2">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
          />
          <i
            className="bi bi-search position-absolute
                       wd-nudge-up"
          ></i>
        </div>
        <div className="col-1">
          {/*eslint-disable-next-line*/}
          <a
            href="explore-settings.html"
            className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"
          ></a>
        </div>
      </div>
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          {/*eslint-disable-next-line*/}
          <a className="nav-link active">For You</a>
        </li>
        <li className="nav-item">
          {/*eslint-disable-next-line*/}
          <a className="nav-link">Trending</a>
        </li>
        <li className="nav-item">
          {/*eslint-disable-next-line*/}
          <a className="nav-link">News</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/starship.jpg" className="w-100" alt={"starship"} />
        <h1 className="position-absolute wd-nudge-up1 text-white">
          SpaceX Starship
        </h1>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
