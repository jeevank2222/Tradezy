import React from 'react';
import "./Fd.css";

function Fixed() {
    return (
        <>
            <div className="fd-information">

                <section className="fd-section">
                    <h2>FD Calculator – Fixed Deposit Calculator</h2>

                    <p>
                        A Fixed Deposit (FD) is a popular investment option offered by
                        banks and financial institutions. In an FD, you deposit a fixed
                        amount for a predetermined period and earn interest at a rate
                        specified by the financial institution.
                    </p>

                    <p>
                        The investment period can range from a few days to several years,
                        depending on the FD scheme. Unlike market-linked investments, the
                        interest rate on an FD is generally fixed for the selected tenure,
                        subject to the terms and conditions of the deposit.
                    </p>

                    <p>
                        An FD calculator helps you estimate the interest earned and the
                        maturity amount you may receive at the end of the investment
                        period.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>How Can an FD Calculator Help You?</h2>

                    <p>
                        Calculating the maturity value of a fixed deposit manually can
                        involve multiple calculations, especially when interest is
                        compounded at regular intervals.
                    </p>

                    <p>
                        An FD calculator simplifies this process by allowing you to enter
                        the deposit amount, interest rate, tenure, and compounding
                        frequency. It then provides an estimate of the interest earned and
                        the total amount payable at maturity.
                    </p>

                    <p>
                        You can also use the calculator to compare different deposit
                        amounts and investment durations before choosing an FD.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>How Is FD Interest Calculated?</h2>

                    <p>
                        FD interest can generally be calculated using either a simple
                        interest approach or a compound interest approach, depending on
                        the type of deposit and its terms.
                    </p>

                    <div className="formula-box">
                        <div className="formula">
                            M = P + (P × R × T / 100)
                        </div>
                    </div>

                    <p>
                        For simple interest, the variables in the formula represent:
                    </p>

                    <ul>
                        <li>
                            <strong>M:</strong> Maturity amount
                        </li>
                        <li>
                            <strong>P:</strong> Principal or initial deposit amount
                        </li>
                        <li>
                            <strong>R:</strong> Annual interest rate
                        </li>
                        <li>
                            <strong>T:</strong> Investment tenure
                        </li>
                    </ul>

                    <p>
                        For example, if you deposit ₹1,00,000 for 5 years at an assumed
                        simple interest rate of 10% per year:
                    </p>

                    <div className="calculation-box">
                        <p>
                            <strong>Interest = ₹1,00,000 × 10 × 5 / 100</strong>
                        </p>

                        <p>
                            <strong>Interest = ₹50,000</strong>
                        </p>

                        <p>
                            <strong>Maturity Amount = ₹1,50,000</strong>
                        </p>
                    </div>

                    <p>
                        The actual interest calculation for an FD depends on the product
                        terms offered by the bank or financial institution.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>Compound Interest FD Calculation</h2>

                    <p>
                        In a compound interest FD, the interest earned can be added to the
                        principal at regular intervals. Future interest is then calculated
                        on the accumulated amount.
                    </p>

                    <div className="formula-box">
                        <div className="formula">
                            M = P × (1 + R / n)<sup>nT</sup>
                        </div>
                    </div>

                    <p>
                        Here, the variables represent:
                    </p>

                    <ul>
                        <li>
                            <strong>M:</strong> Maturity amount
                        </li>
                        <li>
                            <strong>P:</strong> Initial deposit
                        </li>
                        <li>
                            <strong>R:</strong> Annual interest rate in decimal form
                        </li>
                        <li>
                            <strong>n:</strong> Number of compounding periods per year
                        </li>
                        <li>
                            <strong>T:</strong> Investment period in years
                        </li>
                    </ul>

                    <p>
                        For example, if ₹1,00,000 is invested for 5 years at an assumed
                        annual rate of 10% with annual compounding, the estimated maturity
                        value would be approximately ₹1,61,051.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>Example of an FD Investment</h2>

                    <p>
                        Suppose you invest ₹1,00,000 in a fixed deposit for 5 years at an
                        assumed annual interest rate of 10%, compounded annually. The
                        following illustration shows how the deposit could grow over the
                        investment period.
                    </p>

                    <div className="fd-table">

                        <div className="fd-table-header">
                            <div>Year</div>
                            <div>Opening Amount</div>
                            <div>Interest</div>
                            <div>Rate</div>
                            <div>Closing Amount</div>
                        </div>

                        <div className="fd-table-row">
                            <div>1</div>
                            <div>₹1,00,000</div>
                            <div>₹10,000</div>
                            <div>10%</div>
                            <div>₹1,10,000</div>
                        </div>

                        <div className="fd-table-row">
                            <div>2</div>
                            <div>₹1,10,000</div>
                            <div>₹11,000</div>
                            <div>10%</div>
                            <div>₹1,21,000</div>
                        </div>

                        <div className="fd-table-row">
                            <div>3</div>
                            <div>₹1,21,000</div>
                            <div>₹12,100</div>
                            <div>10%</div>
                            <div>₹1,33,100</div>
                        </div>

                        <div className="fd-table-row">
                            <div>4</div>
                            <div>₹1,33,100</div>
                            <div>₹13,310</div>
                            <div>10%</div>
                            <div>₹1,46,410</div>
                        </div>

                        <div className="fd-table-row">
                            <div>5</div>
                            <div>₹1,46,410</div>
                            <div>₹14,641</div>
                            <div>10%</div>
                            <div>₹1,61,051</div>
                        </div>

                    </div>

                    <p>
                        Based on this illustration, the ₹1,00,000 deposit could grow to
                        approximately ₹1,61,051 after 5 years. The estimated interest
                        earned would therefore be approximately ₹61,051.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>How to Use the FD Calculator?</h2>

                    <p>
                        Using an FD calculator is simple. Enter the following details to
                        estimate the maturity value of your fixed deposit:
                    </p>

                    <ol>
                        <li>
                            <strong>Deposit Amount:</strong> Enter the amount you plan to
                            invest in the fixed deposit.
                        </li>

                        <li>
                            <strong>Interest Rate:</strong> Enter the annual interest rate
                            offered on the FD.
                        </li>

                        <li>
                            <strong>Investment Tenure:</strong> Enter the period for which
                            you want to keep the deposit invested.
                        </li>

                        <li>
                            <strong>Compounding Frequency:</strong> Select how frequently
                            the interest is compounded, if applicable.
                        </li>
                    </ol>

                    <p>
                        After entering these details, the calculator estimates the interest
                        earned and the maturity amount based on the selected inputs.
                    </p>
                </section>

                <section className="fd-section">
                    <h2>Benefits of Using an FD Calculator</h2>

                    <p>
                        An FD calculator can help you understand the potential outcome of
                        your fixed deposit before investing.
                    </p>

                    <ul>
                        <li>
                            <strong>Estimate maturity amount:</strong> Calculate the
                            approximate amount you may receive when the FD matures.
                        </li>

                        <li>
                            <strong>Calculate interest earned:</strong> Understand how
                            much interest your deposit could generate.
                        </li>

                        <li>
                            <strong>Compare investment options:</strong> Test different
                            deposit amounts, interest rates, and tenures.
                        </li>

                        <li>
                            <strong>Plan your finances:</strong> Estimate the amount that
                            may be available at the end of the FD tenure.
                        </li>

                        <li>
                            <strong>Save calculation time:</strong> Get quick estimates
                            without manually applying the FD formula.
                        </li>
                    </ul>
                </section>

                <section className="fd-section">
                    <h2>Types of Fixed Deposits</h2>

                    <p>
                        Financial institutions may offer different types of fixed deposits
                        based on tenure, interest payout, withdrawal conditions, and
                        eligibility.
                    </p>

                    <ul>
                        <li>
                            <strong>Cumulative FD:</strong> Interest is accumulated and
                            generally paid along with the principal at maturity.
                        </li>

                        <li>
                            <strong>Non-Cumulative FD:</strong> Interest may be paid at
                            regular intervals such as monthly, quarterly, half-yearly, or
                            annually.
                        </li>

                        <li>
                            <strong>Tax-Saving FD:</strong> Certain eligible fixed deposits
                            may offer tax-related benefits subject to applicable rules and
                            lock-in conditions.
                        </li>

                        <li>
                            <strong>Senior Citizen FD:</strong> Some institutions may
                            provide additional interest rates to eligible senior citizens.
                        </li>

                        <li>
                            <strong>Flexi or Sweep FD:</strong> Some products may link the
                            deposit with a savings or current account to provide additional
                            flexibility, subject to the institution's terms.
                        </li>
                    </ul>
                </section>

                <section className="fd-section">
                    <h2>FD vs Other Investment Options</h2>

                    <p>
                        A fixed deposit is generally designed to provide a predetermined
                        interest rate for a selected period. Other investment options may
                        have different levels of risk, return potential, and liquidity.
                    </p>

                    <div className="fd-table">

                        <div className="fd-table-header">
                            <div>Feature</div>
                            <div>Fixed Deposit</div>
                            <div>Mutual Fund</div>
                            <div>Return Type</div>
                            <div>Market Linked</div>
                        </div>

                        <div className="fd-table-row">
                            <div>Risk</div>
                            <div>Generally lower</div>
                            <div>Varies by fund</div>
                            <div>Interest / Returns</div>
                            <div>Usually no</div>
                        </div>

                        <div className="fd-table-row">
                            <div>Investment</div>
                            <div>One-time deposit</div>
                            <div>Lumpsum or SIP</div>
                            <div>Fixed / Market-linked</div>
                            <div>Depends on product</div>
                        </div>

                        <div className="fd-table-row">
                            <div>Tenure</div>
                            <div>Predetermined</div>
                            <div>Flexible</div>
                            <div>Depends on investment</div>
                            <div>Yes for mutual funds</div>
                        </div>

                    </div>
                </section>

                <section className="fd-section">
                    <h2>Things to Remember Before Investing in an FD</h2>

                    <ul>
                        <li>
                            Interest rates can vary between banks and financial
                            institutions.
                        </li>

                        <li>
                            Premature withdrawal may be subject to penalties or reduced
                            interest depending on the FD terms.
                        </li>

                        <li>
                            Tax may be applicable on the interest earned from a fixed
                            deposit according to applicable tax rules.
                        </li>

                        <li>
                            The actual maturity amount depends on the interest rate,
                            tenure, compounding frequency, and terms of the FD.
                        </li>

                        <li>
                            Deposit insurance and other protections, where applicable,
                            depend on the relevant rules and limits.
                        </li>

                        <li>
                            Always review the terms and conditions provided by the
                            financial institution before investing.
                        </li>
                    </ul>
                </section>

                <section className="fd-disclaimer">
                    <h3>Disclaimer</h3>

                    <p>
                        Tradezy is a learning and demonstration project created for
                        educational purposes. The FD calculator provides mathematical
                        estimates based on the information entered by the user and should
                        not be considered financial or investment advice.
                    </p>

                    <p>
                        Actual FD returns and maturity amounts may vary depending on the
                        interest rate, compounding method, tenure, taxes, penalties, and
                        other applicable terms. The examples shown are illustrative only.
                    </p>
                </section>

            </div>
        </>
    );
}

export default Fixed;