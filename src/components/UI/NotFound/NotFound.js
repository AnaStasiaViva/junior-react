import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "30px",
            position: "absolute",
            top: "300px",
          }}
        >
          Not Found!
        </h1>
        <Link
          style={{
            fontSize: "25px",
            position: "absolute",
            top: "400px",

            color: "#5ECE7B",
            borderBottom: "1px solid #5ECE7B",
          }}
          to="/"
        >
          Go Back
        </Link>
      </div>
    );
  }
}
export default NotFound;
