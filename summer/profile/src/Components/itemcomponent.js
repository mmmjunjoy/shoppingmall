import React from "react";
import "../styles/itemcompstyle.css"

function Itemcomp(){
    return(
        <div>
            <div className="itembox">
                <img className="itemimg" src ="/assets/balenciaga.jpg"/>
                <br>
                </br>
                <div className="iteminfo">
                    발렌시아가
                    <br>
                    </br>
                    롱부츠
                    <br>
                    </br>
                    350,000원
                </div>
            </div>
        </div>
    )
}

export default Itemcomp;