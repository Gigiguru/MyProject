import React from "react";
import { connect } from "react-redux";
import Course from "./course";
import * as acts from "../actions/actions";

class Select extends React.Component {
  render() {
    console.log("container changed")
    return (
      <React.Fragment>
        <div className="SelectPanel">
          <div className="SelectPanelHeader">
            <span>Courses</span>
            <span>Courses:{"55"}</span>
            <span>Sort by:{"NOTHING"}</span>
          </div>
          <div className="SelectPanelContents">
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
})

const mapDispatchToProps = {
  AddCourse: acts.AddCourse,
}

export default connect()(Select)