import React, { Component } from "react";
import { Button, Input,Rate } from "antd";
import { connect } from "react-redux";

import "./edit.css";

class Edit extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          visible: false,
          id: this.props.newId,
          lien: "",
          name: "",
          rate:"",
          movie: this.props.movieList.filter(movie => movie.id == this.props.newId)

        };
      }

      showModif = () => {
        console.log(this.state.movie[0]);
        this.setState({
          visible: !this.state.visible,
          id: this.state.movie[0].id,
          lien: this.state.movie[0].lien,
          name: this.state.movie[0].name,
          rate: this.state.movie[0].rate
        });
      };

      handelChangeLien=(event)=>{
          this.setState({
            lien:event.target.value 
          })
      }

      handelChangeName=(event)=>{
        this.setState({
          name:event.target.value 
        })
    } 

    handleSubmit=()=>{
        this.props.editMovie(this.state);
    }
  handleSendEdit = () => {};
  render() {
    return (
      <div>
        <div>
          <Button type="primary" ghost onClick={this.showModif}>Edit</Button>
        </div>
        <div className={(this.state.visible ? 'show' : 'hidden')}>
          <Input placeholder="Lien" value={this.state.lien} onChange={this.handelChangeLien}/>
          <Input placeholder="Name" value={this.state.name} onChange={this.handelChangeName} />
          <Rate value={this.state.rate} value={this.state.rate} onChange={v => this.setState({ rate: v })}/>
          <Button type="dashed" block onClick={this.handleSubmit}>Valider</Button>
          <Button type="reset" block onClick={v => this.setState({ visible: false })}>Annuler</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movieList: state.movieList };
};

const mapDispatchToProps = dispatch => {
    return{
        editMovie:(obj) => dispatch({ type: "EDIT", payload: obj }) 
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);