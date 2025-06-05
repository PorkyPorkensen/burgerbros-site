export default function BurgMap({ burgers, addToCart }) {
  return (
    <div className="foodDiv">
      {burgers.map((burg) => (
        <div key={burg.id} className="itemDiv">
          <img src={burg.url} alt={`food-${burg.id}`} />
          <h3>{burg.name}</h3>
          <p>{burg.description}</p>
          <p className="price">Price: {burg.price}</p>
          <button onClick={() => addToCart(burg)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}