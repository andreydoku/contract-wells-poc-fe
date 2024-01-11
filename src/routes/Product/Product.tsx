import { useParams } from "react-router-dom";
import "./Product.scss";



export default function Product() {
	
	const { id } = useParams();
	
	const product = getProductById( id );
	if( !product ){
		return(
			<div>
				<h2>Product not found</h2>
			</div>
		);
	}
	
	return (
		<div className="product">
			
			<div className="left">
				<img src={product.image} className="product-image" alt="fuck the visually impaired" />
			</div>
			<div className="right">
				<h1>{product.title}</h1>
				<h2>{product.price}</h2>
			</div>
			
			
		</div>
		
	)
}


const products = [
	{
		title: "GMMK 2 Black",
		id: "gmmk-2-black",
		price: "$9.99",
		image: "https://cdn.shopify.com/s/files/1/0549/2681/products/cfg-glorious_gmmk_2_configurator_prebuilt_ansi_black_96.png?v=1647052107"
	},
	{
		title: "GMMK 2 White",
		id: "gmmk-2-white",
		price: "$9.99",
		image: "https://cdn.shopify.com/s/files/1/0549/2681/products/cfg-glorious_gmmk_2_configurator_prebuilt_ansi_white_96.png?v=1647052084"
	},
	{
		title: "GMMK 2 Pink",
		id: "gmmk-2-pink",
		price: "$9.99",
		image: "https://www.gloriousgaming.com/cdn/shop/t/164/assets/glorious_keyboards_gmmk_2_pinkv3_96_ansi_2x.webp"
	},
]
function getProductById( id:string|undefined ){
	
	if( !id ){
		return undefined;
	}

	return products.find( p => p.id == id );
}
export function getAllProducts(){
	return products;
}
