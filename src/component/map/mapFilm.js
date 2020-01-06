import React from "react";
import { connect } from "react-redux";
import { Card, Rate, Button} from "antd";
import Delete from "../delEdit/delete";
import Edit from "../delEdit/edit";
import "./buttonCard.css";
import { Link } from "react-router-dom";

const { Meta } = Card;
function MapFilm(props) {
  const filtrerParID = el => {
    if (props.stars !== "" && props.newInput !== "") {
      return (
        el.rate.includes(props.stars) &&
        el.name.toLowerCase().includes(props.newInput.toLowerCase())
      );
    } else if (props.stars !== "") {
      return el.rate.includes(props.stars);
    } else if (props.newInput !== "") {
      return el.name.toLowerCase().includes(props.newInput.toLowerCase());
    } else {
      return props.stars !== ""
        ? el.rate.includes(props.stars)
        : el.name.toLowerCase().includes(props.newInput.toLowerCase());
    }
  };

  const arrByID = props.movieList.filter(filtrerParID);

  ////////////////////////////////
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "50px"
      }}
    >
      {/**/}
      {arrByID.map((el, i) => (
        <Card
          hoverable
          style={{ width: 240, margin: 23 }}
          cover={<img alt="films" src={el.lien} style={{ height: 350 }} />}
        >
          <Meta title={el.name} />
          <hr />
          <span>
            <Rate value={el.rate} />
          </span>
          <br />
          <div className="buttonCard">
            <Delete id={i} />

            <Edit newId={el.id} />
            <Link to={`/Desc/${i}`} id={i}>  <Button >Description</Button></Link>
          
          </div>
        </Card>
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    movieList: state.movieList,
    stars: state.stars,
    newInput: state.newInput
  };
};
export default connect(mapStateToProps, null)(MapFilm);
