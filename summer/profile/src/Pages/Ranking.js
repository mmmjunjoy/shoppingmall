import React from "react";
import "../styles/ranking.css"

function Rankpage(){
    return(
       <main>
        <div className="Rankingmain">
            <div className="firstrankdiv">
                <div className="frd1">
                    Ranking Shop
                    
                </div>
                <div className="frd2">
                    
                    무신사 랭킹은 상품 매출, 판매 수량, 상품 조회 수, 작성 후기 수를 반영한 공식에 의해 선정됩니다.
                    <br></br>
                    무신사 스토어는 광고 목적으로 랭킹을 절대 임의 조작하지 않으므로 믿고 구매하셔도 됩니다.
                </div>
                
            </div>
            <div className="secondrankdiv">
                <div className="srd1">
                    무신사 랭킹을 알려드립니다.
                </div>
                <div className="srd2">
                    <button className="jasebutton">자세히 보기</button>

                </div>
             
            </div>
            <div className="thirdrankdiv">
                <div className="trd1">
                    <strong>기간 분류</strong>
                </div>
                <div className="trd2">
                    <button className="nolinebutton" >
                        실시간
                    </button>
                    <button className="nolinebutton" >
                        일간
                    </button>
                    <button className="nolinebutton" >
                        주간
                    </button>
                    <button className="nolinebutton" >
                        월간
                    </button>
                    <button className="nolinebutton" >
                        3개월
                    </button>
                    
                    

                </div>
             
            </div>
            <div className="detailimage">
                <img src ="/assets/balenciaga.jpg"/>

            </div>
            
        </div>
       </main>
    )
}

export default Rankpage;