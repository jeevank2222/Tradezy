import React, { useState } from "react";
import "./MutualFundShowcase.css";

const getLogo = (domain) => {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};

const funds = [
    {
        id: 1,
        name: "SBI Bluechip Fund",
        category: "Large Cap",
        risk: "Moderate Risk",
        return: "18.42%",
        daily: "+0.55%",
        logo: getLogo("sbimf.com"),
        position: "fund-1"
    },

    {
        id: 2,
        name: "HDFC Flexi Cap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "16.83%",
        daily: "+0.47%",
        logo: getLogo("hdfcfund.com"),
        position: "fund-2"
    },

    {
        id: 3,
        name: "Parag Parikh Flexi Cap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "18.42%",
        daily: "+0.55%",
        logo: getLogo("amc.ppfas.com"),
        position: "fund-3"
    },

    {
        id: 4,
        name: "Axis Bluechip Fund",
        category: "Large Cap",
        risk: "Moderate Risk",
        return: "15.74%",
        daily: "+0.41%",
        logo: getLogo("axismf.com"),
        position: "fund-4"
    },

    {
        id: 5,
        name: "Mirae Asset Large Cap Fund",
        category: "Large Cap",
        risk: "Moderate Risk",
        return: "17.92%",
        daily: "+0.58%",
        logo: getLogo("miraeassetmf.co.in"),
        position: "fund-5"
    },

    {
        id: 6,
        name: "ICICI Prudential Bluechip Fund",
        category: "Large Cap",
        risk: "Moderate Risk",
        return: "15.74%",
        daily: "+0.41%",
        logo: getLogo("icicipruamc.com"),
        position: "fund-6"
    },

    {
        id: 7,
        name: "Kotak Flexicap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "19.28%",
        daily: "+0.52%",
        logo: getLogo("kotakmf.com"),
        position: "fund-7"
    },

    {
        id: 8,
        name: "Nippon India Growth Fund",
        category: "Mid Cap",
        risk: "High Risk",
        return: "23.62%",
        daily: "+0.71%",
        logo: getLogo("nipponindiamf.com"),
        position: "fund-8"
    },

    {
        id: 9,
        name: "HDFC Mid-Cap Opportunities Fund",
        category: "Mid Cap",
        risk: "High Risk",
        return: "20.31%",
        daily: "+0.61%",
        logo: getLogo("hdfcfund.com"),
        position: "fund-9"
    },

    {
        id: 10,
        name: "SBI Small Cap Fund",
        category: "Small Cap",
        risk: "High Risk",
        return: "22.14%",
        daily: "+0.63%",
        logo: getLogo("sbimf.com"),
        position: "fund-10"
    },

    {
        id: 11,
        name: "Quant Small Cap Fund",
        category: "Small Cap",
        risk: "High Risk",
        return: "24.31%",
        daily: "+0.82%",
        logo: getLogo("quantmutual.com"),
        position: "fund-11"
    },

    {
        id: 12,
        name: "Axis Small Cap Fund",
        category: "Small Cap",
        risk: "High Risk",
        return: "21.45%",
        daily: "+0.68%",
        logo: getLogo("axismf.com"),
        position: "fund-12"
    },

    {
        id: 13,
        name: "UTI Nifty 50 Index Fund",
        category: "Index",
        risk: "Moderate Risk",
        return: "13.84%",
        daily: "+0.29%",
        logo: getLogo("utiamc.com"),
        position: "fund-13"
    },

    {
        id: 14,
        name: "Canara Robeco Bluechip Fund",
        category: "Large Cap",
        risk: "Moderate Risk",
        return: "16.42%",
        daily: "+0.45%",
        logo: getLogo("canararobeco.com"),
        position: "fund-14"
    },

    {
        id: 15,
        name: "Tata Digital India Fund",
        category: "Sectoral",
        risk: "High Risk",
        return: "21.36%",
        daily: "+0.77%",
        logo: getLogo("tatamutualfund.com"),
        position: "fund-15"
    },

    {
        id: 16,
        name: "Motilal Oswal Nasdaq 100 Fund",
        category: "International",
        risk: "High Risk",
        return: "20.84%",
        daily: "+0.69%",
        logo: getLogo("motilaloswalmf.com"),
        position: "fund-16"
    },

    {
        id: 17,
        name: "Aditya Birla Sun Life Flexi Cap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "16.91%",
        daily: "+0.44%",
        logo: getLogo("adityabirlacapital.com"),
        position: "fund-17"
    },

    {
        id: 18,
        name: "DSP Flexi Cap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "17.24%",
        daily: "+0.46%",
        logo: getLogo("dspim.com"),
        position: "fund-18"
    },

    {
        id: 19,
        name: "Franklin India Flexi Cap Fund",
        category: "Flexi Cap",
        risk: "Moderate Risk",
        return: "14.97%",
        daily: "+0.34%",
        logo: getLogo("franklintempletonindia.com"),
        position: "fund-19"
    },

    {
        id: 20,
        name: "Navi Nifty 50 Index Fund",
        category: "Index",
        risk: "Moderate Risk",
        return: "14.28%",
        daily: "+0.32%",
        logo: getLogo("navi.com"),
        position: "fund-20"
    }
];

