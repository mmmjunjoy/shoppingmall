import React, { useEffect, useState } from "react";
import "../styles/itemcompstyle.css"
import axios from "axios";

const Itemcomp = () => {

    const [Listdata,setListdata] = useState([]);

    useEffect(()=>{
        async function listproduct(){
            const listresult = await axios.get(
                "/dummy/fashion.json");
                console.log(listresult.data)
                setListdata(listresult.data)
                console.log("listproduct",Listdata)
        }
        listproduct();

    },[])

    




}
// function Itemcomp(){
//     return(
//         <div>
//             <div className="itembox">
//                 <div className="iteminnerbox">
//                     <img className="itemimg" src ="/assets/balenciaga.jpg"/>
//                     발렌시아가
//                     <br>
//                     </br>
//                     롱부츠
//                     <br>
//                     </br>
//                     350,000원
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Itemcomp;