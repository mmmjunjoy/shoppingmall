import React from "react";
import {Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

function Sidebar(){
    const menus = [
        {name:"인기" ,path :"/"},
        {name:"상의", path :"/members"},
        {name: "아우터" ,path: "/cashes"}
    ];

    return(
        <div>
            {menus.map((menu,index)=>{
                return(
                    <Link to ={menu.path} key ={index}>
                        <SidebarItem
                            menu = {menu}/>
                    </Link>
                )
            })}
        </div>
    )
}
export default Sidebar;