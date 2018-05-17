import React from 'react';
require("./style.css");

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Panel">
          <div className="PanelHeader">
            <span>data1</span>
            <span>Reset</span>
            <span>100/200</span>
          </div>
          <div className="PanelContents">
            <div><Item /></div>
            <div><Item /></div>
            <div><Item /></div>
            <div><Item /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div className="Panel h-55px Margin5px">
        <div className="ItemPanel">
          <div className="ItemPanelHeader">
            <span>TTTKOS0900:</span>
            <span>Type:P</span>
            <span>ECTS:5</span>
          </div>
          <div className="ItemPanelContents">
            <div>AutoCadin perusteet</div>
            <span>ECTS:5</span>
            <span>ECTS:5</span>
            <span>ECTS:5</span>
          </div>
        </div>
      </div>
    );
  }
}

