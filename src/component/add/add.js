import React, { Component } from "react";
import {connect} from 'react-redux'
import { Modal, Button, Input, Rate } from "antd";

const desc = ["1 étoile", "2 étoiles", "3 étoiles", "4 étoiles", "5 étoiles"];

class add extends Component {
  constructor(props) {
    super(props);

    this.state = { lien: "", name: "", rate:"", visible: false, value: 0 };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
 
    this.setState({ visible: false}, () => {
      this.props.handleadd({
          rate: (this.state.rate).toString(),
          lien: this.state.lien,
          name: this.state.name
      });

      this.setState({ lien: "", name: "", rate:"" })

    });

  };

  handleChange = value => {
    this.setState({ value });
  };

  handelChange = (v, key) => {
    this.setState({
      [key]: v.target.value
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ margin: 90 }}>
          Ajout d'un Film
        </Button>
        <Modal
          title="New Film"
          visible={this.state.visible}
          onOk={() => {
            this.handleOk();
          }}
          onCancel={this.handleCancel}
        >
          <div className="example-input">
            <Input
              placeholder="Lien d'affiche de film"
              onChange={v => this.setState({ lien: v.target.value })}
              value={this.state.lien}
            />
            <Input
              size="small"
              placeholder="Nom de la Film"
              value={this.state.name}
              onChange={v => this.setState({ name: v.target.value })}
            />
            <span>
              <Rate
                tooltips={desc}
                onChange={v => this.setState({ rate: v })}
                value={this.state.rate}
              />
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleadd:(obj)=>dispatch({type:"ADD_FILM",payload:obj})
  }
}
export default connect(null,mapDispatchToProps)(add);