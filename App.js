import React from 'react';
import './App.css';

// This is your product card component
function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">${props.price}</p>
      <p className={props.inStock ? 'in-stock' : 'out-of-stock'}>
        {props.inStock ? '✅ In Stock' : '❌ Out of Stock'}
      </p>
    </div>
  );
}

// This is your main app
function App() {
  // Your 10 products - replace with real image URLs
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
      price: 99.99,
      inStock: true
    },
    {
      id: 2,
      name: "Smartphone", 
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
      price: 699.99,
      inStock: false
    },
    {
      id: 3,
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200", 
      price: 999.99,
      inStock: true
    },
    {
      id: 4,
      name: "Coffee Mug",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200",
      price: 12.99,
      inStock: true
    },
    {
      id: 5,
      name: "Water Bottle",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=200",
      price: 24.99,
      inStock: true
    },
    {
      id: 6,
      name: "Backpack",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
      price: 49.99,
      inStock: false
    },
    {
      id: 7,
      name: "Desk Lamp",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200",
      price: 34.99,
      inStock: true
    },
    {
      id: 8,
      name: "Notebook",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200",
      price: 8.99,
      inStock: true
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200",
      price: 79.99,
      inStock: false
    },
    {
      id: 10,
      name: "Phone Case",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=200",
      price: 19.99,
      inStock: true
    }
  ];

  return (
    <div className="App">
      <h1>My Product Store</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;