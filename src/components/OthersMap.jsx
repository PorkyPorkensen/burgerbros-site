export default function OthersMap({ others, addToCart }) {
  return (
    <div className="foodDiv">
      {others.map((item) => (
        <div key={item.id} className="itemDiv">
          <img src={item.url} alt={`food-${item.id}`} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">Price: {item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}