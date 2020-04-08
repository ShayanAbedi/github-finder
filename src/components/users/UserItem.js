import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//function based component
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //destructuring - instead of keep repeating this.state - you can also pass the destrcuture format to the function
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{
          width: "60px",
        }}
      ></img>{" "}
      <h3> {login} </h3>{" "}
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, //type `ptor` to generate this
};

export default UserItem;
