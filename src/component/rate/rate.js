import React, { Component } from "react";
import { connect } from "react-redux";
import { Rate } from "antd";
import { handledRate } from "../../action/index"
class rate extends Component {
  constructor(props) {
    super(props);
    this.state = { rateVal: "" };
  }

  handledRate = val => {
    if (val == 0) val = "";
    this.setState(
      {
        rateVal: val
      },
      () => {
        this.props.handledRate(this.state.rateVal);
      }
    );
  };

  render() {
    return (
      <div
        style={{ display: "flex", alignItems: "flex-end", marginLeft: "40px" }}
      >
        <span>
          <p>Minimum Rating</p>
          <Rate onChange={this.handledRate} value={this.state.rateVal} />
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = { handledRate };

export default connect(null, mapDispatchToProps)(rate);
