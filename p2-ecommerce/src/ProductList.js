import React, { useState } from "react";
import Cart from "./Cart.js";

console.log("ProductList is rendering");

const products = [
    { id: 1, name: "MacBook M1", price: 80000, category: "Laptops", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbT6Zn_8S2lQQKxX8YeTPt4UGgMD9yy9dEA&s" },
    { id: 2, name: "Lenovo Legion", price: 120000, category: "Laptops", image: "https://news.lenovo.com/wp-content/uploads/2024/01/13a_Legion_9i_Closeup_Port-1024x768.jpg" },
    { id: 3, name: "Dell XPS 13", price: 140000, category: "Laptops", image: "https://www.notebookcheck.net/fileadmin/Notebooks/Dell/XPS_13_9340_Core_Ultra_7/IMG_4090.JPG" },
    { id: 4, name: "HP Spectre x360", price: 155000, category: "Laptops", image: "https://techstore.co.in/cdn/shop/articles/Hp-Spectre-07.jpg?v=1487510918" },
    { id: 5, name: "Asus ROG Zephyrus G14", price: 135000, category: "Laptops", image: "https://www.cnet.com/a/img/resize/69c350f19a0bd245ab8f60a98e456fa9dc67ee42/hub/2024/02/05/e716f8f8-a7a4-418c-9b14-0b210d9dfc72/asus-rog-zephyrus-g14-2024-5409.jpg?auto=webp&fit=crop&height=1200&width=1200" },
    { id: 6, name: "Acer Predator Helios 300", price: 125000, category: "Laptops", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThux0Sjt0czR3tDgxgEM1vVpTkRUleG6bw0A&s" },
    { id: 7, name: "Boat Rockerz 550", price: 2000, category: "Earphones", image: "https://www.boat-lifestyle.com/cdn/shop/products/R550ergonomicdesign_e046c0e1-88cb-4a5b-aa08-74785bd8c4b4_1500x.jpg?v=1659339569" },
    { id: 8, name: "Sony WH-1000XM4", price: 25000, category: "Earphones", image: "https://sm.mashable.com/mashable_in/photo/default/sony-wh-1000xm4_qjn8.jpg" },
    { id: 9, name: "JBL Tune 760NC", price: 7500, category: "Earphones", image: "https://rukminim2.flixcart.com/image/850/1000/kz4gh3k0/headphone/g/n/w/-original-imagb7g9tnh2segu.jpeg?q=90&crop=false" },
    { id: 10, name: "Samsung Galaxy Buds Pro", price: 12000, category: "Earphones", image: "https://fdn.gsmarena.com/imgroot/news/21/02/samsung-galaxy-buds-pro-review/-1200w5/gsmarena_002.jpg" },
    { id: 11, name: "Apple AirPods Pro", price: 22000, category: "Earphones", image: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg" },
    { id: 12, name: "Sennheiser Momentum 4", price: 35000, category: "Earphones", image: "https://cdn.uc.assets.prezly.com/a82547cc-f939-4fa1-8a1b-bdf42614c2e5/M4_PRIDE_BTF_Module_3.jpg" },
    { id: 13, name: "Mi Power Bank 20000mAh", price: 2500, category: "PowerBank", image: "https://rukminim2.flixcart.com/image/850/1000/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7cutvhngq.jpeg?q=90&crop=false" },
    { id: 14, name: "IPhone 16 Pro Max ", price: 180000, category: "Mobile", image: "https://static.businessworld.in/IMG_0141_20240928093534_original_image_21.webp" },
    { id: 15, name: "Samsung S25 Ultra", price: 165000, category: "Mobile", image: "https://i.ytimg.com/vi/_ah1vaiUZMM/maxresdefault.jpg" },
    { id: 16, name: "Samsung Z Flip", price: 95000, category: "Mobile", image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/11/full/1720673441-3774.jpg?im=FeatureCrop,size=(826,465)" },
    { id: 17, name: "Samsung Z Fold 6", price: 105000, category: "Mobile", image: "https://sm.ign.com/ign_pk/review/s/samsung-ga/samsung-galaxy-z-fold-6-review_b27m.jpg" },
    { id: 18, name: "Moto Razor 50", price: 70500, category: "Mobile", image: "https://motorolaimgrepo.vtexassets.com/arquivos/razr-50-design-cover-orange-design-m-c9rhwui9.jpg" }
];

function ProductList() {
    const [category, setCategory] = useState("All");
    const [cart, setCart] = useState([]);

    const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <div style={{ maxWidth: "1000px", margin: "auto", padding: "20px" }}>
            <h2 style={{ textAlign: "center", color: "#333" }}>🛒 Product List</h2>

            <select 
                onChange={(e) => setCategory(e.target.value)} 
                style={{ padding: "10px", marginBottom: "20px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ddd" }}
            >
                <option value="All">All Categories</option>
                <option value="Laptops">Laptops</option>
                <option value="Earphones">Earphones</option>
                <option value="PowerBank">Power Bank</option>
                <option value="Mobile">Mobile</option>
            </select>

            <div 
                style={{
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", 
                    gap: "20px"
                }}
            >
                {filteredProducts.map((product) => (
                    <div 
                        key={product.id} 
                        style={{
                            border: "1px solid #ddd", 
                            borderRadius: "10px", 
                            padding: "15px", 
                            textAlign: "center", 
                            backgroundColor: "#f9f9f9",
                            transition: "0.3s ease-in-out",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: "200px", 
                                height: "200px", 
                                objectFit: "cover", 
                                borderRadius: "10px", 
                                marginBottom: "10px"  }} 
                        />
                        <h4 style={{ marginBottom: "8px" }}>{product.name}</h4>
                        <p style={{ fontWeight: "bold", color: "#2c3e50" }}>₹{product.price}</p>
                        <button 
                            onClick={() => addToCart(product)}
                            style={{
                                padding: "8px 15px", 
                                background: "#27ae60", 
                                color: "white", 
                                border: "none", 
                                cursor: "pointer", 
                                borderRadius: "5px",
                                transition: "0.2s ease-in-out"
                            }}
                            onMouseOver={(e) => e.target.style.background = "#218c54"}
                            onMouseOut={(e) => e.target.style.background = "#27ae60"}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </div>
    );
}

export default ProductList;