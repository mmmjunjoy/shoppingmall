import {Route , Switch , Redirect} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import { CLIENT_LONG_PASSWORD } from "mysql/lib/protocol/constants/client";
import MainHeader from "./Components/MainHeaders";
import Footer from "./Components/Footer";
import ProductDetail from "./Pages/ProductDetail";

import "./App.css"

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <main>
        <Switch>
          <Route path ="/" exact>
            <Redirect to ="/productdetail"/>
          </Route>
          <Route path="/welcome" exact>
            <Welcome/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          <Route path = "/products/:productIds">
            <ProductDetail/>
          </Route>
          <Route path="/welcome/:word" >
            <Welcome/>
          </Route>
                    

        </Switch>
        
      </main>
      <Footer/>

    </div>
  );
}
// import React,{useEffect, useState} from "react";
// function Counter(props){
// 	const [count,setCount] = useState(0);
//   useEffect(()=> {
//     document.title=`총 ${count}번 클릭했습니다`
//   },[])  
//     return(
//     	<div>
//         	<p> 총 {count}번 클릭 </p>
//             <button onClick = {() => setCount(count+1)}>클릭</button>
//         </div>
//     )
// }
export default App;
