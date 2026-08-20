function StockCard({ stock }) {
    return (
        <div className="stock-card">

            <img
                src={stock.logo}
                alt={stock.name}
                className="stock-logo"
            />

            <h3>{stock.name}</h3>

            <p className="stock-price">
                ₹{stock.price.toFixed(2)}
            </p>

            <p className={stock.change >= 0 ? "profit" : "loss"}>
                {stock.change >= 0 ? "+" : ""}
                {stock.change}%
            </p>

        </div>
    );
}

export default StockCard;