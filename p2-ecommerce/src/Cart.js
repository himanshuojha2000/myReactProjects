import React from "react";

function Cart({ cartItems, removeFromCart }) {
    // Fix: Corrected variable name `items` to `item`
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", color: "#333" }}>🛍️ Shopping Cart</h2>
            <div style={{ textAlign: "right", marginTop: "15px", fontSize: "18px", fontWeight: "bold", color: "#27ae60" }}>
                        Total: ₹{total}
                    </div>
            {cartItems.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "16px", color: "#888" }}>Your Cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                border: "1px solid #ddd", 
                                padding: "10px", 
                                margin: "5px 0", 
                                borderRadius: "5px", 
                                display: "flex", 
                                justifyContent: "space-between", 
                                alignItems: "center"
                            }}
                        >
                            <h4 style={{ margin: 0 }}>{item.name}</h4>
                            <p style={{ margin: 0, fontWeight: "bold", color: "#2c3e50" }}>₹{item.price}</p>
                            <button 
                                onClick={() => removeFromCart(index)} 
                                style={{
                                    padding: "5px 10px",
                                    background: "#e74c3c",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    transition: "0.2s ease-in-out"
                                }}
                                onMouseOver={(e) => e.target.style.background = "#c0392b"}
                                onMouseOut={(e) => e.target.style.background = "#e74c3c"}
                            >
                                ❌ Remove
                            </button>
                        </div>
                    ))}

                
                   
                </>
            )}
        </div>
    );
}

export default Cart;