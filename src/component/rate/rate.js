import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Rate } from "antd";

class rate extends Component {
    
    handledRate=val=>{
        if(val == 0 ) val = '';
        this.props.handledRate(val)
          }
    render() {
        return (
            <div style={{ display: "flex", alignItems:"flex-end", marginLeft:"40px"}}>
             <span>
                 <p>Minimum Rating</p>
              <Rate
               onChange={this.handledRate}
             value={this.props.stars}
              />
            </span>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handledRate:(valRate)=>dispatch({type:"SEARCH_RATE",payload:valRate})
    }
}
export default connect(null,mapDispatchToProps)(rate) 