
const GetStartCard = ({ imgSrc, title, description }) => (
    <>
        <div className="getStartCard">
            <img src={imgSrc} className="getStartCardImg"  alt="img" />
            <h6
                style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#523106",
                    marginBottom: "15px"
                }}
            >{title}</h6>
            <p
                style={{
                    fontSize: "14px",
                    color: "#9599b1",
                    textAlign: "justify"
                }}
            >{description}</p>
        </div>
    </>
)

export default GetStartCard;