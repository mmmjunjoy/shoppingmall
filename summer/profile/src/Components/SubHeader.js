import {NavLink ,Link } from "react-router-dom"
import "../styles/subheader.css"
import React , {useState} from "react";

const SubHeader = () => {
    function handlelogin(e){
        window.location.href = "/login"

    }
    return(
        <header >
            <nav className="subnav">
                <ul > 
                    <div className="subs">
                        <div className="loginclicks" >
                        
                                <h2 ><button className="loginbutton" onClick={handlelogin}>로그인</button></h2>
                                
                        </div>
                        
                        
                        <div className="sublink" >
                            <NavLink  className="subborder" to = "/welcome">바로접속on</NavLink>
                            <NavLink   className="subborder" to = "/products">마이페이지</NavLink>
                            <NavLink   className="subborder" to = "/ranking">최근 본 상품</NavLink>
                            <NavLink   className="subborder" to = "/update">좋아요</NavLink>
                            <NavLink   className="subborder" to = "/codi">장바구니</NavLink>
                            <NavLink   className="subborder" to = "/sale">주문배송조회</NavLink>
                            <NavLink   className="subborder" to = "/special">고객센터</NavLink>

                        </div>

                    </div>
                       
                       
                    
                </ul>
            </nav>
        </header>
    );

    
}

export default SubHeader;