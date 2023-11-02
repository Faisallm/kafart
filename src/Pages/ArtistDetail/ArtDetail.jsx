import React from "react";
import { useLocation } from "react-router-dom";
import "./ArtDetail.css";
import cardSmall from '../../Components/FashionPageAssets/fashion-small.png';
import Scroller from "../../Components/Scroller/Scroller";
import scroller1 from '../../Components/ArtistAssets/artist6.png';
import scroller2 from '../../Components/ArtistAssets/artist7.png';
import scroller3 from '../../Components/ArtistAssets/artist8.png';

const ArtDetail = () => {
  const location = useLocation();
  const { image, firstName, secondName } = location.state;
  return (
    <div>
      <div className="artist-detail">
        <div className="artist-detail-col-left">
          <div className="artist-name">
            <div>FASHION DESIGNER</div>
            <div className="name">{secondName}</div>
          </div>
        </div>
        <div className="artist-detail-col-right">
          <div className="artist-image">
            <img src={image} alt="Artist Image" />
          </div>
          <div className="artist-background">
            <p>Background</p>
            <p>
              NUCY is Sudanese fashion taking a modern twist on the richness and
              diversity of Sudanese heritage by taking inspiration from the
              traditional garments and taking it to more Artistic, fashionable
              and trendy while keeping quality materials and manufacturing in
              high quality, plus using sustainable and environmentally friendly
              approaches. with belief in the bright future for sustainable
              fashion in the Sudanese fashion industry. <br /> <br /> Nucy has
              established a platform called “Sudan fashion future" as part of
              the social responsibility of the brand, to support the Sudanese
              fashion designers open for discussions on their needs, challenges
              and finding solutions to shape their career future for more
              sustainability to our fashion industry in Sudan.
            </p>
          </div>
          <div className="artist-works">
            <p>Works</p>
            <p>
              The inspiration for my career in fashion design came from a
              combination of my grandmother's influence and my love for
              self-expression.{" "}
            </p>
          </div>
        </div>
      </div>
      <Scroller
          image1={scroller1}
          name1="oladimeji odonsi"
          image2={scroller2}
          name2="oladimeji odonsi"
          image3={scroller3}
          name3="oladimeji odonsi"
        />
      <div className="cardd">
        <div className="card-imager">
          <img style={{ width: '144px' }} src={cardSmall} alt="Card Image" />
        </div>
        <div className="person-details">
          <p>{secondName}</p>
          <span className="circle"> </span> BY {firstName}
        </div>
        <div className="card-button">
          View
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
