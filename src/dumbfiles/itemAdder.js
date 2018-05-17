import React from "react";
import { connect } from "react-redux";
import * as acts from "../actions/actions";

class ItemAdder extends React.Component {
  handleclick = () => {
    let data = {
      id:11,
      name:"text",
    }
    this.props.AddCourse(data, this.props.id)
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleclick}>Click Me</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  AddCourse: acts.AddCourse,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdder)