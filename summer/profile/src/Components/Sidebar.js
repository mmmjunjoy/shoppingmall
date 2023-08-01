import React from "react";
import {NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../styles/side.css"

function Sidebar(){
    const menus = [
        {name:"인기" ,path :"/"},
        {name:"상의", path :"/members"},
        {name: "아우터" ,path: "/cashes"}
    ];

    return(
        <div className="Side">
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            <p>품목 , 브랜드</p>
            
     
            {menus.map((menu,index)=>{
                return(
                    <NavLink to ={menu.path} key ={index}>
                        <SidebarItem
                            menux = {menu}/>
                    </NavLink>
                )
            })}
        </div>
    )
}
export default Sidebar;