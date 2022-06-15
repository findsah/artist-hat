
import ownboss from "../../../Assets/ownboss.svg";
import ownrates from "../../../Assets/ownrates.svg";
import ownbusiness from "../../../Assets/ownbusiness.svg";


const FlexibleWork = () => (
    <>
        <div className="headtext">
            <h1 className="headtexth1" style={{ fontSize: "30px", lineHeight: "2" }}>flexible work, at your fingertips</h1>
            <p className="headtextp" style={{ fontSize: "20px" }}>
                Find local jobs that fit your skills and schedule.<br />
                With ArtistHat, you have the freedom and<br />
                support to be your own boss
            </p>
        </div>
        <div className="row justify-content-between" style={{ width: "100%", marginTop: "70px" }}>
            <div className="col-12 col-md-3 text-center">
                <img style={{ height: "25%", width: "80%" }} src={ownboss}  alt="img" />
                <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Be your own boss</h2>
                <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                    Work how, when and where you want. Offer services in 50+ categories
                    and set a flexible schedule and work area.
                </p>
            </div>
            <div className="col-12 col-md-3 text-center">
                <img style={{ height: "25%", width: "80%" }} src={ownrates} alt="img"  />
                <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Set your own rates</h2>
                <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                    You keep 100% of what you charge, plus tips!
                    Invoice and get paid directly through our secure payment system.
                </p>
            </div>
            <div className="col-12 col-md-3 text-center">
                <img style={{ height: "25%", width: "80%" }} src={ownbusiness}  alt="img" />
                <h2 style={{ margin: "3rem 0 1rem 0", color: "#523106", fontSize: "25px", fontWeight: "bold" }}>Grow your business</h2>
                <p style={{ fontSize: "14px", color: "#9599b1", textAlign: "justify" }}>
                    We connect you with clients in your area,
                    and ways to market yourself — so you can focus on what you do best.
                </p>
            </div>
        </div>
    </>
)

export default FlexibleWork;