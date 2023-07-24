import { useParams ,Link } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productIds);
    return(
        <section>
            <h1>Product Detail</h1>
            
            <p>{params.productIds}</p>
        </section>
    );
};

export default ProductDetail;