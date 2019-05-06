import React from 'react';
import './App.css';

class MyTooltip extends React.Component {
    // state = {
    //     isTooltipActive: true,
    // }
    // onMouseOver = () => {
    //     this.setState({
    //         isTooltipActive: true
    //     })
    // }

    // onMouseLeave = () => {
    //     this.setState({
    //         isTooltipActive: false
    //     })
    // }
    render() {
        const {isTooltipActive, mouseCoords} = this.props;
        const { left, top, } = mouseCoords;
        return (
            isTooltipActive &&
            (
                <div style={{left: left - 10, top: top - 50}} className="myTooltip">
                    {this.props.children}
                </div>
            )
        );
    }
}

export default MyTooltip;
