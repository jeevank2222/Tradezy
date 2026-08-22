import React from 'react';
import "./Lumpsum.css"

function Lumpsum() {
    return (
        <>
            <div className="lumpsum-information">

                <section className="lumpsum-section">
                    <h2>Lumpsum Calculator – Mutual Fund Lumpsum Calculator</h2>

                    <p>
                        A lumpsum investment is a method of investing a large amount of
                        money in a mutual fund in a single transaction. Unlike a Systematic
                        Investment Plan (SIP), where money is invested periodically, a
                        lumpsum investment allows an investor to invest the entire amount
                        at one time.
                    </p>

                    <p>
                        For example, if you have ₹5,00,000 available for investment, you can
                        invest the entire amount in a mutual fund at once. The investment
                        then remains invested for the selected period and may generate
                        returns based on the performance of the underlying assets.
                    </p>

                    <p>
                        A lumpsum calculator helps estimate the potential value of your
                        investment based on the initial investment amount, expected rate of
                        return, and investment duration.
                    </p>
                </section>

                <section className="lumpsum-section">
                    <h2>How Does a Lumpsum Investment Work?</h2>

                    <p>
                        In a lumpsum investment, the investor puts a predetermined amount
                        into a mutual fund at one time. The invested amount can then grow
                        over the selected investment period through potential capital
                        appreciation and other applicable returns.
                    </p>

                    <p>
                        The future value of the investment depends on the initial amount,
                        expected rate of return, and investment duration. Since mutual fund
                        returns are market-linked, the actual value may be different from
                        the estimated value.
                    </p>

                    <div className="formula-box">
                        <div className="formula">
                            Future Value = Principal × (1 + Rate)<sup>Time</sup>
                        </div>
                    </div>

                    <p>
                        The calculator uses the investment amount, expected return, and
                        duration to estimate the future value of the investment.
                    </p>
                </section>

                <section className="lumpsum-section">
                    <h2>Example of a Lumpsum Investment</h2>

                    <p>
                        Suppose an investor invests ₹1,00,000 in a mutual fund for 5 years
                        and assumes an annual return of 10%. If the investment compounds
                        annually at the assumed rate, the estimated value can be calculated
                        using the lumpsum investment formula.
                    </p>

                    <p>
                        The following table illustrates how the investment could grow over
                        the selected period. The values are hypothetical and actual mutual
                        fund returns may vary.
                    </p>

                    <div className="lumpsum-table">

                        <div className="lumpsum-table-header">
                            <div>Year</div>
                            <div>Opening Value</div>
                            <div>Estimated Return</div>
                            <div>Investment</div>
                            <div>Closing Value</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>1</div>
                            <div>₹1,00,000</div>
                            <div>₹10,000</div>
                            <div>₹1,00,000</div>
                            <div>₹1,10,000</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>2</div>
                            <div>₹1,10,000</div>
                            <div>₹11,000</div>
                            <div>₹1,00,000</div>
                            <div>₹1,21,000</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>3</div>
                            <div>₹1,21,000</div>
                            <div>₹12,100</div>
                            <div>₹1,00,000</div>
                            <div>₹1,33,100</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>4</div>
                            <div>₹1,33,100</div>
                            <div>₹13,310</div>
                            <div>₹1,00,000</div>
                            <div>₹1,46,410</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>5</div>
                            <div>₹1,46,410</div>
                            <div>₹14,641</div>
                            <div>₹1,00,000</div>
                            <div>₹1,61,051</div>
                        </div>

                    </div>

                    <p>
                        In this illustration, the original investment of ₹1,00,000 grows to
                        approximately ₹1,61,051 after 5 years at an assumed annual return
                        of 10%. The estimated gain is approximately ₹61,051.
                    </p>
                </section>

                <section className="lumpsum-section">
                    <h2>How to Use the Lumpsum Calculator?</h2>

                    <p>
                        Using a lumpsum calculator is simple. Enter the following details
                        to estimate the potential future value of your investment:
                    </p>

                    <ol>
                        <li>
                            <strong>Investment Amount:</strong> Enter the amount you want
                            to invest as a lumpsum.
                        </li>

                        <li>
                            <strong>Expected Return:</strong> Enter an assumed annual rate
                            of return for the investment.
                        </li>

                        <li>
                            <strong>Investment Duration:</strong> Enter the number of years
                            you plan to remain invested.
                        </li>
                    </ol>

                    <p>
                        After entering these details, the calculator estimates the
                        potential future value, total investment amount, and estimated
                        wealth gained during the investment period.
                    </p>
                </section>

                <section className="lumpsum-section">
                    <h2>Benefits of Using a Lumpsum Calculator</h2>

                    <p>
                        A lumpsum calculator can help investors understand the potential
                        growth of a one-time investment over different time periods.
                    </p>

                    <ul>
                        <li>
                            <strong>Estimate future value:</strong> Calculate the potential
                            value of your investment after a selected period.
                        </li>

                        <li>
                            <strong>Understand compounding:</strong> See how returns may
                            accumulate when the investment remains invested for a longer
                            period.
                        </li>

                        <li>
                            <strong>Compare investment scenarios:</strong> Test different
                            investment amounts, expected returns, and durations.
                        </li>

                        <li>
                            <strong>Plan long-term investments:</strong> Estimate how a
                            one-time investment could potentially grow over time.
                        </li>

                        <li>
                            <strong>Save calculation time:</strong> Quickly calculate
                            estimated returns without performing the calculation manually.
                        </li>
                    </ul>
                </section>

                <section className="lumpsum-section">
                    <h2>Lumpsum Investment vs SIP</h2>

                    <p>
                        Both lumpsum investments and SIPs are methods of investing in
                        mutual funds, but they differ in how and when the money is
                        invested.
                    </p>

                    <div className="lumpsum-table">

                        <div className="lumpsum-table-header">
                            <div>Feature</div>
                            <div>Lumpsum</div>
                            <div>SIP</div>
                            <div>Investment Pattern</div>
                            <div>Suitable Approach</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>Investment</div>
                            <div>One-time</div>
                            <div>Regular</div>
                            <div>Single amount</div>
                            <div>Large available capital</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>Frequency</div>
                            <div>Usually one-time</div>
                            <div>Monthly or periodic</div>
                            <div>Depends on method</div>
                            <div>Regular investing</div>
                        </div>

                        <div className="lumpsum-table-row">
                            <div>Market Exposure</div>
                            <div>Amount invested at once</div>
                            <div>Invested gradually</div>
                            <div>Different timing</div>
                            <div>Depends on market conditions</div>
                        </div>

                    </div>
                </section>

                <section className="lumpsum-section">
                    <h2>Who Can Consider a Lumpsum Investment?</h2>

                    <p>
                        A lumpsum investment may be considered by investors who have a
                        significant amount of money available for investment and want to
                        invest it in a mutual fund at one time.
                    </p>

                    <p>
                        It may also be considered when an investor has a long-term
                        investment objective and is comfortable with the potential
                        fluctuations associated with market-linked investments.
                    </p>

                    <p>
                        The appropriate investment approach depends on factors such as
                        investment goals, available capital, time horizon, risk tolerance,
                        and market conditions.
                    </p>
                </section>

                <section className="lumpsum-section">
                    <h2>Things to Remember Before Investing a Lumpsum</h2>

                    <ul>
                        <li>
                            Mutual fund returns are market-linked and are not guaranteed.
                        </li>

                        <li>
                            The actual return may be higher or lower than the assumed
                            return used in the calculator.
                        </li>

                        <li>
                            Investing the entire amount at once can expose the investment
                            to market movements immediately.
                        </li>

                        <li>
                            Taxes, expense ratios, exit loads, and other applicable charges
                            may affect the actual returns.
                        </li>

                        <li>
                            A longer investment horizon does not guarantee positive
                            returns, although it may provide more time for potential
                            compounding.
                        </li>

                        <li>
                            The calculator provides estimates and should not be treated as
                            a guarantee of future investment performance.
                        </li>
                    </ul>
                </section>

                <section className="lumpsum-disclaimer">
                    <h3>Disclaimer</h3>

                    <p>
                        Tradezy is a learning and demonstration project created for
                        educational purposes. The lumpsum calculator provides mathematical
                        estimates based on the information entered by the user and should
                        not be considered investment advice.
                    </p>

                    <p>
                        Mutual fund returns are subject to market conditions and may vary
                        over time. The examples and calculations shown are illustrative
                        only and do not represent guaranteed returns or the actual
                        performance of any mutual fund.
                    </p>
                </section>

            </div>
        </>
    );
}

export default Lumpsum;