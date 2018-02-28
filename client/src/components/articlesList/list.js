import React from "react";
//the actual list populated with the list items

export const list = ({children}) => {
    return (
        <div className="list-overflow0container">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
}