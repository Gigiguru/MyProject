import React from "react";
import { connect } from "react-redux";

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ItemAdder from "./itemAdder.js"
import Watcher from "./watcher.js"
import Container from "./container";
import Select from "./select";

class App extends React.Component{
  render(){
    console.log("main changed")
    return (
      <React.Fragment>
      {"Hahe"}
      <ItemAdder id={2}/>
      <ItemAdder id={3}/>
      <Container id={2}/>
      <Container id={3} />
      </React.Fragment>
    );
  }
}


export default DragDropContext(HTML5Backend)(App);