export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
  cart,
  onUpdateItemQuantity
}) {
  const productInCart = cart.items.find(item => item.id === id);
  const cartQuantity = productInCart ? productInCart.quantity : "";
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {cartQuantity==="" ?
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
           :
          <>
            <button onClick={() => onUpdateItemQuantity(id, -1)}>-</button>
            <span>{cartQuantity}</span>
            <button onClick={() => onUpdateItemQuantity(id, 1)}>+</button>
          </>
          }
        </p>
      </div>
    </article>
  );
}
