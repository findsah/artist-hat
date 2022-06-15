import DownloadStore from "../DownloadStore";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footersection">
      <div className="container">
        <DownloadStore alignments="left" />
        <div className="row footer">
          <div className="col-8 col-sm-3 col-md-3 colum8">
            <h6 className="footerelementstitle">Discover</h6>
            <p className="footerelementsp">How it works</p>
            <p className="footerelementsp">ArtistHat for business</p>
            <p className="footerelementsp">Earn money</p>
            <p className="footerelementsp">new users FAQ</p>
          </div>
          <div className="col-8 col-sm-3 col-md-3 colum8">
            <h6 className="footerelementstitle">Company</h6>
            <p className="footerelementsp">About us</p>
            <p className="footerelementsp">Careers</p>
            <p className="footerelementsp">Media enuiries</p>
            <p className="footerelementsp">Community</p>
            <p className="footerelementsp">guidelines</p>
            <p className="footerelementsp">Artist principles</p>
            <p className="footerelementsp">Terms {"&"} conditions</p>
            <p className="footerelementsp">Privacy policy</p>
            <p className="footerelementsp">Blog</p>
            <p className="footerelementsp">Contact us</p>
          </div>
          <div className="col-8 col-sm-3 col-md-3 colum8">
            <h6 className="footerelementstitle">Existing</h6>
            <p className="footerelementsp">Members</p>
            <p className="footerelementsp">Post a Project</p>
            <p className="footerelementsp">Browse Project</p>
            <p className="footerelementsp">Login</p>
            <p className="footerelementsp">Support center</p>
            <p className="footerelementsp">Merchandise</p>
          </div>
          <div className="col-8 col-sm-3 col-md-3 colum8">
            <h6 className="footerelementstitle">Popular</h6>
            <p className="footerelementsp">Our Categories</p>
            <p className="footerelementsp">Painting Services</p>
            <p className="footerelementsp">Mixed Media Services</p>
            <p className="footerelementsp">Sculpture Services</p>
            <p className="footerelementsp">Grafitti Services</p>
            <p className="footerelementsp">Mosaic Services</p>
            <p className="footerelementsp">Stand Glass Services</p>
            <p className="footerelementsp">All Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
