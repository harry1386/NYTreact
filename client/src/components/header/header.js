import React from "react";

class Header extends React.Component {
    render() {
      return (
        <div className="jumbotron">
          <h1>{this.props.mainText}</h1>
        </div>
      )
    }
}
export default Jumbotron;