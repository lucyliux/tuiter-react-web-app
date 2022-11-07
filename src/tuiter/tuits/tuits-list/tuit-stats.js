import React from "react";

const TuitStats = ({ replies = 0, retuits = 0, liked = false, likes = 0 }) => {
  return (
    <div className="row">
      <div className="col" style={{ "font-size": "15px" }}>
        <i className="bi bi-chat"></i> {replies}{" "}
      </div>
      <div className="col" style={{ "font-size": "15px" }}>
        <i className="bi bi-arrow-repeat"></i> {retuits}{" "}
      </div>
      <div className="col" style={{ "font-size": "15px" }}>
        <i
          className={`bi
                    ${
                      liked === true ? "bi-heart-fill text-danger" : "bi-heart"
                    }`}
        ></i>{" "}
        {likes}{" "}
      </div>
      <i className="col bi bi-share" style={{ "font-size": "15px" }}></i>
    </div>
  );
};

export default TuitStats;
