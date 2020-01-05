import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { handelDelete } from "../../action/index";

class Delete extends Component {
  render() {
    return (
      <div>
        <Button
          type="danger"
          ghost
          onClick={() => this.props.handelDelete(this.props.id)}
        >
          Remove
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = { handelDelete };
export default connect(null, mapDispatchToProps)(Delete);
