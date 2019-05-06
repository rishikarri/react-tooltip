import React from 'react';
import logo from './logo.svg';
import ToolTip from 'react-portal-tooltip'
import MyTooltip from './MyTooltip';
import './App.css';

class App extends React.Component {
    state = {
        isTooltipActive: false,
        mouseCoords: {
            left: null,
            top: null,
        },
    }
    onMouseOver = (e) => {
        console.log(e.pageX, 'e');
        // debugger;
        this.setState({
            isTooltipActive: true,
            mouseCoords: {
                left: e.pageX,
                top: e.pageY
            }
        })
    }

    onMouseLeave = () => {
        this.setState({
            isTooltipActive: false
        })
    }
    render() {
        return (
          <div className="App">
                <div onMouseOver={this.onMouseOver} onMouseMove={this.onMouseOver} onMouseLeave={this.onMouseLeave} className="hello">
                  Hello
              </div>
              {/* <ToolTip active={this.state.isTooltipActive} position="right" arrow="" parent=".hello">
                  <p>
                      this is the content
                  </p>
              </ToolTip> */}
              <MyTooltip isTooltipActive={this.state.isTooltipActive} mouseCoords={this.state.mouseCoords}>
                  hi
              </MyTooltip>

          </div>
        );
    }
}

export default App;
