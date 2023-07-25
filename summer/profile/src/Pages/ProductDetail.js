import { Route,useParams ,Link } from "react-router-dom";
import Comment from "./comments";



const ProductDetail = () => {
    const params = useParams();
    console.log(params.productIds);
    return(
       
        <section>
           
            <h1>Product Detail</h1>
            
            <p>{params.productIds}</p>
            <Route path ={`/products/${params.productIds}/comments`}>
                <Comment/>
            </Route>
        </section>
    );
};

export default ProductDetail;