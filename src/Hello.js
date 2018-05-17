import React from 'react';


export default class App extends React.Component{
  render(){
    return(
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

class Select extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="SelectPanel">
          <div className="SelectPanelHeader">
            <span>Courses</span>
            <span>Courses:{"55"}</span>
            <span>Sort by:{"NOTHING"}</span>
          </div>
          <div className="SelectPanelContents">
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