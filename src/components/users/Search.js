// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export default class Search extends Component {
//   state = {
//     text: "",
//   };
//   static propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired,
//   };
//   onChange = (e) => {
//     //or if you have multiple inputs => `this.setState({[e.target.name]: e.target.value})`
//     this.setState({ text: e.target.value });
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text === "") {
//       this.props.setAlert("Please enter something", "light");
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: "" });
//     }
//   };

//   render() {
//     const { showClear, clearUsers } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.onSubmit} className="form">
//           <input
//             type="text"
//             name="text"
//             placeholder="Search Users..."
//             value={this.state.text}
//             onChange={this.onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />

//           {showClear === true && (
//             <button onClick={clearUsers} className="btn btn-light btn-block">
//               Clear
//             </button>
//           )}
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import Users from "./Users";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    //or if you have multiple inputs => `this.setState({[e.target.name]: e.target.value})`
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />

        {githubContext.users.length > 0 && (
          <button
            onClick={githubContext.clearUsers}
            className="btn btn-light btn-block"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
