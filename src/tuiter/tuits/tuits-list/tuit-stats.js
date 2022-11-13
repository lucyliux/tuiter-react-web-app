import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../../services/tuits-thunks";

const TuitStats = ({
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
  return (
    <div className="row">
      <div className="col" style={{ "font-size": "15px" }}>
        <i className="bi bi-chat"></i> {tuit.replies}{" "}
      </div>
      <div className="col" style={{ "font-size": "15px" }}>
        <i className="bi bi-arrow-repeat"></i> {tuit.retuits}{" "}
      </div>
      <div className="col" style={{ "font-size": "15px" }}>
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true,
              })
            )
          }
          className={`bi
                    ${
                      tuit.liked === true
                        ? "bi-heart-fill text-danger"
                        : "bi-heart"
                    }`}
        ></i>{" "}
        {tuit.likes}{" "}
      </div>
      <div className="col" style={{ "font-size": "15px" }}>
        {" "}
        <i
          onClick={() => {
            console.log(tuit.dislikes);
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes === undefined ? 1 : tuit.dislikes + 1,
                disliked: true,
              })
            );
          }}
          className={`bi
                    ${
                      tuit.disliked === true
                        ? "bi-hand-thumbs-down-fill text-primary"
                        : "bi-hand-thumbs-down"
                    }`}
        ></i>{" "}
        {tuit.dislikes === undefined ? 0 : tuit.dislikes}{" "}
      </div>
      <i className="col bi bi-share" style={{ "font-size": "15px" }}></i>
    </div>
  );
};

export default TuitStats;
