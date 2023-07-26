

import React ,{useState ,useEffect ,createContext} from "react";
import {Route ,useParams} from "react-router-dom";

import axios from "axios";


//params.word는 여기서 쓸 수 있는 사용자의 값인거 같다.


const Welcome = () => {
 
    const [searchData,setSearchData] = useState([]);
   
    useEffect(() => {
      async function fetchData() {
        const result = await axios.get(
          "/dummy/fashion.json");
          console.log(result.data)
          setSearchData(result.data)
          console.log("searchdata" ,searchData)
          
      }
      fetchData();
    },[])
    //params해결중
    const {word} = useParams();
  


    console.log("params" , word)
    
  
    //여기까지

    const fil = searchData.filter((searchData) => searchData.brandname.includes(word))
    

   
    return (
      <div >
        <section>
          
        
          <h1>The Welcome page</h1>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>Sale season</h2>
          <h2>{word}</h2>
          {searchData.map((product) => {
            
            return(
              <div>
                productid = {product.deep}
              </div>
            )
          })}

         {searchData.map((list) => <li key ={list.idx}>
          {list.brandname}
         </li>)}

         {/* filter 화면 */}

         {fil.map((fils)=><li key = {fils.idx}>
          {fils.idx}
          {fils.brandname}
          {fils.deep}
          {fils.price}
          
         </li>)}

         {/* params사용 */}
         

      
        
          
      
          {/* <Route path ="/welcome/new-user">
            <p>Welcome. new user!</p>
          </Route> */}
        </section>
  
      </div>
    );
   
    
 
  }

export default Welcome;