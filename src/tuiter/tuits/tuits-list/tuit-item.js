import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { deleteTuitThunk } from "../../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";

const TuitItem = ({
  tuit = {
    _id: 123,
    topic: "Space",
    userName: "SpaceX",
    title:
        "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its" +
        " 6' bed",
    time: "2h",
    image: "tesla.png",
    liked: true,
    disliked: false,
    replies: 123,
    retuits: 432,
    likes: 2345,
    dislikes: 0,
    handle: "@spacex",
    tuit:
        "You want to wake up in the morning and think the future is going to" +
        " be great - and that’s what being a spacefaring civilization is all" +
        " about. It’s about believing in the future and thinking that the " +
        "future will be better than the past. And I can’t think of anything " +
        "more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
      <li className="list-group-item">
        <div className="row align-items-start">
          <div className="col-2">
            <div>
              <img width={50} src={`/images/${tuit.image}`} alt={"img"} />
            </div>
          </div>
          <div className="col-10">
            <div style={{ "font-size": "15px" }}>
              <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}
              ></i>
              <b>{tuit.userName}</b> {tuit.handle} · {tuit.time}
            </div>
            <div style={{ "font-size": "15px" }}>{tuit.tuit}</div>
          </div>
        </div>
        <TuitStats tuit={tuit} />
      </li>
  );
};
export default TuitItem;