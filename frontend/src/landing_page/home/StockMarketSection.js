import React from "react";
import "./StockMarketSection.css";

const stocks = [
    {
        id: 1,
        name: "Reliance Industries",
        symbol: "RELIANCE",
        price: "1,421.50",
        change: "+1.24%",
        positive: true,
        position: "card-1",
        chart: "up"
    },
    {
        id: 2,
        name: "Tata Motors",
        symbol: "TATAMOTORS",
        price: "734.25",
        change: "-1.12%",
        positive: false,
        position: "card-2",
        chart: "down"
    },
    {
        id: 3,
        name: "Infosys",
        symbol: "INFY",
        price: "1,892.60",
        change: "+1.33%",
        positive: true,
        position: "card-3",
        chart: "up"
    },
    {
        id: 4,
        name: "HDFC Bank",
        symbol: "HDFCBANK",
        price: "1,684.30",
        change: "+0.74%",
        positive: true,
        position: "card-4",
        chart: "up"
    },
    {
        id: 5,
        name: "ITC",
        symbol: "ITC",
        price: "412.80",
        change: "-0.58%",
        positive: false,
        position: "card-5",
        chart: "down"
    },
    {
        id: 6,
        name: "TCS",
        symbol: "TCS",
        price: "3,241.20",
        change: "+0.91%",
        positive: true,
        position: "card-6",
        chart: "up"
    },
    {
        id: 7,
        name: "SBI",
        symbol: "SBIN",
        price: "812.40",
        change: "-0.64%",
        positive: false,
        position: "card-7",
        chart: "down"
    },
    {
        id: 8,
        name: "Axis Bank",
        symbol: "AXISBANK",
        price: "1,184.75",
        change: "-0.42%",
        positive: false,
        position: "card-8",
        chart: "down"
    }
];

function StockCard({ stock }) {
    return (
        <div className={`floating-stock-card ${stock.position}`}>

            <div className="stock-card-header">

                <div className="company-logo">
                    {stock.symbol.charAt(0)}
                </div>

                <div className="company-details">
                    <h4>{stock.name}</h4>
                    <span>{stock.symbol}</span>
                </div>

            </div>


            <div className="stock-card-price">
                ₹{stock.price}
            </div>


            <div
                className={`stock-card-change ${
                    stock.positive
                        ? "stock-positive"
                        : "stock-negative"
                }`}
            >
                {stock.change}
            </div>


            <div className="mini-chart">

                <svg
                    viewBox="0 0 220 70"
                    preserveAspectRatio="none"
                >

                    <path
                        className={
                            stock.positive
                                ? "chart-line positive-line"
                                : "chart-line negative-line"
                        }
                        d={
                            stock.chart === "up"
                                ? "M0 55 C15 48 20 60 35 45 S55 50 70 35 S90 45 105 30 S125 38 140 25 S160 32 175 18 S195 25 220 8"
                                : "M0 15 C15 22 20 10 35 28 S55 20 70 38 S90 30 105 45 S125 38 140 52 S160 42 175 58 S195 50 220 65"
                        }
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                </svg>

            </div>

        </div>
    );
}


function StockMarketSection() {

    return (

        <section className="stock-market-section">

            <div className="stock-market-content">

                <h2>
                    India’s stock market
                    <br />
                    at your fingertips
                </h2>

                <p>
                    Invest in stocks you believe in and build
                    your portfolio with Tradezy.
                </p>

                <button className="stock-market-button">
                    Explore Stocks
                </button>

            </div>


            {stocks.map((stock) => (

                <StockCard
                    key={stock.id}
                    stock={stock}
                />

            ))}

        </section>

    );
}


export default StockMarketSection;