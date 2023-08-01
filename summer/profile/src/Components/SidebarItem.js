import React from "react";
import "../styles/side.css"

function SidebarItem({menux}){
    return(
        <div className="side">
            <li>{menux.name}</li>
        </div>
    )
}

export default SidebarItem;