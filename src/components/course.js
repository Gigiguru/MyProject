//React redux 
import React from "react";
import { connect } from "react-redux";
// flow
import flow from 'lodash/flow';
// react dnd
import { DragSource, DropTarget } from 'react-dnd';

class Course extends React.Component {
  render() {
    const { course, connectDragSource, isDragging} = this.props;
    const opacity = isDragging ? 0:1;
    return connectDragSource(
      <div className="Panel h-55px Margin5px" style={{opacity}}>
        <div className="ItemPanel">
          <div className="ItemPanelHeader">
            {this.props.ListId === 1 ? <span>{course.Id}:<br />{course.Name}</span> : <span>{course.Id}</span>}
            <span>Type:P</span>
            <span>ECTS:5</span>
          </div>
          {this.props.ListId !== 1 ?
            <div className="ItemPanelContents">
              <div>AutoCadin perusteet</div>
            </div> :
            <div className="ItemPanelContents">
              <span>Kybertuvallisuus</span>
              <span>Pakollinen</span>
              <span>ECTS:5</span>
              <span>Scores:50</span>
            </div>
          }
        </div>
      </div>
    );
  }
}
// dnd component
const courseSource ={
  beginDrag(props){
    return{
      index:props.index,
      itemId: props.courseId,
      listId:props.listId,
      course: props.course,
    };
  },
  endDrag(props,monitor){
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if(dropResult && dropResult.listId !== item.listId){
      props.RemoveCourseFromRedux(item.itemId);
    }
  }
}
export default flow(
  DragSource("COURSE", courseSource, (connect,monitor) =>({
    connectDragSource:connect.dragSource(),
    isDragging:monitor.isDragging()
  }))
)(Course);