import React from "react";
import { connect } from "react-redux";
import Course from "./course";
import * as acts from "../actions/actions";


class Container extends React.Component {


  //Connect usually have this, but we are using this component because we need specify what container we shoudlupdate
  shouldComponentUpdate(nextProps) {
    switch(this.props.id){
      case 2:{
        return nextProps.Courses !== this.props.Courses
      }
      case 3:{
        return nextProps.ListOne !== this.props.ListOne
      }
    }
    
  }
  render() {
    console.log("container changed", this.props.id)
    return (
      <React.Fragment>
        <div className="Panel">
          <div className="PanelHeader">
            <span>data1</span>
            <span>Reset</span>
            <span>100/200</span>
          </div>
          <div className="PanelContents">
            <div><Course /></div>
            <div><Course /></div>
            <div><Course /></div>
            <div><Course /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  Courses: state.Courses,
  ListOne: state.ListOne,
})

const mapDispatchToProps = {
  AddCourse: acts.AddCourse,
}

export default connect(mapStateToProps)(Container)