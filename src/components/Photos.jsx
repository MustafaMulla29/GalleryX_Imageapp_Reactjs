import React, { useReducer } from "react";

const Photos = (props) => {
  let { urls, user, links, description, likes } = props;
  return (
    <div className="card my-2" style={{ borderRadius: "0" }}>
      <div className="col-4">
        <a href={links.html} target="_blank">
          <img
            src={urls.regular}
            className="card-img-top"
            alt="image"
            style={{ width: "414px" }}
          />
        </a>
        <div className="card-body d-flex" style={{ width: "300%" }}>
          <div className="align-items-center">
            <a href={user.links.html} target="_blank">
              <img
                src={user.profile_image.small}
                alt="user_profile"
                style={{
                  borderRadius: "20px",
                  width: "40px",
                  marginRight: "10px",
                }}
              />
            </a>
          </div>
          <div className="  " style={{ flexDirection: "column" }}>
            <h6 style={{ marginTop: "3px", marginBottom: "3px" }}>
              {user.username}
            </h6>
            <p className="card-text" style={{ fontSize: "14px" }}>
              {description}
            </p>
            <div className="d-flex">
              <p
                className="card-text"
                style={{ fontSize: "13px", marginRight: "10px" }}
              >
                Likes - {likes}
              </p>
              <p className="card-text" style={{ fontSize: "13px" }}>
                Total Photos - {user.total_photos}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
