import React from "react";
import { useParams } from "react-router-dom";
import { stocks } from "../Explore/stockData";

function StockDetails() {

    const { symbol } = useParams();

    const stock = stocks.find(
        (item) => item.symbol === symbol
    );
    console.log(stock)

    return (
        <div>
            <img src={stock.logo} alt={stock.name} />
            <h5>{stock.name}</h5>
            <p> ₹{stock.price}  {" "} ({stock.change}%)</p>
        </div>
    );
}

export default StockDetails;