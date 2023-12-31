import {Route , Switch , Redirect} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import { CLIENT_LONG_PASSWORD } from "mysql/lib/protocol/constants/client";
import MainHeader from "./Components/MainHeaders";
import Footer from "./Components/Footer";
import ProductDetail from "./Pages/ProductDetail";
import Sidebar from "./Components/Sidebar";
import "./App.css"
import SubHeader from "./Components/SubHeader";
import Rankpage from "./Pages/Ranking";
import Login from "./Pages/login";

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <SubHeader/>
      <div className="sidebars">
        <Sidebar/>

      </div>
     

      <main className="center">
        <Switch>
          <Route path ="/" exact>
            <Redirect to ="/welcome"/>
          </Route>
          <Route path="/welcome" exact>
            <Welcome/>
          </Route>
          <Route path="/welcome/:word" >
            <Welcome/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          <Route path = "/products/:productIds">
            <ProductDetail/>
          </Route>
          <Route path ="/ranking">
            <Rankpage/>
          </Route>
          <Route path ="/login">
            <Login/>
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
