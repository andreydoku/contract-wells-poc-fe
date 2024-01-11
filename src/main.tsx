import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './routes/Home/Home';
import NavBar from './NavBar/NavBar';
import Products from './routes/Products/Products';
import About from './routes/About/About';
import Error from './routes/Error/Error';

import './index.scss'
import Product from './routes/Product/Product';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<NavBar />
			
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<Product />} />
					
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
				
		</Router>
	</React.StrictMode>,
)
