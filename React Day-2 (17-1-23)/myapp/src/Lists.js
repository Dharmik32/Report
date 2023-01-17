import React from "react";

class Lists extends React.Component{

    strings = ['Hi', 'Hello', 'What up'];

    render()
    {
        return(
            <div>
                <ul>
                    {this.strings.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Lists;