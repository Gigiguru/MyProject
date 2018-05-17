import React from "react";
import { connect } from "react-redux";
//dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
//components
import Container from "./container";
import Select from "./select";
//flow
import flow from 'lodash/flow';


class App extends React.Component{
  render(){
    console.log("main changed")
    const tempstyle={
      display:'flex',
      justifyContent: "space-around",
    }
    return (
      <React.Fragment>
      <div style={tempstyle}>
      <Select id={1} />
      <Container id={2}/>
      <Container id={3}/>
      <Container id={4} />
      <Container id={5} />
      </div>
      </React.Fragment>
    );
  }
}


export default flow(
  DragDropContext(HTML5Backend),
)(App);