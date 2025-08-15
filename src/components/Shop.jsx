import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop({ onAddItemToCart ,cart,onUpdateItemQuantity}) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} cart={cart} onUpdateItemQuantity={onUpdateItemQuantity}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
