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
             
            </div>
            
        </div>
       </main>
    )
}

export default Rankpage;