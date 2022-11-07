import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import Assignment6 from "../labs/a6";
import Assignment7 from "../labs/a7";
import TuitsList from "./tuits/tuits-list";
import HomeComponent from "./home";
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          {/*<NavigationSidebar active="explore" />*/}
          <Routes>
            <Route index element={<NavigationSidebar active="explore" />} />
            <Route path="/home" element={<NavigationSidebar active="home" />} />
          </Routes>
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: "relative" }}
        >
          <Routes>
            <Route index element={<ExploreComponent />} />
            <Route path="/home" element={<HomeComponent />} />
          </Routes>
          {/*<ExploreComponent />*/}
          {/*<HomeComponent />*/}
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
      {/*<Routes>*/}
      {/*  /!*<Route index element={<ExploreComponent />} />*!/*/}
      {/*  <Route path="/home" element={<TuitsList />} />*/}
      {/*</Routes>*/}
    </Provider>
  );
}

export default Tuiter;
