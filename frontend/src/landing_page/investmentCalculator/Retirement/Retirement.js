import React from 'react';
import "./Retirement.css";

function Retirement() {
    return (
        <>
            <div className="retirement-information">

                <section className="retirement-section">
                    <h2>Retirement Calculator – Plan Your Retirement Corpus</h2>

                    <p>
                        Retirement planning is the process of building enough savings
                        and investments to support your financial needs after you stop
                        working. Starting early can give your investments more time to
                        grow through the power of compounding.
                    </p>

                    <p>
                        A retirement calculator helps you estimate the amount you may
                        need at retirement based on your current age, expected
                        retirement age, current savings, expected returns, inflation,
                        and your expected expenses after retirement.
                    </p>

                    <p>
                        By understanding your potential retirement corpus and the
                        amount you may need to invest regularly, you can create a more
                        structured approach toward your long-term financial goals.
                    </p>
                </section>

                <section className="retirement-section">
                    <h2>How Can a Retirement Calculator Help You?</h2>

                    <p>
                        A retirement calculator can make long-term retirement planning
                        easier by providing an estimate of the corpus you may require
                        in the future.
                    </p>

                    <ul>
                        <li>
                            <strong>Estimate your retirement corpus:</strong> Understand
                            how much money you may need when you retire.
                        </li>

                        <li>
                            <strong>Plan your regular investments:</strong> Estimate
                            how much you may need to invest periodically to work toward
                            your target corpus.
                        </li>

                        <li>
                            <strong>Account for inflation:</strong> Understand how
                            rising prices may affect your future expenses.
                        </li>

                        <li>
                            <strong>Plan your retirement lifestyle:</strong> Estimate
                            the amount required to support your expected expenses after
                            retirement.
                        </li>

                        <li>
                            <strong>Compare different scenarios:</strong> Change the
                            expected return, retirement age, expenses, or investment
                            amount to see how the estimated outcome changes.
                        </li>
                    </ul>
                </section>

                <section className="retirement-section">
                    <h2>How Does a Retirement Calculator Work?</h2>

                    <p>
                        A retirement calculator generally considers your current age,
                        retirement age, current savings, expected investment return,
                        inflation rate, and estimated monthly expenses.
                    </p>

                    <p>
                        The calculator first estimates how much your current and future
                        investments may grow until retirement. It then considers
                        inflation and your expected post-retirement expenses to
                        estimate the corpus that may be required.
                    </p>

                    <div className="retirement-formula-box">
                        <div className="retirement-formula">
                            Future Value = Present Value × (1 + Return)<sup>Time</sup>
                        </div>
                    </div>

                    <p>
                        Since retirement planning involves a long investment period,
                        even small changes in the expected return, inflation rate, or
                        investment period can significantly affect the estimated
                        retirement corpus.
                    </p>
                </section>

                <section className="retirement-section">
                    <h2>Example of Retirement Planning</h2>

                    <p>
                        Consider a person who is currently 30 years old and plans to
                        retire at the age of 60. Suppose the person expects to live
                        until the age of 80 after retirement.
                    </p>

                    <p>
                        Assume the following values for illustration:
                    </p>

                    <div className="retirement-example-card">

                        <div className="retirement-example-row">
                            <span>Current Age</span>
                            <strong>30 Years</strong>
                        </div>

                        <div className="retirement-example-row">
                            <span>Retirement Age</span>
                            <strong>60 Years</strong>
                        </div>

                        <div className="retirement-example-row">
                            <span>Life Expectancy</span>
                            <strong>80 Years</strong>
                        </div>

                        <div className="retirement-example-row">
                            <span>Current Monthly Expenses</span>
                            <strong>₹40,000</strong>
                        </div>

                        <div className="retirement-example-row">
                            <span>Expected Inflation</span>
                            <strong>6%</strong>
                        </div>

                        <div className="retirement-example-row">
                            <span>Expected Investment Return</span>
                            <strong>10%</strong>
                        </div>

                    </div>

                    <p>
                        In this example, the current monthly expenses will likely be
                        higher by the time the person reaches retirement because of
                        inflation. The calculator uses the selected inflation and
                        investment return assumptions to estimate the amount required
                        at retirement.
                    </p>

                    <div className="retirement-calculation-box">

                        <p>
                            <strong>Years Until Retirement:</strong> 30 years
                        </p>

                        <p>
                            <strong>Estimated Retirement Period:</strong> 20 years
                        </p>

                        <p>
                            <strong>Current Monthly Expense:</strong> ₹40,000
                        </p>

                        <p>
                            <strong>Expected Inflation:</strong> 6% per year
                        </p>

                        <p>
                            <strong>Expected Investment Return:</strong> 10% per year
                        </p>

                    </div>

                    <p>
                        These figures are only an illustration. The actual retirement
                        corpus required will depend on your expenses, inflation,
                        investment returns, retirement duration, taxes, and other
                        financial requirements.
                    </p>
                </section>

                <section className="retirement-section">
                    <h2>How Much Should You Save for Retirement?</h2>

                    <p>
                        The amount you need to save for retirement depends on several
                        factors. Someone starting early may need to invest a smaller
                        amount regularly because the investment has more time to
                        compound.
                    </p>

                    <div className="retirement-table">

                        <div className="retirement-table-header">
                            <div>Starting Age</div>
                            <div>Years to Retirement</div>
                            <div>Investment Period</div>
                            <div>Compounding Time</div>
                        </div>

                        <div className="retirement-table-row">
                            <div>25 Years</div>
                            <div>35 Years</div>
                            <div>Long</div>
                            <div>Higher</div>
                        </div>

                        <div className="retirement-table-row">
                            <div>30 Years</div>
                            <div>30 Years</div>
                            <div>Long</div>
                            <div>Higher</div>
                        </div>

                        <div className="retirement-table-row">
                            <div>40 Years</div>
                            <div>20 Years</div>
                            <div>Medium</div>
                            <div>Moderate</div>
                        </div>

                        <div className="retirement-table-row">
                            <div>50 Years</div>
                            <div>10 Years</div>
                            <div>Short</div>
                            <div>Lower</div>
                        </div>

                    </div>

                    <p>
                        This comparison demonstrates why starting retirement planning
                        earlier can provide more time for investments to potentially
                        grow. It does not represent guaranteed investment returns.
                    </p>
                </section>

                <section className="retirement-section">
                    <h2>How to Use the Retirement Calculator?</h2>

                    <p>
                        Using the Tradezy Retirement Calculator is simple. Enter the
                        following information based on your financial situation:
                    </p>

                    <ol>
                        <li>
                            <strong>Current Age:</strong> Enter your current age.
                        </li>

                        <li>
                            <strong>Retirement Age:</strong> Enter the age at which
                            you expect to retire.
                        </li>

                        <li>
                            <strong>Current Monthly Expenses:</strong> Enter your
                            approximate monthly household expenses.
                        </li>

                        <li>
                            <strong>Current Savings:</strong> Enter the amount you
                            have already accumulated for retirement.
                        </li>

                        <li>
                            <strong>Expected Return:</strong> Enter an assumed annual
                            investment return.
                        </li>

                        <li>
                            <strong>Expected Inflation:</strong> Enter an assumed
                            annual inflation rate.
                        </li>

                        <li>
                            <strong>Retirement Duration:</strong> Enter the number of
                            years you expect your retirement corpus to support you.
                        </li>
                    </ol>

                    <p>
                        After entering these values, the calculator can estimate your
                        potential retirement corpus and the amount you may need to
                        invest regularly to work toward your target.
                    </p>
                </section>

                <section className="retirement-section">
                    <h2>Benefits of Using a Retirement Calculator</h2>

                    <p>
                        Retirement calculators can help you create a clearer picture
                        of your long-term financial requirements.
                    </p>

                    <ul>
                        <li>
                            <strong>Simple calculations:</strong> Estimate complex
                            retirement calculations quickly.
                        </li>

                        <li>
                            <strong>Better financial planning:</strong> Understand
                            your potential future financial requirements.
                        </li>

                        <li>
                            <strong>Inflation planning:</strong> Consider the impact
                            of inflation on your future expenses.
                        </li>

                        <li>
                            <strong>Investment planning:</strong> Estimate the
                            investment amount that may be required to work toward
                            your retirement goal.
                        </li>

                        <li>
                            <strong>Scenario comparison:</strong> Change different
                            assumptions and compare possible outcomes.
                        </li>
                    </ul>
                </section>

                <section className="retirement-section">
                    <h2>Factors That Can Affect Your Retirement Corpus</h2>

                    <p>
                        Your retirement corpus can be influenced by several factors,
                        and changing any of these assumptions can affect the final
                        estimate.
                    </p>

                    <ul>
                        <li>
                            <strong>Retirement age:</strong> Retiring earlier may
                            require a larger corpus because you may have fewer years
                            to accumulate savings.
                        </li>

                        <li>
                            <strong>Monthly expenses:</strong> Higher expenses can
                            increase the amount required during retirement.
                        </li>

                        <li>
                            <strong>Inflation:</strong> Rising prices can reduce the
                            purchasing power of your savings over time.
                        </li>

                        <li>
                            <strong>Investment return:</strong> Different investments
                            may generate different returns and involve different
                            levels of risk.
                        </li>

                        <li>
                            <strong>Investment duration:</strong> A longer investment
                            period can provide more time for compounding.
                        </li>

                        <li>
                            <strong>Retirement duration:</strong> A longer retirement
                            period may require a larger retirement corpus.
                        </li>
                    </ul>
                </section>

                <section className="retirement-section">
                    <h2>Things to Remember While Planning for Retirement</h2>

                    <ul>
                        <li>
                            Retirement calculations are based on assumptions and
                            estimates.
                        </li>

                        <li>
                            Actual investment returns may differ from the expected
                            return used in the calculator.
                        </li>

                        <li>
                            Inflation can significantly affect future expenses and
                            should be considered when planning.
                        </li>

                        <li>
                            Healthcare and unexpected expenses may increase the
                            amount required after retirement.
                        </li>

                        <li>
                            Regularly reviewing your retirement plan can help you
                            adjust your investments as your financial circumstances
                            change.
                        </li>

                        <li>
                            Diversification and appropriate risk management are
                            important considerations when selecting investments.
                        </li>
                    </ul>
                </section>

                <section className="retirement-disclaimer">
                    <h3>Disclaimer</h3>

                    <p>
                        Tradezy is a learning and demonstration project created for
                        educational purposes. The Retirement Calculator provides
                        mathematical estimates based on the information entered by
                        the user and should not be considered financial or investment
                        advice.
                    </p>

                    <p>
                        Actual investment returns, inflation, expenses, taxes, and
                        retirement requirements may vary significantly from the
                        assumptions used in the calculator. The examples provided are
                        illustrative only and do not guarantee any particular
                        investment outcome.
                    </p>
                </section>

            </div>
        </>
    );
}

export default Retirement;