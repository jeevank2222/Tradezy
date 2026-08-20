import "./Explore.css";
import StockCard from "./StockCard";
import { stocks } from "./stockData";

function Explore() {
    return (
        <div className="explore">

            <h1>Explore Stocks</h1>

            <div className="stock-grid">

                {stocks.map((stock) => (
                    <StockCard
                        key={stock.symbol}
                        stock={stock}
                    />
                ))}

            </div>

        </div>
    );
}

export default Explore;