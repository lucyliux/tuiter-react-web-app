import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center pe-2">
        <div className="col-2">
          <img
            className="rounded-circle"
            height={48}
            width={48}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-7">
          <div className="fw-bold" style={{ "font-size": "15px" }}>
            {who.userName}
          </div>
          <div style={{ "font-size": "15px" }}>@{who.handle}</div>
        </div>
        <div className="col-3">
          <button
            className="btn btn-primary rounded-pill float-end"
            style={{ "font-size": "15px" }}
          >
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
