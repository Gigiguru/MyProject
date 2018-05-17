import React from "react";

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: [],
    }
  }
  render() {
    return (
      <div className="Panel h-55px Margin5px">
        <div className="ItemPanel">
          <div className="ItemPanelHeader">
            {this.state.selectItem !== undefined ? <span>TTTKOS0900:<br />Autocadin perusteet</span> : <span>TTTKOS0900</span>}
            <span>Type:P</span>
            <span>ECTS:5</span>
          </div>
          {this.state.selectItem === undefined ?
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