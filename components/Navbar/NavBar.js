"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Fuse from "fuse.js";

export default function NavBar() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  //find user on every reload
  useEffect(() => {
    const number = localStorage.getItem("number");
    if (number) {
      fetch("/api/findUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.user) {
            setUser(data.user);
          }
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  // fetch products function from api
  const fetchProducts = async () => {
    if (!user?.number) return;

    try {
      const res = await fetch("/api/getProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: user.number }),
      });

      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        console.error("Failed to fetch products:", data.error);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // refresh products each time user click on search for latest content
  const handleSearchFocus = () => {
    if (user?.number) fetchProducts();
  };

  // search function with fuse.js
  const options = {
    keys: ['name'],
    includeScore: true,
    threshold: 0.4,
  };

  // Convert products object to array safely (fuse will search from this array)
  const productsArray = products
    ? Object.keys(products).map((key) => ({
      name: key,
      ...products[key],
    }))
    : [];

  const fuse = productsArray.length ? new Fuse(productsArray, options) : null;

  const results = searchQuery && fuse
    ? fuse.search(searchQuery, { limit: 3 })
    : [];

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.login}>
        <h1>
          {user ? (
            <>{user.name}</>
          ) : (
            <a href="/login">Login</a>
          )}
        </h1>
      </div>
      <input
        className={styles.search}
        type='text'
        placeholder='Find Product...'
        value={searchQuery}
        onChange={handleInputChange}
        onClick={handleSearchFocus}  // run the function every time the search bar clicked
      />
      {results.length > 0 && (
        <div className={styles.resultsContainer}>
          {results.length > 0 && (
            <div className={styles.results}>
              {/* Header */}
              <div className={styles.resultsHeader}>
                <span className="name">Product Name</span>
                <span className="stock">Stock</span>
                <span className="price">Price</span>
              </div>

              {/* Results */}
              {results.map((result, index) => {
                const product = result.item;
                return (
                  <div key={index} className={styles.resultItem}>
                    <span className="name">{product.name}</span>
                    <span className="stock">{product.stock ?? '-'}</span>
                    <span className="price">{product.price ?? '-'}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </nav >
  );
}
