import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="row" style={styles.nav}>
        <div
          className="col-lg-2 col-sm-2 col-md-2"
          onClick={() => {
            this.props.onSwitch("All");
          }}
          style={{ cursor: "pointer", margin: "0 20px", color: this.props.infinitKey === "All" ? "red" : "" }}
        >
          All
        </div>
        <div
          className="col-lg-2 col-sm-2 col-md-2"
          onClick={() => {
            this.props.onSwitch("JavaScript");
          }}
          style={{ cursor: "pointer", margin: "0 20px", color: this.props.infinitKey === "JavaScript" ? "red" : "" }}
        >
          JavaScript
        </div>
        <div
          className="col-lg-2 col-sm-2 col-md-2"
          onClick={() => {
            this.props.onSwitch("Ruby");
          }}
          style={{ cursor: "pointer", margin: "0 20px", color: this.props.infinitKey === "Ruby" ? "red" : "" }}
        >
          Ruby
        </div>
        <div
          className="col-lg-2 col-sm-2 col-md-2"
          onClick={() => {
            this.props.onSwitch("Java");
          }}
          style={{ cursor: "pointer", margin: "0 20px", color: this.props.infinitKey === "Java" ? "red" : "" }}
        >
          Java
        </div>
        <div
          className="col-lg-2 col-sm-2 col-md-2"
          onClick={() => {
            this.props.onSwitch("CSS");
          }}
          style={{ cursor: "pointer", margin: "0 20px", color: this.props.infinitKey === "CSS" ? "red" : "" }}
        >
          CSS
        </div>
      </div>
    );
  }
}

const styles = {
  nav: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
};
export default index;
