import React, {useState, useEffect} from "react";
import profile from "../../../Assets/profile.png";
import ReactStars from "react-rating-stars-component";
import Button from "../../../Components/button/button";

const ArtistCard = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1919px)").matches
)
useEffect(() => {
    window
        .matchMedia("(max-width: 1919px)")
        .addEventListener('change', e => setMatches(e.matches));
}, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="row artistCard">
      <div className="col-4">
        <img style={{ width: "100%" }} src={profile} alt="profileimg" />
        <p className="artistCardView">view profile {"&"} reviews</p>
        <p className="profile_description">
          You can chat with your artist, adjust task details, or change task
          time after booking.
        </p>
        <Button color='#fff'
          textColor='#523105'
          text='SELECT & CONTINUE'
          padding='6px'
          height={`${matches ? '50px' : '67px'}`}
          width='100%'
          fontSize={`${matches ? '8px' : '15px'}`}
          fontWeight='900'
          border='1.5px solid #B4B4B5' />
      </div>
      <div className="col-8">
        <div className="artistCardNameandprice">
          <div className="ratings">
            <h2 className="artistCardH2">michel g.</h2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div className="review_percentage">4.9 (7.5 Reviews)</div>
            <div className="review_percentage">
              120 Painting Projects
            </div>
          </div>
          <div>
            <h2 className="artistCardPriceH2">$500/HR</h2>
            <button className="artistCardPriceButton">create value</button>
          </div>
        </div>
        <hr />
        <div className="skill_des">

          Carving is a painting technique that involves using tools to shape a
          form by curring or scraping away from a solid material such as
          stone, wood, ivory or bone.
          <div className="read_more">Read more</div>
        </div>
        <hr />
        <p className="open_for_newProject">open for new project</p>
      </div>
    </div>
  );
};

export default ArtistCard;
