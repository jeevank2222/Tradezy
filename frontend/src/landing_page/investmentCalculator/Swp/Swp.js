import React,{useState} from 'react';
import "./Swp.css"

function Swp() {
        const [investment, setInvestment] = useState(1000000);
    const [withdrawal, setWithdrawal] = useState(10000);
    const [returnRate, setReturnRate] = useState(12);
    const [years, setYears] = useState(10);

    const months = years * 12;

    const monthlyRate = Math.pow(1 + returnRate / 100, 1 / 12) - 1;

    let balance = investment;

    for (let i = 0; i < months; i++) {
        balance = balance * (1 + monthlyRate);
        balance = balance - withdrawal;

        if (balance < 0) {
            balance = 0;
            break;
        }
    }

    const finalValue = balance;

    const totalWithdrawal = Math.min(
        investment + (investment * returnRate / 100 * years),
        withdrawal * months
    );

    const formatAmount = (amount) => {
        if (amount >= 10000000) {
            return `₹${(amount / 10000000).toFixed(2)} Cr`;
        }

        if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(2)} L`;
        }

        return `₹${amount.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        })}`;
    };

    return (
        <>

            <div className="swp-page">
                <div className="swp-calc-header">
                    <h1>SWP Calculator</h1>
                    <p>Calculate the potential returns from your systematic withdrawal plan</p>
                </div>

                <div className="swp-calc-container">
                    <div className="swp-calc-inputs">
                        <div className="swp-calc-input">
                            <div className="swp-calc-label">
                                <label>Total Investment</label>
                                <span>₹{investment.toLocaleString("en-IN")}</span>
                            </div>

                            <input
                                type="range"
                                min="50000"
                                max="10000000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                            />

                            <div className="swp-calc-range">
                                <span>₹50,000</span>
                                <span>₹1 Cr</span>
                            </div>
                        </div>

                        <div className="swp-calc-input">
                            <div className="swp-calc-label">
                                <label>Monthly Withdrawal</label>
                                <span>₹{withdrawal.toLocaleString("en-IN")}</span>
                            </div>

                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                value={withdrawal}
                                onChange={(e) => setWithdrawal(Number(e.target.value))}
                            />

                            <div className="swp-calc-range">
                                <span>₹1,000</span>
                                <span>₹1,00,000</span>
                            </div>
                        </div>

                        <div className="swp-calc-input">
                            <div className="swp-calc-label">
                                <label>Expected Return Rate (p.a.)</label>
                                <span>{returnRate}%</span>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
                            />

                            <div className="swp-calc-range">
                                <span>1%</span>
                                <span>30%</span>
                            </div>
                        </div>

                        <div className="swp-calc-input">
                            <div className="swp-calc-label">
                                <label>Withdrawal Duration</label>
                                <span>{years} Years</span>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                            />

                            <div className="swp-calc-range">
                                <span>1 Year</span>
                                <span>40 Years</span>
                            </div>
                        </div>
                    </div>

                    <div className="swp-calc-result">
                        <div className="swp-calc-result-card">
                            <p>Estimated Final Value</p>
                            <h2>{formatAmount(finalValue)}</h2>

                            <div className="swp-calc-divider"></div>

                            <div className="swp-calc-row">
                                <span>Initial Investment</span>
                                <strong>{formatAmount(investment)}</strong>
                            </div>

                            <div className="swp-calc-row">
                                <span>Total Withdrawal</span>
                                <strong>{formatAmount(totalWithdrawal)}</strong>
                            </div>

                            <div className="swp-calc-row">
                                <span>Final Value</span>
                                <strong>{formatAmount(finalValue)}</strong>
                            </div>
                        </div>

                        <button className="swp-calc-button">
                            Start Investing
                        </button>
                    </div>
                </div>
            </div>

            <div class="swp-information">
                <section class="swp-section">
                    <h2>SWP Calculator – Systematic Withdrawal Plan Calculator</h2>
                    <p>A Systematic Withdrawal Plan (SWP) is a method of withdrawing a fixed amount of money from a mutual fund investment at regular intervals. It allows investors to invest a lump sum amount and withdraw a selected amount periodically while the remaining investment continues to stay invested.</p>
                    <p>For example, suppose you invest ₹1,00,000 in a mutual fund and choose to withdraw ₹10,000 every month. At each withdrawal, the required amount is deducted from your investment, while the remaining amount continues to remain invested and may generate returns based on market performance.</p>
                    <p>An SWP calculator helps you estimate how your investment may change over time based on your initial investment, withdrawal amount, withdrawal frequency, expected return, and investment duration.</p>
                </section>

                <section class="swp-section">
                    <h2>How Can an SWP Calculator Help You?</h2>
                    <p>An SWP calculator can make it easier to estimate regular withdrawals and understand how your investment may change throughout the selected period.</p>
                    <p>By entering the initial investment, withdrawal amount, expected annual return, and investment tenure, the calculator can estimate the total amount withdrawn, potential returns, and estimated balance remaining at the end of the period.</p>
                    <p>Since mutual fund returns are market-linked, the results generated by an SWP calculator are estimates and actual results may differ.</p>
                </section>

                <section class="swp-section">
                    <h2>How Does an SWP Calculator Work?</h2>
                    <p>An SWP calculator considers your initial lump sum investment, the amount you plan to withdraw regularly, the withdrawal frequency, expected rate of return, and investment duration.</p>
                    <p>For each withdrawal period, the investment may earn an assumed return and the selected withdrawal amount is then deducted from the investment balance.</p>

                    <div class="formula-box">
                        <div class="formula">
                            Closing Balance = Opening Balance + Estimated Return − Withdrawal
                        </div>
                    </div>

                    <p>The calculation is repeated for each withdrawal period to estimate how the investment balance may change over time.</p>
                </section>

                <section class="swp-section">
                    <h2>Example of a Systematic Withdrawal Plan</h2>
                    <p>Suppose an investor starts with a lump sum investment of ₹50,000 for a period of one year and chooses to withdraw ₹1,000 every month. Assume an expected annual return of 10%.</p>
                    <p>The following example illustrates how the investment balance may change after each monthly withdrawal. The values are illustrative and are intended only to explain how an SWP works.</p>

                    <div class="swp-table">
                        <div class="swp-table-header">
                            <div>Month</div>
                            <div>Opening Balance</div>
                            <div>Withdrawal</div>
                            <div>Estimated Return</div>
                            <div>Closing Balance</div>
                        </div>

                        <div class="swp-table-row">
                            <div>1</div>
                            <div>₹50,000</div>
                            <div>₹1,000</div>
                            <div>₹408</div>
                            <div>₹49,408</div>
                        </div>

                        <div class="swp-table-row">
                            <div>2</div>
                            <div>₹49,408</div>
                            <div>₹1,000</div>
                            <div>₹403</div>
                            <div>₹48,811</div>
                        </div>

                        <div class="swp-table-row">
                            <div>3</div>
                            <div>₹48,811</div>
                            <div>₹1,000</div>
                            <div>₹398</div>
                            <div>₹48,209</div>
                        </div>

                        <div class="swp-table-row">
                            <div>4</div>
                            <div>₹48,209</div>
                            <div>₹1,000</div>
                            <div>₹393</div>
                            <div>₹47,602</div>
                        </div>

                        <div class="swp-table-row">
                            <div>5</div>
                            <div>₹47,602</div>
                            <div>₹1,000</div>
                            <div>₹388</div>
                            <div>₹46,990</div>
                        </div>

                        <div class="swp-table-row">
                            <div>6</div>
                            <div>₹46,990</div>
                            <div>₹1,000</div>
                            <div>₹383</div>
                            <div>₹46,373</div>
                        </div>

                        <div class="swp-table-row">
                            <div>7</div>
                            <div>₹46,373</div>
                            <div>₹1,000</div>
                            <div>₹378</div>
                            <div>₹45,751</div>
                        </div>

                        <div class="swp-table-row">
                            <div>8</div>
                            <div>₹45,751</div>
                            <div>₹1,000</div>
                            <div>₹373</div>
                            <div>₹45,124</div>
                        </div>

                        <div class="swp-table-row">
                            <div>9</div>
                            <div>₹45,124</div>
                            <div>₹1,000</div>
                            <div>₹368</div>
                            <div>₹44,492</div>
                        </div>

                        <div class="swp-table-row">
                            <div>10</div>
                            <div>₹44,492</div>
                            <div>₹1,000</div>
                            <div>₹362</div>
                            <div>₹43,854</div>
                        </div>

                        <div class="swp-table-row">
                            <div>11</div>
                            <div>₹43,854</div>
                            <div>₹1,000</div>
                            <div>₹357</div>
                            <div>₹43,211</div>
                        </div>

                        <div class="swp-table-row">
                            <div>12</div>
                            <div>₹43,211</div>
                            <div>₹1,000</div>
                            <div>₹352</div>
                            <div>₹42,563</div>
                        </div>
                    </div>

                    <p>In this illustration, the investor withdraws ₹12,000 over one year while the remaining investment continues to stay invested. The final balance depends on the assumed return and the timing of withdrawals.</p>
                </section>

                <section class="swp-section">
                    <h2>How to Use the SWP Calculator?</h2>
                    <p>Using the Tradezy SWP calculator is simple. Enter the following information according to your investment plan:</p>

                    <ol>
                        <li><strong>Initial Investment:</strong> Enter the lump sum amount invested in the mutual fund.</li>
                        <li><strong>Withdrawal Amount:</strong> Enter the amount you plan to withdraw during each withdrawal period.</li>
                        <li><strong>Withdrawal Frequency:</strong> Select how often you want to withdraw the amount, such as monthly, quarterly, or yearly.</li>
                        <li><strong>Investment Period:</strong> Select the number of years you plan to remain invested.</li>
                        <li><strong>Expected Return:</strong> Enter an assumed annual rate of return.</li>
                    </ol>

                    <p>After entering these values, the calculator estimates the total amount withdrawn, potential returns, and estimated balance remaining at the end of the selected period.</p>
                </section>

                <section class="swp-section">
                    <h2>Benefits of Using an SWP Calculator</h2>
                    <p>An SWP calculator can be useful for investors who want to understand how regular withdrawals may affect their investment over time.</p>

                    <ul>
                        <li><strong>Plan regular withdrawals:</strong> Estimate how much you may withdraw at regular intervals.</li>
                        <li><strong>Understand your remaining balance:</strong> See how your investment may change after each withdrawal.</li>
                        <li><strong>Compare withdrawal scenarios:</strong> Try different withdrawal amounts, investment periods, and assumed returns.</li>
                        <li><strong>Plan cash flow:</strong> Understand how a regular withdrawal strategy may fit into your financial planning.</li>
                        <li><strong>Save calculation time:</strong> Quickly calculate estimates without manually performing the calculations.</li>
                    </ul>
                </section>

                <section class="swp-section">
                    <h2>Who Can Consider an SWP?</h2>
                    <p>SWPs may be useful for investors who want to withdraw money from an existing mutual fund investment at regular intervals instead of redeeming the entire investment at once.</p>
                    <p>For example, investors looking for a regular cash flow may use an SWP as part of their financial planning. However, the suitability of an SWP depends on factors such as investment goals, withdrawal requirements, market conditions, and risk tolerance.</p>
                </section>

                <section class="swp-section">
                    <h2>Things to Remember Before Using an SWP</h2>
                    <ul>
                        <li>SWP withdrawals are made by redeeming units from the mutual fund investment.</li>
                        <li>Mutual fund returns are market-linked and are not guaranteed.</li>
                        <li>A higher withdrawal amount may reduce the investment balance faster.</li>
                        <li>The actual return may differ significantly from the assumed return used in the calculator.</li>
                        <li>Taxes, exit loads, expense ratios, and other applicable charges may affect actual outcomes.</li>
                        <li>An SWP does not guarantee a fixed return or preservation of the original investment.</li>
                    </ul>
                </section>

                <section class="swp-disclaimer">
                    <h3>Disclaimer</h3>
                    <p>Tradezy is a learning and demonstration project created for educational purposes. The SWP calculator provides mathematical estimates based on the values entered by the user and should not be considered investment advice.</p>
                    <p>Actual mutual fund returns may vary depending on market conditions and other factors. The examples shown are illustrative and do not represent guaranteed returns or actual performance of any mutual fund.</p>
                </section>
            </div>

        </>
    );
}

export default Swp;