function MutualFundShowcase() {

    const [selectedFund, setSelectedFund] = useState(funds[0]);

    return (

        <section className="mf-showcase-section">

            {/* HEADING */}


            {/* SHOWCASE */}

            <div className="mf-showcase">

                {/* GRID BACKGROUND */}

                <div className="mf-grid-background"></div>


                {/* FUND TILES */}

                {funds.map((fund) => (

                    <div
                        key={fund.id}
                        className={`mf-floating-card ${fund.position}`}
                        onMouseEnter={() => setSelectedFund(fund)}
                    >

                        <div className="mf-logo-container">

                            <img
                                src={fund.logo}
                                alt={fund.name}
                                className="mf-logo-image"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://www.google.com/s2/favicons?domain=www.amfiindia.com&sz=128";
                                }}
                            />

                        </div>

                        <p className="mf-small-name">
                            {fund.name}
                        </p>

                    </div>

                ))}


                {/* MAIN CARD */}

                <div className="mf-main-card">

                    {/* FUND HEADER */}

                    <div className="mf-main-header">

                        <div className="mf-main-logo">

                            <img
                                src={selectedFund.logo}
                                alt={selectedFund.name}
                            />

                        </div>

                        <div>

                            <h3>
                                {selectedFund.name}
                            </h3>

                            <p>
                                {selectedFund.risk}
                                <span> · </span>
                                {selectedFund.category}
                                <span> · Equity</span>
                            </p>

                        </div>

                    </div>


                    {/* RETURN */}

                    <div className="mf-return">

                        <strong>
                            {selectedFund.return}
                        </strong>

                        <span>
                            3Y annualised
                        </span>

                    </div>


                    {/* DAILY CHANGE */}

                    <div className="mf-daily">

                        <strong>
                            {selectedFund.daily}
                        </strong>

                        <span>
                            1D
                        </span>

                    </div>


                    {/* CHART */}

                    <div className="mf-chart">

                        <svg
                            viewBox="0 0 400 190"
                            preserveAspectRatio="none"
                        >

                            <path
                                className="mf-chart-line"
                                d="
                                M0 150
                                C10 145 15 155 25 148
                                S40 160 50 150
                                S65 140 75 148
                                S90 158 100 145
                                S115 150 125 132
                                S140 143 150 125
                                S165 130 175 112
                                S190 120 200 105
                                S215 110 225 94
                                S240 102 250 84
                                S265 92 275 76
                                S290 84 300 65
                                S315 72 325 53
                                S340 63 350 39
                                S365 50 375 28
                                S390 35 400 15
                                "
                            />

                        </svg>

                    </div>


                    {/* PERIODS */}

                    <div className="mf-periods">

                        <span>1M</span>

                        <span>6M</span>

                        <span>1Y</span>

                        <span className="selected-period">
                            3Y
                        </span>

                        <span>5Y</span>

                        <span>All</span>

                    </div>


                    {/* BUTTONS */}

                    <div className="mf-actions">

                        <button>
                            One-time
                        </button>

                        <button className="mf-sip-button">
                            Start SIP
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default MutualFundShowcase;