import Strat from "../assets/images/strategy (2).png"
import Pin from "../assets/images/pin-board.png"
import Rock from "../assets/images/rocket.png"
import FF from "../assets/images/fast-forward (1).png"


function WhySection() {
    return (
        <>
            <div className="chooseSection">
                <h2>WHY CHOOSE US</h2>
                <div className="choose-grid">
                    <div className="TS">
                        <img src={Strat} alt="" />
                        <div className="choose-texts">
                            <h4>Tailored Strategies</h4>
                            <p className="sm">We analyze your unique goals to build hyper-targeted campaigns.</p>
                        </div>
                    </div>
                    <div className="TR">
                        <img src={Pin} alt="" />
                        <div className="choose-texts">
                            <h4>Transparent Results</h4>
                            <p className="sm">You’ll see exactly where your investment goes—with clear reports on sales, leads, and engagement growth, updated in real time.</p>
                        </div>
                    </div>
                    <div className="MB">
                        <img src={Rock} alt="" />
                        <div className="choose-texts">
                            <h4>Built for the Modern Brand</h4>
                            <p className="sm">We’re not stuck in old ways. As a new agency, we blend fresh ideas with proven strategies to make your brand stand out in crowded social feeds</p>
                        </div>
                    </div>
                    <div className="SA">
                        <img src={FF} alt="" />
                        <div className="choose-texts">
                            <h4>Always One Step Ahead</h4>
                            <p className="sm">While others react, we anticipate. Our team continuously adjusts tactics to keep you ahead of algorithm changes and market shifts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WhySection;