import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { message } from "antd";
import "@/pages/Battle/index.scss";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp1: localStorage.getItem("value1") ? localStorage.getItem("value1") : "",
      inp2: localStorage.getItem("value2") ? localStorage.getItem("value2") : "",
      flage1: false,
      falge2: false,
    };
  }
  onValue1Change = (e) => {
    this.setState({ inp1: e.target.value });
    localStorage.setItem("value1", e.target.value);
    if (!e.target.value) {
      this.setState({ flage1: false });
    }
  };
  onValue2Change = (e) => {
    this.setState({ inp2: e.target.value });
    localStorage.setItem("value2", e.target.value);
    if (!e.target.value) {
      this.setState({ flage2: false });
    }
  };
  btn1Click = () => {
    this.setState({ flage1: true });
  };
  btn2Click = () => {
    this.setState({ flage2: true });
  };
  removeInp2 = () => {
    this.setState({ flage2: false, inp2: "" });
  };
  removeInp1 = () => {
    this.setState({ flage1: false, inp1: "" });
  };
  toDetails = () => {
    const { history, match } = this.props;
    const { inp1, inp2 } = this.state;
    // console.log(match.path)
    history.push(`/Details?value1=${inp1}&value2=${inp2}`);
  };
  key1Up = (e) => {
    const { inp1 } = this.state;
    if (e.keyCode === 13 && inp1) {
      this.btn1Click();
    } else if (e.keyCode === 13 && !inp1) {
      message.error("Player One必须填写");
    }
  };
  key2Up = (e) => {
    const { inp2 } = this.state;
    if (e.keyCode === 13 && inp2) {
      this.btn2Click();
    } else if (e.keyCode === 13 && !inp2) {
      message.error("Player Two必须填写");
    }
  };
  //图片出错处理
  onImgErro = (num) => {
    message.error(`Player ${num}用户不存在请重新输入`);
    if (num === "One") {
      this.setState({ flage1: false });
    } else if (num === "Two") {
      this.setState({ flage2: false });
    }
  };
  render() {
    return (
      <div style={{ padding: "0 30px" }}>
        <div style={{ textAlign: "center", fontSize: "30px", margin: "20px 0", fontWeight: "bold" }}>Instructions</div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "190px", margin: "0 auto" }}>
              <p>Enter two Github:</p>
              <div style={{ background: "#eee", padding: "20px" }}>
                <i className="fa fa-users" style={{ fontSize: "150px", color: "#ffbf74" }}></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "190px", margin: "0 auto" }}>
              <p>Battle</p>
              <div style={{ background: "#eee", padding: "20px" }}>
                <i className="fa fa-fighter-jet" style={{ fontSize: "150px", color: "#808080" }}></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: "190px", margin: "0 auto" }}>
              <p>See the winner</p>
              <div style={{ background: "#eee", padding: "20px" }}>
                <i className="fa fa-fighter-jet" style={{ fontSize: "150px", color: "#808080" }}></i>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "10px 0", fontSize: "25px", fontWeight: "bold" }}>Players</div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>Player One</p>
            {this.state.flage1 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#dfdfdf",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ width: "64px" }}
                  src={`https://github.com/${this.state.inp1}.png?size=200`}
                  alt=""
                  onError={() => {
                    this.onImgErro("One");
                  }}
                />
                <div
                  style={{ flexGrow: "1", textAlign: "left", paddingLeft: "10px", fontSize: "32px", color: "#1890ff" }}
                >
                  {this.state.inp1}
                </div>
                <div
                  style={{
                    width: "42px",
                    lineHeight: "42px",
                    background: "#f5222d",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "50%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={this.removeInp1}
                >
                  X
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="github username"
                  value={this.state.inp1}
                  onChange={this.onValue1Change}
                  style={{ width: "60%", height: "40px" }}
                  onKeyUp={this.key1Up}
                />
                <button
                  style={{ width: "35%", marginLeft: "10px", height: "40px" }}
                  onClick={this.btn1Click}
                  disabled={this.state.inp1 === ""}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6">
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>Player Two</p>
            {this.state.flage2 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#dfdfdf",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ width: "64px" }}
                  src={`https://github.com/${this.state.inp2}.png?size=200`}
                  alt=""
                  onError={() => {
                    this.onImgErro("Two");
                  }}
                />
                <div
                  style={{ flexGrow: "1", textAlign: "left", paddingLeft: "10px", fontSize: "32px", color: "#1890ff" }}
                >
                  {this.state.inp2}
                </div>
                <div
                  style={{
                    width: "42px",
                    lineHeight: "42px",
                    background: "#f5222d",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "50%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={this.removeInp2}
                >
                  X
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="github username"
                  value={this.state.inp2}
                  onChange={this.onValue2Change}
                  style={{ width: "60%", height: "40px" }}
                  onKeyUp={this.key2Up}
                />
                <button
                  style={{ width: "35%", marginLeft: "10px", height: "40px" }}
                  onClick={this.btn2Click}
                  disabled={this.state.inp2 === ""}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          {this.state.flage1 && this.state.flage2 ? (
            <button onClick={this.toDetails}>
              <Link to="/Details">Battle</Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Battle;
