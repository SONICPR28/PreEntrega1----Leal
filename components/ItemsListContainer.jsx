import React from 'react';
import App from '../src/App.css'
import {data} from '../src/data'

export const ItemListContainer = () => {

    return( 
        <div className='conteiner-items'>
            {data.map(product => (
            <div className="item">
				    <figure>
					    <img src={product.img} alt={product.nameProduct} />
				</figure>
				<div className="info-product">
					<h2>{product.nameProduct}</h2>
					<p className="price">{product.price}</p>
					<button className="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>

            ))}
        </div>
    )
}

export default ItemListContainer