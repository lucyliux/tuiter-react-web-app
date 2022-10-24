import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-start">
        <div className="col-10">
          <div style={{ "font-size": "15px" }}>
            {post.userName} . {post.time}
          </div>
          <div className="fw-bolder" style={{ "font-size": "15px" }}>
            {post.topic}
          </div>
          <div style={{ "font-size": "18px" }}>{post.title}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded ps-0 pe-0 pt-0 pb-0 h-100"
            src={`/images/${post.image}`}
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
