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



class Container extends React.Component {
  //Connect usually have this, but we are using this component because we need specify what container we shoudlupdate
  shouldComponentUpdate(nextProps) {
    switch(this.props.id){
      case 2:{
        return nextProps.KanbanListOne !== this.props.KanbanListOne
      }
      case 3:{
        return nextProps.KanbanListTwo !== this.props.KanbanListTwo
      }
      case 4: {
        return nextProps.KanbanListThree !== this.props.KanbanListThree
      }
      case 5: {
        return nextProps.KanbanListFour !== this.props.KanbanListFour
      }
      default:
      return 0;
    }
  }
  AddCourseToRedux(course){
    this.props.AddCourse(course, this.props.id)
  }
  RemoveCourseFromRedux(courseId){
    this.props.RemoveCourse(courseId, this.props.id)
  }
  Listchecker(){
    switch(this.props.id){
      case 2:{
        return this.props.KanbanListOne
      }
      case 3:{
        return this.props.KanbanListTwo
      }
      case 4: {
        return this.props.KanbanListThree
      }
      case 5: {
        return this.props.KanbanListFour
      }
    }
  }
  render() {
    const { connectDropTarget } = this.props;
    const List = this.Listchecker();
    console.log("container changed", this.props.id)
    return connectDropTarget(
        <div className="Panel">
          <div className="PanelHeader">
            <span>data1</span>
            <span>Reset</span>
            <span>100/200</span>
          </div>
          <div className="PanelContents">
            {List.map((data,i)=>{
              return <Course
                key={data.Id}
                index={i}
                listId={this.props.id}
                course={data}
                courseId={data.Id}
                RemoveCourseFromRedux={this.RemoveCourseFromRedux.bind(this)}/>
            })}
          </div>
        </div>
    );
  }
}
// dnd components
const courseTarget ={
  drop(props, monitor, component){
    const {id} = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.AddCourseToRedux(sourceObj.course);
    return {
      listId: id
    };
  }
}

// redux components
const mapStateToProps = state => ({
  KanbanListOne: state.KanbanListOne,
  KanbanListTwo: state.KanbanListTwo,
  KanbanListThree: state.KanbanListThree,
  KanbanListFour: state.KanbanListFour,
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
)(Container)