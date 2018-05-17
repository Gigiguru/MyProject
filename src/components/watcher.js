import React from "react";
import { connect } from "react-redux";
import * as acts from "../actions/actions";

class Watcher extends React.Component {
  render() {
    return (
      <React.Fragment>
      {this.props.Courses.map((el,i)=>{
        return <li key={i}> {el.name} </li>
      })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  Courses:state.Courses,
})

const mapDispatchToProps = {
  AddCourse: acts.AddCourse,
}


export default connect(mapStateToProps)(Watcher)