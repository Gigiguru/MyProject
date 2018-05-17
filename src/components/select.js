//React redux 
import React from "react";
import { connect } from "react-redux";
//components
import Course from "./course";
import * as acts from "../actions/actions";
// flow
import flow from 'lodash/flow';
// react dnd
import { DropTarget } from 'react-dnd';



class Select extends React.Component {
  AddCourseToRedux(course) {
    this.props.AddCourse(course, this.props.id)
  }
  RemoveCourseFromRedux(courseId) {
    this.props.RemoveCourse(courseId, this.props.id)
  }
  render() {
    const { connectDropTarget } = this.props;
    const List = this.props.SelectList;
    console.log("Select container changed", this.props.id)
    return connectDropTarget(
      <div className="SelectPanel">
        <div className="SelectPanelHeader">
          <span>Courses</span>
          <span>Courses:{"55"}</span>
          <span>Sort by:{"NOTHING"}</span>
        </div>
        <div className="SelectPanelContents">
          {List.map((data, i) => {
            return <Course
              key={data.Id}
              index={i}
              listId={this.props.id}
              course={data}
              courseId={data.Id}
              RemoveCourseFromRedux={this.RemoveCourseFromRedux.bind(this)} />
          })}
        </div>
      </div>
    );
  }
}
// dnd components
const courseTarget = {
  drop(props, monitor, component) {
    const { id } = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.AddCourseToRedux(sourceObj.course);
    return {
      listId: id
    };
  }
}

// redux components
const mapStateToProps = state => ({
  SelectList: state.SelectList,
})

const mapDispatchToProps = {
  AddCourse: acts.AddCourse,
  RemoveCourse: acts.RemoveCourse,
}

export default flow(
  DropTarget("COURSE", courseTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
  })),
  connect(mapStateToProps, mapDispatchToProps)
)(Select)