import React, { Component } from "react";

class index extends Component {
  render() {
    const { record, index } = this.props;
    return (
      <div style={{ width: "330px" }}>
        <div style={{ ...styles.item, padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>#{index + 1}</h2>
          <div style={{ textAlign: "center" }}>
            <img src={record.owner.avatar_url} style={{ width: "150px" }} />
          </div>
          <h3 style={{ textAlign: "center", color: "#b83617", margin: "15px 0" }}>
            <a style={{ color: "red" }} href={record.owner.html_url}>
              {record.owner.login}
            </a>
          </h3>
          <p style={{ paddingLeft: "20px", margin: "5px 0" }}>
            <i
              className="fa fa-user-circle-o"
              style={{ marginRight: "10px", width: "16px", textAlign: "center", color: "rgb(255, 191, 116)" }}
            />
            <a style={{ color: "#000" }} href={record.owner.html_url}>
              {record.owner.login}
            </a>
          </p>
          <p style={{ paddingLeft: "20px", margin: "5px 0" }}>
            <i
              className="fa fa-star"
              style={{ marginRight: "10px", width: "16px", textAlign: "center", color: "rgb(255, 215, 0)" }}
            />
            {record.stargazers_count}
            <span style={{ marginLeft: "10px" }}>stars</span>
          </p>
          <p style={{ paddingLeft: "20px", margin: "5px 0" }}>
            <i
              className="fa fa-code-fork"
              style={{ marginRight: "10px", width: "16px", textAlign: "center", color: "rgb(129, 195, 245)" }}
            />
            {record.forks_count}
            <span style={{ marginLeft: "10px" }}>forks</span>
          </p>
          <p style={{ paddingLeft: "20px", margin: "5px 0" }}>
            <i
              className="fa fa-warning"
              style={{ marginRight: "10px", width: "16px", textAlign: "center", color: "rgb(241, 138, 147)" }}
            />
            {record.open_issues_count}
            <span style={{ marginLeft: "10px" }}>open issues</span>
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  item: {
    backgroundColor: "#ebebeb",
    width: "100%",
    marginBottom: "10px",
    borderRadius: "10px",
  },
};
export default index;
