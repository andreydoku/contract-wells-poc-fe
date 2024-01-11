import { useEffect, useState } from "react";
import { getAllProducts } from "../Product/Product";
import "./Products.scss";
import { Link } from "react-router-dom";

export default function Products() {
	
	const [products, setProducts] = useState<any>([]);
	
	useEffect(() => {
		
		const ps = getAllProducts();
		setProducts(ps);
	 
	}, [] );
	
	
	
	return (
		<div className="home">
			<h1>Products</h1>
			
			{ products.map( (product:any) => 
				<div>
					<Link to={`/products/${product.id}`} >{product.title}</Link>
				</div>
			)}
			
		</div>
		
	)
}


