import React from "react";
//here we got a fun constructor component rendering all our awesomly coded hooplah to the dom

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ' '};
    }

    render(){
        return(
            <div className="form-group">
                <input className="form-control"/>
            </div>
        );
    }
}

export default input;