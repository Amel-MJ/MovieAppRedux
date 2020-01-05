import React, { Component } from "react";
import { Button, Input, Rate } from "antd";
import { connect } from "react-redux";
import { editMovie } from "../../action/index";

import "./edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      visible: false,
      lien: "",
      name: "",
      rate: ""
    };
  }

  showModif = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handelChangeLien = event => {
    this.setState({
      lien: event.target.value
    });
  };

  handelChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.editMovie(this.state);
  };
  handleSendEdit = () => {};
  render() {
    return (
      <div>
        <div>
          <Button type="primary" ghost onClick={this.showModif}>
            Edit
          </Button>
        </div>
        <div className={this.state.visible ? "show" : "hidden"}>
          <Input placeholder="default size" onChange={this.handelChangeLien} />
          <Input placeholder="default size" onChange={this.handelChangeName} />
          <Rate
            value={this.state.rate}
            onChange={v => this.setState({ rate: v })}
          />
          <Button type="dashed" block onClick={this.handleSubmit}>
            Valider
          </Button>
          <Button
            type="reset"
            block
            onClick={v => this.setState({ visible: false })}
          >
            Annuler
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { editMovie };
export default connect(null, mapDispatchToProps)(Edit);
